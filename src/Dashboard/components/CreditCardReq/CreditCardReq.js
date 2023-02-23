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
import { toast } from "react-hot-toast";
import "../../../App.css";
import useTitle from "../../../hooks/useTitle/useTitle";

const CreditCardReq = () => {
  useTitle("CreditCardReq")
  const [customers, setCustomers] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  useEffect(() => {
    fetch(`https://capital-trust-bank-server-ten.vercel.app/cardReq`)
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      });
  }, [reFetch]);
  const handleAccept = (data) => {
    fetch(`https://capital-trust-bank-server-ten.vercel.app/acceptCardReq`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Card request accept");
        setReFetch(!reFetch);
      });
  };

  const handleDelete = (data) => {
    const info = {
      id: data.accountId,
    };
    fetch(`https://capital-trust-bank-server-ten.vercel.app/deleteCardReq`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Card Request cancel");
        setReFetch(!reFetch);
      });
  };
  return (
    <div className="my-2">
      <h2 className="text-center heading">
        Total Card Request:{customers.length}
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
                  Phone
                </Th>
                <Th color="#041C51" fontSize={16}>
                  Id
                </Th>
                {/* <Th color="#041C51" fontSize={16}>
                  Card Type
                  </Th> */}
                <Th color="#041C51" fontSize={16}>
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {customers?.map((customer, index) => (
                <Tr key={customer?._id}>
                  <Td>{index + 1}</Td>
                  <Td>{customer.applierName}</Td>
                  <Td>{customer.applierPhnNumber}</Td>
                  <Td>{customer?.accountId}</Td>
                  {/* <Td>{customer?.cardType}</Td> */}
                  <Td>
                    <button
                      class="text-lg fw-bold rounded sm-btn primary-btn exchange-btn accept bg-[#010c3a] m-1"
                      onClick={() => handleAccept(customer)}
                    >
                      Accept
                    </button>
                    <button
                      class="text-md sm-btn primary-btn exchange-btn bg-[#df0303]"
                      onClick={() => handleDelete(customer)}
                    >
                      Cancel
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
};

export default CreditCardReq;
