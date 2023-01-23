import CheckIcon from "@mui/icons-material/Check";
import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import creditCardImg from "../../assets/apply-loan/credit-card-img.png";
import { AuthContext } from "../../context/AuthProvider";
const ApplyCreditCard = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleApply = (data) => {
    // event.preventDefault();
    const applierName = user?.displayName;
    const accountId = data.accountId;
    const applierInfo = {
      applierName,
      accountId,
    };
    console.log(applierInfo);
    fetch("http://localhost:5000/cardAppliers", {
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
        }
      })
      .then((error) => console.error(error));
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
                      marginBottom: "20px",
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
                  {errors.accountId && (
                    <p className="text-red-600 text-sm mb-0">
                      {errors.accountId?.message}
                    </p>
                  )}

                  <div>
                    <button className="primary-btn" type="submit">
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
