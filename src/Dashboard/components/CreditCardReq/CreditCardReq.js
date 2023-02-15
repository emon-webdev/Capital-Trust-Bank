import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';

const CreditCardReq = () => {
      const [customers, setCustomers] = useState([]);
      useEffect(() => {
        fetch(`http://localhost:5000/cardReq`)
          .then((res) => res.json())
          .then((data) => {
            setCustomers(data);
          });
      }, []);
      console.log('card req ', customers)
    return (
      <div className='my-2'>
        <h2 className="text-center heading">
          Total Card Request:{customers.length}
        </h2>
        <div className="w-full">
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
                    Phone
                  </Th>
                  <Th color="#041C51" fontSize={16}>
                  Id
                  </Th>
                  <Th color="#041C51" fontSize={16}>
                  Card Type
                  </Th>
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
                    <Td>{customer?.cardType}</Td>
                    <Td>
                    <button class="text-lg fw-bold rounded sm-btn primary-btn exchange-btn accept bg-[#010c3a] m-1">Accept</button>
                    <button class="text-md sm-btn primary-btn exchange-btn bg-[#df0303]">Cancel</button>
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