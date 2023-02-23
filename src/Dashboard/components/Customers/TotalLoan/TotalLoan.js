import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
const TotalLoan = () => {
 const {user} = useContext(AuthContext)
 const [totalLoan,setTotalLoan] = useState([])
    useEffect(() => {
        fetch(`https://capital-trust-bank-server-ten.vercel.app/totalLoan/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setTotalLoan(data);
          });
      }, []);

    return (
        <div>
          <h2 className="text-center heading">
        Total Loan:{totalLoan?.length}
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
                  Type
                </Th>
                <Th color="#041C51" fontSize={16}>
                  Package
                </Th>
                <Th color="#041C51" fontSize={16}>
                  Date
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {totalLoan?.map((customer, index) => (
                <Tr key={customer?._id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    {customer?.loan}
                  </Td>
                  <Td>{customer?.package}</Td>
                  <Td>{customer?.date}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
        </div>
    );
};

export default TotalLoan;