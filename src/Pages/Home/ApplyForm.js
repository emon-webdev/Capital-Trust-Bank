import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import apply from "../../assets/Services(Home)/apply-form-box-bg.jpg";
import { blue } from "@mui/material/colors";

export default function ApplyForm() {
  return (
    <div className="apply-area w-100 d-flex justify-center">
      <Box
        display={"flex"}
        alignItems="center"
        width="100%"
        mx={"auto"}
        height={"500px"}
        sx={{
          backgroundImage: `url(${apply})`,
          backgroundRepeat: "no-repeat",
         
        }}
        maxWidth="1200px"
      >
        <Box
          sx={{
            background: "#F7F1EB",
            marginLeft: "500px",
            marginTop: "10px",
            width: "50%",
          }}
        >
          <div className=""></div>
          <form style={{ height: "400px" }} className="p-5 mb-4 ">
            <input className="border m-3 p-2" height={"100px"} placeholder="Your Name"></input>
            <input className="border m-3 p-2" placeholder="Email"></input>
            <br />
            <input className="border m-3 p-2" placeholder="Phone"></input>
            <input className="border m-3 p-2" placeholder="State"></input>
            <br />
            <input className="border m-3 p-2" placeholder="City"></input>
            <input className="border m-3 p-2" placeholder="Date"></input>
            <button className="primary-btn d-flex items-center justify-center" type="submit">
                    Send
                  </button>
          </form>
     
        </Box>
      </Box>
    </div>
  );
}
