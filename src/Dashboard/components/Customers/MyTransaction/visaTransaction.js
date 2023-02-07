import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { FiSend } from "react-icons/fi";
import { AuthContext } from "../../../../context/AuthProvider";

export default function VisaTransaction() {
  const { user } = useContext(AuthContext);
  return (
    <div
      style={{ height: "700px", width: "400px" }}
      className="container bg-red-300 rounded-lg p-10"
    >
      <div className="">
        <Box
          style={{
            height: "190px",
            width: "100%",
            background:
              "linear-gradient(90deg, rgba(2,2,31,1) 0%, rgba(2,24,55,1) 5%, rgba(2,55,89,1) 12%, rgba(6,129,185,1) 61%, rgba(15,14,89,1) 98%, rgba(1,192,238,1) 100%, rgba(0,212,255,1) 100%)",
          }}
          className="visa-card container p-5 rounded-xl"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            paddingX={2}
            className=""
          >
            <h1 className="text-white text-xl italic tracking-widest">
              VI<span className="text-red-800">S</span>A
            </h1>
            <img
              style={{ height: "30px", weight: "35px" }}
              src="https://i.ibb.co/GTP7p1V/png-transparent-integrated-circuit-smart-card-card-chip-electronics-text-rectangle-thumbnail-1-1.png"
              alt=""
            />
          </Box>
          <Typography
            letterSpacing={1}
            fontWeight="semibold"
            fontSize={18}
            paddingX={2}
            color="whitesmoke"
          >
            Active Balance
          </Typography>
          <Typography
            fontSize={20}
            letterSpacing={2}
            fontWeight="bold"
            paddingX={2}
            color="whitesmoke"
            marginTop={1}
          >
            <span>$</span> 45000
          </Typography>
          <div className="flex mt-3 justify-between px-4">
            <Typography fontStyle="italic" letterSpacing={3} color="whitesmoke">
              {user?.displayName}
            </Typography>
            <Typography letterSpacing={2} color="whitesmoke">
              05/24
            </Typography>
          </div>
        </Box>
        <div className="mt-8">
          <h3>Quick Transfer</h3>
          <Box display="flex" justifyContent="space-between">
            <input
              style={{
                height: "30px",
                width: "250px",
                borderRadius: "10px",
                paddingLeft: "10px",
              }}
              type="number"
              placeholder="Account Number"
            />
            <Button marginRight="50px">
              <FiSend />
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}