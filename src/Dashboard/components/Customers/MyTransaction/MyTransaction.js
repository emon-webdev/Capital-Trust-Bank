import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useDisclosure
} from "@chakra-ui/react";

import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../../context/AuthProvider";
import useTitle from "../../../../hooks/useTitle/useTitle";

export default function MyTransaction() {
  useTitle("MyTransaction")
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user } = useContext(AuthContext);
  const [transacData, setTransacData] = useState([]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_KEY}/depositWithdraw/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTransacData(data);
      });
  }, []);

  const handleDownload = async (data) => {
    console.log(data);
  };
  return (
    <div className=" container  gap-5 flex-col md:flex-row lg:flex-row align-items-center justify-content-center">
      <div className="">
        <TableContainer
          borderRadius={10}
          backgroundColor="white"
          marginX={2}
          marginY={10}
          marginLeft={20}
          height={500}
          overflowY="scroll"
          overflowX="scroll"
        >
          <Table variant="simple">
            <Thead className="py-2 rounded-t-md bg-[#041C51]">
              <Tr>
                <Th color="white" fontSize={24} paddingY={6}>
                  Date
                </Th>
                <Th color="white" fontSize={24} paddingY={6}>
                  Time
                </Th>
                <Th color="white" fontSize={24} paddingY={6}>
                  Amount
                </Th>
                <Th color="#041C51" fontSize={24} paddingY={6}>
                  Type
                </Th>
                <Th color="#041C51" fontSize={24} paddingY={6}>
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {transacData?.map((data) => (
                <Tr key={data._id}>
                  <Td fontSize={24}>{data.date}</Td>
                  <Td fontSize={24}>{data.time}</Td>
                  <Td
                    fontSize={24}
                    style={
                      data.withdraw ? { color: "red" } : { color: "#041C51" }
                    }
                  >
                    ${data.withdraw ? data.withdraw : data.deposit}
                  </Td>
                  <Td
                    style={
                      data.withdraw ? { color: "red" } : { color: "#041C51" }
                    }
                  >
                    {data.withdraw ? "Withdraw" : "Deposit"}
                  </Td>
                  <Td>
                    <button
                      className="text-lg fw-bold rounded sm-btn primary-btn exchange-btn accept bg-[#010c3a]"
                      onClick={() => handleDownload(data)}
                    >
                      Download
                    </button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
