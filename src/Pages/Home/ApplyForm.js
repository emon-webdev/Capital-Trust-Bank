import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import apply from "../../assets/Services(Home)/apply-form-box-bg.jpg";

export default function ApplyForm() {
  return (
    <div className="apply-area w-100 d-flex justify-center" >
      <Box
      display={'flex'}
      alignItems='center'
        height={"500px"}
        sx={{
          backgroundImage: `url(${apply})`,
          backgroundRepeat: "no-repeat",
          filter: "grayscale(100%)",
        }}
        width="1200px"
      >
        <Box  sx={{ background: "#F7F1EB",marginLeft:'500px', marginTop:'10px', width:"50%" }}>
          <form style={{height:"300px",}} className="p-5 mb-4 ">
            <input className="border m-3 p-2" placeholder="Your Name"></input>
            <input className="border m-3 p-2" placeholder="Email"></input>
            <br />
            <input className="border m-3 p-2" placeholder="Phone"></input>
            <input className="border m-3 p-2" placeholder="State"></input>
            <br />
            <input className="border m-3 p-2" placeholder="City"></input>
            <input className="border m-3 p-2" placeholder="Date"></input>
          </form>
          <Button  variant="contained" sx={{background:"#010DFA",marginLeft:'30px',marginY:'5px'}}>Send</Button>
        </Box>
      </Box>
    </div>
  );
}
