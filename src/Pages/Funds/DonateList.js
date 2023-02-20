import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const DonateList = () => {
  const location = useLocation();
 
  const query = new URLSearchParams(location.search);
  const transactionID = query.get("transactionId");
  const [donate, setDonate] = useState({});

  useEffect(() => {
    fetch(`https://capital-trust-bank-server-ten.vercel.app/donate/by-transaction-id/${transactionID}`)
      .then((res) => res.json())
      .then((data) => setDonate(data));
  }, [transactionID]);
 
  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>List</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Currency</Th>
              <Th isNumeric>Donate Id</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>inches</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>{donate?.transactionId}</Td>
              <Td isNumeric>{donate?.amount}</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <button onClick={() => window.print()}> Print</button>
    </div>
  );
};

export default DonateList;
