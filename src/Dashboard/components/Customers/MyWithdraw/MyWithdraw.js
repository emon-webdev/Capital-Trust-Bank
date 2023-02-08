import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

const MyWithdraw = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div
      style={{ width: "600px", height: "500px" }}
      className="container bg-white my-10 mx-auto shadow-lg rounded"
    >
      <Text
        fontSize={26}
        fontWeight="bold"
        color="#041C51"
        textAlign={"center"}
        paddingY={8}
      >
        Withdraw
      </Text>
      <div className="my-5 mx-2">
        <Flex gap={5} marginBottom={3}>
          <FormControl display={"flex"}>
            <FormLabel fontSize={18}>Date:</FormLabel>
            <ReactDatePicker
              name="date"
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            {/* <Input type="date" name="date" /> */}
          </FormControl>
          <FormControl display={"flex"}>
            <FormLabel fontSize={18}>Time:</FormLabel>
            <ReactDatePicker
              name="time"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </FormControl>
        </Flex>
        <FormControl marginY={2}>
          <FormLabel fontSize={18}>Name</FormLabel>
          <Input name="name" />
        </FormControl>
        <FormControl marginY={2}>
          <FormLabel fontSize={18}>Account Number</FormLabel>
          <Input type="text" name="account" />
        </FormControl>
        <FormControl marginY={2}>
          <FormLabel fontSize={18}>Amount</FormLabel>
          <Input type="number" name="withdraw" placeholder="Withdraw" />
        </FormControl>
        <VStack>
          <Button
            fontSize={20}
            marginY={5}
            paddingY={5}
            paddingX={6}
            type="submit"
            color="white"
            backgroundColor="#041C51"
            _hover={{ opacity: ".8" }}
          >
            Withdraw
          </Button>
        </VStack>
      </div>
    </div>
  );
};

export default MyWithdraw;
