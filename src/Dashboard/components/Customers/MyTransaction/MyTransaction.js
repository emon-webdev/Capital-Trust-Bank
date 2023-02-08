import { Button, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import VisaTransaction from "./VisaTransaction";


export default function MyTransaction() {
 


  return (
    <div className="container flex gap-10" >
      <div className="">
      <TableContainer borderRadius={10} backgroundColor='white' marginX={10} marginY={10}>
  <Table variant='simple'>
  
    <Thead  >
      <Tr >
        <Th  color='#041C51'  fontSize={24} paddingY={6}>Category</Th>
        <Th color='#041C51' fontSize={24} paddingY={6}>Date</Th>
        <Th color='#041C51'  fontSize={24} paddingY={6}>Time</Th>
        <Th color='#041C51' fontSize={24} paddingY={6} >Amount</Th>
        <Th color='#041C51' fontSize={24} paddingY={6} >Details</Th>

      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td><Button>Details</Button></Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td><Button>Details</Button></Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td><Button>Details</Button></Td>
      </Tr>
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

