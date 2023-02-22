import { Box, Heading, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import useTitle from "../../hooks/useTitle/useTitle";
const DonateSuccess = () => {
  useTitle("DonateSuccess")
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
 
  const query = new URLSearchParams(location.search);
  const transactionID = query.get("transactionId");
  const [donate, setDonate] = useState({});

  useEffect(() => {
    fetch(`https://capital-trust-bank-server.vercel.app/donate/by-transaction-id/${transactionID}`)
      .then((res) => res.json())
      .then((data) => setDonate(data));
  }, [transactionID]);

  return (
    <div className=" bg-[#F3F3FE]">
      <div className="container py-24">
        <div
          className="md:w-2/4 mx-auto py-5 px-4 border-2 bg-white"
          style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%)" }}
        >
          <div className="success-icon text-center mb-5">
            {/* <CheckIcon /> */}
            <AiOutlineCheckCircle className="text-center text-8xl text-green-400 mx-auto" />
            <h2 className="text-green-400 font-bold">
              Your Donate Has Been Success
            </h2>
          </div>
          <div className="flex justify-between border-b-2 mb-2">
            <Box className="mb-2 basis-2/4">
              <Text pt="2" fontSize="sm">
                Name
              </Text>
              <Heading size="xs" textTransform="uppercase">
                {donate?.donarName}
              </Heading>
            </Box>
            <Box className="basis-2/4">
              <Text pt="2" fontSize="sm">
                Amount
              </Text>
              <Heading size="xs" textTransform="uppercase">
                $ {donate?.amount}
              </Heading>
            </Box>
          </div>
          <div className="flex justify-between border-b-2">
            <Box className="mb-2 basis-2/4">
              <Text pt="2" fontSize="sm">
                Currency
              </Text>
              <Heading size="xs" textTransform="uppercase">
                {donate?.currency}
              </Heading>
            </Box>
            <Box className="basis-2/4">
              <Text pt="2" fontSize="sm">
                Transaction Id
              </Text>
              <Heading size="xs" textTransform="uppercase">
                {donate?.transactionId}
              </Heading>
            </Box>
          </div>
          <div className="text-center mt-4">
            <Link to="/" className="sm-btn">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSuccess;
