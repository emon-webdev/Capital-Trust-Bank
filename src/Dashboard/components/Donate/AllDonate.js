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
import "./Table.css";
const AllDonate = () => {
  const [donates, setDonates] = useState([]);
  //   const { data: donates = [], isLoading } = useQuery({
  //     queryKey: ["donates"],
  //     queryFn: () =>
  //       fetch(`http://localhost:5000/donate`).then((res) => res.json()),
  //   });

  useEffect(() => {
    fetch("http://localhost:5000/donate")
      .then((res) => res.json())
      .then((data) => {
        setDonates(data);
      });
  }, []);

  const totalAmount = donates.filter((data) => data.amount);
  console.log(totalAmount);

  const totalDonate = totalAmount.reduce((total, preDonate) => {
    return total + preDonate.amount;
  }, 0);

  console.log(totalDonate);
  return (
    <div className="donate-content">
      <h2 className="text-[#010C3A] text-4xl font-bold mb-6">
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
          <h2 className="text-4xl font-bold mb-3">$ {totalDonate}</h2>
          <div className="text-[#808080] text-2xl">Total Amount</div>
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
              <Thead>
                <Tr>
                  <Th color="#041C51" fontSize={16}>
                    List
                  </Th>
                  <Th color="#041C51" fontSize={16}>
                    Name
                  </Th>
                  <Th color="#041C51" fontSize={16}>
                    Number
                  </Th>
                  <Th color="#041C51" fontSize={16}>
                    Currency
                  </Th>
                  <Th color="#041C51" fontSize={16}>
                    Id
                  </Th>
                  <Th color="#041C51" fontSize={16}>
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

                    {/* <Td>{data.date}</Td>
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
                    </Td> */}
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
        {/* <TableContainer>
          <Table
            // overflowY="auto"
            // overflowX="hidden"
            variant="striped"
            whiteSpace="nowrap"
            maxWidth="100%"
            colorScheme="teal"
            size="md"
            overflowY="scroll"
            overflowX="scroll"
          >
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>List</Th>
                <Th>Date</Th>
                <Th>Name</Th>
                <Th>Phone</Th>
                <Th>Currency</Th>
                <Th>Transaction Id</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {donates.map((donar, index) => (
                <Tr key={donar?._id}>
                  <Td>{index + 1}</Td>
                  <Td>{donar?.donateDate}</Td>
                  <Td>{donar?.donarName}</Td>
                  <Td>{donar?.donarPhnNumber}</Td>
                  <Td>{donar?.currency}</Td>
                  <Td>{donar?.transactionId}</Td>
                  <Td>{donar?.amount}</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer> */}
      </div>
    </div>
  );
};

export default AllDonate;
