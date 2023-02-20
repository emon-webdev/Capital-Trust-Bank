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
const AllBills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch("https://capital-trust-bank-server-ten.vercel.app/pay-bills")
      .then((res) => res.json())
      .then((data) => {
        setBills(data);
      });
  }, []);

  //total Bills
  const totalAmount = bills.filter((data) => data.amount);
  const totalBills = totalAmount.reduce((total, preBills) => {
    return parseInt(total) + parseInt(preBills.amount);
  }, 0);

  //total Water Bill
  const waterBills = bills.filter((data) => data.billType === "Water");
  const totalWaterBill = waterBills.reduce((amount, currentWaterBill) => {
    return parseInt(amount) + parseInt(currentWaterBill.amount);
  }, 0);
  //total Electricity  Bill
  const electricityBills = bills.filter(
    (data) => data.billType === "Electricity"
  );
  const totalElectricityBill = electricityBills.reduce(
    (amount, currentElectricityBill) => {
      return parseInt(amount) + parseInt(currentElectricityBill.amount);
    },
    0
  );
  //total Internet  Bill
  const internetBills = bills.filter((data) => data.billType === "Internet");
  const totalInternetBill = internetBills.reduce(
    (amount, currentInternetBill) => {
      return parseInt(amount) + parseInt(currentInternetBill.amount);
    },
    0
  );
  //total TeleVision Bill
  const teleVisionBills = bills.filter(
    (data) => data.billType === "TeleVision"
  );
  const totalTeleVisionBill = teleVisionBills.reduce(
    (amount, currentTeleVisionBill) => {
      return parseInt(amount) + parseInt(currentTeleVisionBill.amount);
    },
    0
  );
  //total gas Bill
  const gasBills = bills.filter((data) => data.billType === "Gas");
  const totalGasBill = gasBills.reduce((amount, currentGasBill) => {
    return parseInt(amount) + parseInt(currentGasBill.amount);
  }, 0);
  //total credit Card  Bill
  const creditCardBills = bills.filter(
    (data) => data.billType === "Credit Card"
  );
  const totalCreditCardBill = creditCardBills.reduce(
    (amount, currentWaterBill) => {
      return parseInt(amount) + parseInt(currentWaterBill.amount);
    },
    0
  );

  return (
    <div className="donate-content">
      <h2 className="text-[#010C3A] text-3xl md:text-4xl font-bold mb-6">
        Total Bills Summary
      </h2>
      <div className="card-group flex items-center">
        <div
          style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
          className="donate-card md:mr-4 flex flex-wrap items-center gap-2 py-5 rounded-md px-5 w-full h-[120px] md:w-96 bg-white"
        >
          <div className="mr-5">
            <FaDonate className="text-6xl text-[#9c0f55]" />
          </div>
          <div className="">
            <div className="text-[#808080] text-2xl mb-3">Total Bills</div>
            <h2 className="text-3xl font-bold ">$ {totalBills}</h2>
          </div>
        </div>
      </div>
      <div className="category-bill flex gap-4 flex-wrap items-center md:mr-3 mt-5">
        <div
          style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
          className="donate-card flex items-center justify-center gap-2 py-5 rounded-md px-5 w-full h-[80px] md:w-[200px] bg-white"
        >
          <div className="text-center">
            <div className="text-[#808080] text-md mb-2">Total Water Bills</div>
            <h2 className="text-xl font-bold ">$ {totalWaterBill}</h2>
          </div>
        </div>
        <div
          style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
          className="donate-card flex items-center justify-center gap-2 py-5 rounded-md px-5 w-full h-[80px] md:w-[200px] bg-white"
        >
          <div className="text-center">
            <div className="text-[#808080] text-md mb-2">
              Total Electricity Bills
            </div>
            <h2 className="text-xl font-bold ">$ {totalElectricityBill}</h2>
          </div>
        </div>
        <div
          style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
          className="donate-card flex items-center justify-center gap-2 py-5 rounded-md px-5 w-full h-[80px] md:w-[200px] bg-white"
        >
          <div className="text-center">
            <div className="text-[#808080] text-md mb-2">
              Total Internet Bills
            </div>
            <h2 className="text-xl font-bold ">$ {totalInternetBill}</h2>
          </div>
        </div>
        <div
          style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
          className="donate-card flex items-center justify-center gap-2 py-5 rounded-md px-5 w-full h-[80px] md:w-[200px] bg-white"
        >
          <div className="text-center">
            <div className="text-[#808080] text-md mb-2">
              Total TeleVision Bills
            </div>
            <h2 className="text-xl font-bold ">$ {totalTeleVisionBill}</h2>
          </div>
        </div>
        <div
          style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
          className="donate-card flex items-center justify-center gap-2 py-5 rounded-md px-5 w-full h-[80px] md:w-[200px] bg-white"
        >
          <div className="text-center">
            <div className="text-[#808080] text-md mb-2">Total Gas Bills</div>
            <h2 className="text-xl font-bold ">$ {totalGasBill}</h2>
          </div>
        </div>
        <div
          style={{ boxShadow: "0 4px 4px rgb(87 100 126 / 21%" }}
          className="donate-card flex items-center justify-center gap-2 py-5 rounded-md px-5 w-full h-[80px] md:w-[200px] bg-white"
        >
          <div className="text-center">
            <div className="text-[#808080] text-md mb-2">Credit Card Bills</div>
            <h2 className="text-xl font-bold ">$ {totalCreditCardBill}</h2>
          </div>
        </div>
      </div>
      <div className="bills-list">
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
                    Bill Type
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
                {bills?.map((donar, index) => (
                  <Tr key={donar?._id}>
                    <Td>{index + 1}</Td>
                    <Td>{donar?.name}</Td>
                    <Td>{donar?.phnNumber}</Td>
                    <Td>{donar?.billType}</Td>
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

export default AllBills;
