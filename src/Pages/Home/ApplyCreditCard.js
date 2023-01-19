import CheckIcon from "@mui/icons-material/Check";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import creditCardImg from "../../assets/apply-loan/credit-card-img.png";
import { AuthContext } from "../../context/AuthProvider";
const ApplyCreditCard = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.displayName);
  const handleApply = (event) => {
    event.preventDefault();
    const applierName = user?.displayName;
    const accountId = event.target.accountId.value;

    const applierInfo = {
      applierName,
      accountId,
    };

    fetch("http://localhost:5000/appliers", {
      method: "POST",
      headers: {
        "content-type": "application.json",
      },
      body: JSON.stringify(applierInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
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
              <Box
                onSubmit={handleApply}
                component="form"
                noValidate
                autoComplete="off"
              >
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
                  name="accountId"
                  required
                  variant="outlined"
                  type="number"
                  sx={{
                    width: "340px",
                    height: "60px",
                    marginBottom: "20px",
                  }}
                />
                <div>
                  <button className="primary-btn" type="submit">
                    Apply Now
                  </button>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyCreditCard;
