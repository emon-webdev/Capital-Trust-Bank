import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/table";
import React, { useEffect, useState } from "react";
import { FaDonate } from "react-icons/fa";
// import "./Table.css";
const AllDonate = () => {
  const [donates, setDonates] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/donate`)
      .then((res) => res.json())
      .then((data) => {
        setDonates(data);
      });
  }, []);
  const totalAmount = donates.filter((data) => data.amount);

  const totalDonate = totalAmount.reduce((total, preDonate) => {
    return total + preDonate.amount;
  }, 0);

  return (
    <div className="donate-content">
      <h2 className="text-[#010C3A] text-3xl md:text-4xl font-bold mb-6">
        Total Donate Summary
      </h2>
      <div
        style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
        className="donate-card flex items-center gap-2 py-5 rounded-md px-5 w-full h-[120px] md:w-96 bg-white"
      >
        <div className="mr-5">
          <FaDonate className="text-6xl text-[#9c0f55]" />
        </div>
        <div className="">
          <div className="text-[#808080] text-2xl mb-3">Total Donets</div>
          <h2 className="text-3xl font-bold ">$ {totalDonate}</h2>
        </div>
      </div>
      <div className="donate-list">
        <div className="">
          <TableContainer
            borderRadius={6}
            style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
            backgroundColor="white"
            marginY={10}
            // marginLeft={20}
            height={500}
            overflowY="scroll"
            overflowX="scroll"
          >
            <Table variant="simple">
              <Thead className="py-2 rounded-t-md bg-[#041C51]">
                <Tr className=" rounded-t-md ">
                  <Th color="#fff" fontSize={14}>
                    List
                  </Th>
                  <Th color="#fff" fontSize={14}>
                    Name
                  </Th>
                  <Th color="#fff" fontSize={14}>
                    Number
                  </Th>
                  <Th color="#fff" fontSize={14}>
                    Currency
                  </Th>
                  <Th color="#fff" fontSize={14}>
                    Id
                  </Th>
                  <Th color="#fff" fontSize={14}>
                    Amount
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {donates?.map((donar, index) => (
                  <Tr key={donar?._id}>
                    <Td>{index + 1}</Td>
                    <Td>{donar?.donarName}</Td>
                    <Td>{donar?.donarPhnNumber}</Td>
                    <Td>{donar?.currency}</Td>
                    <Td>{donar?.transactionId}</Td>
                    <Td>$ {donar?.amount}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default AllDonate;
