import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../context/AuthProvider";

const MyWithdraw = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const time = form.time.value;
    const account = form.account.value;
    const amount = form.withdraw.value;
    const email = user?.email;

    const date = form.date.value;

    console.log(name, email, amount, date, time, account);

    const appellant = {
      name: name,
      email: email,
      account: account,
      withdraw: amount,
      type: "withdraw",
      time: time,
      date: date,
    };

    fetch("http://localhost:5000/depositWithdraw", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appellant),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("withdraw Successlly Done");
          form.reset();
        } else {
          toast.error(data.message);
        }
      });
  };

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
      <form onSubmit={handleSubmit} className="my-5 mx-2">
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
      </form>
    </div>
  );
};

export default MyWithdraw;
