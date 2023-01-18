import CheckIcon from "@mui/icons-material/Check";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import creditCardImg from "../../assets/apply-loan/credit-card-img.png";
const ApplyCreditCard = () => {
  return (
    <div className="credit-card-area py-16">
      <div className="container">
        <div className="credit-card-wrap flex column-reverse md:flex-row md:flex-row items-center">
          <div className="credit-card-img mb-[32px] md:mb-0 md:mr-12">
            <img src={creditCardImg} className="w-full" alt="" srcset="" />
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
            <p>
              <span className="">
                <CheckIcon className="text-white bg-[#DF0303] text-[22px] p-[2px] rounded-md mr-1" />
              </span>
              Velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="my-2">
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Name"
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
                  variant="outlined"
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
