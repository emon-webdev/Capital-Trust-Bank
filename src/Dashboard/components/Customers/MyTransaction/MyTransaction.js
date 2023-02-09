import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";
import VisaTransaction from "./VisaTransaction";

export default function MyTransaction() {
  const { user } = useContext(AuthContext);
  const [transacData, setTransacData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/depositWithdraw/${user.email}`)
      .then((res) => res.json())
      .then((data) => setTransacData(data));
  }, []);

  return (
    <div className="container flex gap-10">
      <div className="">
        <TableContainer
          borderRadius={10}
          backgroundColor="white"
          marginX={10}
          marginY={10}
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th color="#041C51" fontSize={24} paddingY={6}>
                  Category
                </Th>
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
                  <Td></Td>
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
      <div className="mt-2">
        <VisaTransaction></VisaTransaction>
      </div>
    </div>
  );
}
