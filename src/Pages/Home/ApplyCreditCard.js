import CheckIcon from "@mui/icons-material/Check";
import { TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import creditCardImg from "../../assets/apply-loan/credit-card-img.png";
import Spinner from "../../component/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider";
const ApplyCreditCard = () => {
  const { user, loading } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [idError, setIdError] = useState([]);
  const [applierEmail, setApplierEmail] = useState([]);

  useEffect(() => {
    fetch(`https://capital-trust-bank-server.vercel.app/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setApplierEmail(data[0]);
      });
  }, []);
  if (loading) {
    return <Spinner />;
  }

  // apply for credit card
  const handleApply = (data) => {
    // event.preventDefault();
    setIdError("");
    const applierName = user?.displayName;
    const accountId = data.accountId;
    console.log("applierEmail id", applierEmail._id);
    console.log("accountId", accountId);
    if (applierEmail?._id === accountId) {
      const applierInfo = {
        applierName,
        accountId,
      };
      fetch(`https://capital-trust-bank-server.vercel.app/cardAppliers`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(applierInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            console.log(data);
            toast.success("Apply Success for card");
            reset();
          }
        })
        .then((error) => console.error(error));
    } else {
      setIdError("Account Id did't match");
    }
  };

  return (
    <div className="credit-card-area py-16">
      <div className="container">
        <div className="credit-card-wrap flex column-reverse md:flex-row items-center">
          <div className="credit-card-img mb-[32px] md:mb-0 md:mr-12">
            <img src={creditCardImg} className="w-full" alt="" srcSet="" />
          </div>
          <div className="credit-card-content dot-shape">
            <h2 className=" text-3xl md:text-4xl">Apply for Credit Card</h2>
            <p>
              Porttitor ornare fermentum aliquam pharetra ut facilisis gravida
              risus suscipit. dui feugiat fusce
            </p>
            <p>
              <span className="">
                <CheckIcon className="text-white bg-[#DF0303] text-[22px] p-[2px] rounded-md mr-1" />
              </span>
              The master-builder of great explorer
            </p>
            <p>
              <span className="">
                <CheckIcon className="text-white bg-[#DF0303] text-[22px] p-[2px] rounded-md mr-1" />
              </span>
              Velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="my-2">
              <form onSubmit={handleSubmit(handleApply)}>
                <div>
                  <TextField
                    id="outlined-basic"
                    label={` ${user ? user?.displayName : "Please Sign In"} `}
                    name="applierName"
                    aria-readonly
                    disabled
                    variant="outlined"
                    sx={{
                      width: "340px",
                      height: "60px",
                      marginBottom: "12px",
                      marginRight: "15px",
                    }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Account Id"
                    required
                    variant="outlined"
                    sx={{
                      width: "340px",
                      height: "60px",
                    }}
                    {...register("accountId", {
                      required: "Account Id is Required",
                      minLength: {
                        value: 24,
                        message: "Account Id Minimum 24 character",
                      },
                      maxLength: {
                        value: 24,
                        message: "Account Id Must be 24 character",
                      },
                    })}
                  />
                  {idError && (
                    <p className="text-red-600 text-sm mb-0">{idError}</p>
                  )}
                  {errors.accountId && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.accountId?.message}
                    </p>
                  )}
                  <div>
                    <button className="primary-btn mt-5" type="submit">
                      Apply Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyCreditCard;
