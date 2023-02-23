import {
  Button,
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

const EmgyServiceReq = () => {
  const [customers, setCustomers] = useState([]);
  const [reFetch, setReFetch] = useState(false);

  useEffect(() => {
    fetch(`https://capital-trust-bank-server-ten.vercel.app/emgyServiceReceiver`)
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
      });
  }, [reFetch]);

  const handleAccept = (data) => {
    fetch(`https://capital-trust-bank-server-ten.vercel.app/acceptEmgyServiceReq`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Emergency  Service request accept");
        setReFetch(!reFetch);
      });
  };

  const handleDelete = (data) => {
    const info = {
      id: data.accountId,
    };
    fetch(`https://capital-trust-bank-server-ten.vercel.app/deleteEmgyServiceReq`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        toast.error("Emergency  Service Request cancel");
        setReFetch(!reFetch);
      });
  };

  return (
    <div className="my-2">
      <h2 className="text-[#010C3A] text-2xl md:text-3xl font-bold mb-6">
        Emergency Service Request:
        <span className="text-[#df0303]"> {customers?.length}</span>
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
            <Thead className="py-2 rounded-t-md bg-[#041C51]">
              <Tr>
                <Th color="#fff" fontSize={16}>
                  List
                </Th>
                <Th color="#fff" fontSize={16}>
                  Name
                </Th>
                <Th color="#fff" fontSize={16}>
                  Service
                </Th>
                <Th color="#fff" fontSize={16}>
                  Id
                </Th>
                {/* <Th color="#041C51" fontSize={16}>
                Card Type
                </Th> */}
                <Th color="#fff" fontSize={16}>
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {customers?.map((customer, index) => (
                <Tr key={customer?._id}>
                  <Td className="px-1">{index + 1}</Td>
                  <Td className="px-1">{customer?.name}</Td>
                  <Td className="px-1">{customer?.serviceName}</Td>
                  <Td className="px-1">{customer?.accountId}</Td>
                  {/* <Td>{customer?.cardType}</Td> */}
                  <Td>
                    <Button
                      borderRadius="4px"
                      color="#fff"
                      background="#010c3a"
                      _hover={{ bg: "#df0303" }}
                      size="sm"
                      marginRight="5px"
                      onClick={() => handleAccept(customer)}
                    >
                      Accept
                    </Button>
                    <Button
                      borderRadius="4px"
                      color="#fff"
                      background="#df0303"
                      _hover={{ bg: "#010c3a" }}
                      size="sm"
                      marginRight="5px"
                      onClick={() => handleDelete(customer)}
                    >
                      Cancel
                    </Button>
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

export default EmgyServiceReq;
