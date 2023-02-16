import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";

export default function VisaTransaction({ info }) {
  const { user } = useContext(AuthContext);
  return (
    <div
      style={{ height: "250px", width: "400px" }}
      className="container bg-white rounded-lg p-8"
    >
      <div className="" id="credit-card">
        <Box
          style={{
            height: "190px",
            width: "350px",
            background:
              "linear-gradient(90deg, rgba(2,2,31,1) 0%, rgba(2,24,55,1) 5%, rgba(2,55,89,1) 12%, rgba(6,129,185,1) 61%, rgba(15,14,89,1) 98%, rgba(1,192,238,1) 100%, rgba(0,212,255,1) 100%)",
          }}
          className="visa-card container p-5 rounded-xl"
        >
          <Box display="flex" justifyContent="space-between" paddingX={2}>
            <Text
              color={"white"}
              fontWeight={"bold"}
              letterSpacing={3}
              fontSize={20}
              fontStyle="italic"
            >
              {/* VI<span className="text-red-800">S</span>A */}
              <span className="text-red-800">{info?.cardType}</span>
            </Text>
            <img
              style={{ height: "30px", weight: "35px" }}
              src="https://i.ibb.co/GTP7p1V/png-transparent-integrated-circuit-smart-card-card-chip-electronics-text-rectangle-thumbnail-1-1.png"
              alt=""
            />
          </Box>
          <Text
            letterSpacing={2}
            fontWeight="semibold"
            fontSize={18}
            paddingX={2}
            marginTop={2}
            color="whitesmoke"
          >
            {/* Active Balance */}
            {info?.applierName}
          </Text>
          {/* <Text
            fontSize={20}
            letterSpacing={2}
            fontWeight="bold"
            paddingX={2}
            color="whitesmoke"
            marginTop={3}
          >
            <span className="text-red-800">$</span> 45000
          </Text> */}
          <div className="flex mt-3 justify-between px-4">
            <Text
              fontSize={18}
              fontStyle="italic"
              letterSpacing={4}
              color="whitesmoke"
              marginTop={2}
            >
              {/* {user?.displayName} */}
              {info?.accountId}
            </Text>
            {/* <Text
              fontSize={18}
              marginTop={2}
              letterSpacing={2}
              color="whitesmoke"
            >
              05/24
            </Text> */}
          </div>
        </Box>
        {/* <div className="mt-8">
          <h3>Quick Transfer</h3>
          <Box display="flex" justifyContent="space-between">
            <input
              style={{
                height: "35px",
                width: "250px",
                borderRadius: "10px",
                paddingLeft: "10px",
                backgroundColor: "grey",
              }}
              type="number"
              placeholder="Account Number"
            />
            <Button marginRight="50px">
              <FiSend />
            </Button>
          </Box>
        </div> */}
      </div>
    </div>
  );
}
