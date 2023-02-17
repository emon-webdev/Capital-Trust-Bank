import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VerificationReq = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bankAccounts`)
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);
  return (
    <div className="my-2">
      <h2 className="text-center heading">
        Total Verification Request:{customers.length}
      </h2>
      <div className="w-full">
        <TableContainer
          borderRadius={6}
          style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
          backgroundColor="white"
          marginY={10}
          height={500}
          overflowY="scroll"
          overflowX="scroll"
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th color="#041C51" fontSize={16}>
                  List
                </Th>
                <Th color="#041C51" fontSize={16}>
                  Name
                </Th>
                <Th color="#041C51" fontSize={16}>
                  Account Id
                </Th>
                <Th color="#041C51" fontSize={16}>
                  Category
                </Th>
                <Th color="#041C51" fontSize={16}>
                  Details
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {customers?.map((customer, index) => (
                <Tr key={customer?._id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    {customer.firstName} {customer.lastName}
                  </Td>
                  <Td>{customer.accountId}</Td>
                  <Td>{customer?.accountCategory}</Td>
                  <Td>
                    <Link to="details/" state={customer}>
                      <button className="text-lg fw-bold rounded sm-btn primary-btn exchange-btn accept bg-[#010c3a]">
                        Details
                      </button>
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default VerificationReq;
