import {
  Button,
  Table, TableContainer,
  Tbody,
  Td, Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import VisaTransaction from "./VisaTransaction";

export default function MyTransaction() {
  const { user } = useContext(AuthContext);
  const [transacData, setTransacData] = useState([]);
  useEffect(() => {
    fetch(
      `https://capital-trust-bank-server.vercel.app/depositWithdraw/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setTransacData(data));
  }, []);

  return (
    <div className=" container  gap-5 flex-col md:flex-row lg:flex-row align-items-center justify-content-center">
      <div className="mt-10">
        <VisaTransaction></VisaTransaction>
      </div>
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
            <Thead>
              <Tr>
                <Th color="#041C51" fontSize={24} paddingY={6}>
                  Date
                </Th>
                <Th color="#041C51" fontSize={24} paddingY={6}>
                  Time
                </Th>
                <Th color="#041C51" fontSize={24} paddingY={6}>
                  Amount
                </Th>
                <Th color="#041C51" fontSize={24} paddingY={6}>
                  Details
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {transacData?.map((data) => (
                <Tr key={data._id}>
                  <Td>{data.date}</Td>
                  <Td>{data.time}</Td>
                  <Td
                    style={
                      data.withdraw ? { color: "red" } : { color: "#041C51" }
                    }
                  >
                    ${data.withdraw ? data.withdraw : data.deposit}
                  </Td>
                  <Td>
                    <Button>Details</Button>
                  </Td>
                </Tr>
              ))}
              {/* <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
                <Td>25.4</Td>
                <Td>
                  <Button>Details</Button>
                </Td>
              </Tr> */}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
