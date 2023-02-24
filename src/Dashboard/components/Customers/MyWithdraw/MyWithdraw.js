import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";
import { DashboardContext } from "../../../../context/UserDashboardProvider";

const MyWithdraw = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const [delayStart, setDelayStart] = useState(false);
  const [value, setValue] = useState(5);
  const [appellant, setAppellant] = useState({});
  const [isDelayFinished, setIsDelayFinished] = useState(false);
  const { withdraw, setWithdarw, setDeposit, deposit } =
    useContext(DashboardContext);
  const [approve, setApprove] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (delayStart) {
      const interval = setInterval(() => {
        setValue((prevValue) => prevValue - 1);
      }, 1000);

      if (value === 0) {
        setIsDelayFinished(true);
        onClose();
        setValue(5);
        clearInterval(interval);
        setDelayStart(false);
        fetch(
          `${process.env.REACT_APP_API_KEY}/depositWithdraw`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(appellant),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            toast.success("withdraw Successlly Done");
            navigate("/dashboard/myAccount");
            // form.reset();
            // setWithdarw(withdraw + parseInt(amount));
            // setDeposit(deposit - parseInt(amount));
          });
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [value, delayStart]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/approved/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setApprove(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDelayStart(true);
    const form = event.target;
    const name = form.name.value;
    const time = form.time.value;
    const account = form.account.value;
    const amount = form.withdraw.value;
    const email = user?.email;

    const date = form.date.value;

    const appellant = {
      name: name,
      email: email,
      account: account,
      withdraw: amount,
      type: "withdraw",
      time: time,
      date: date,
    };
    setAppellant(appellant);
    if (amount > parseFloat(approve.availableAmount)) {
      onClose();
      toast.error(`You don't have enough balance`);
      setValue(5);
      setDelayStart(false);
    }
  };

  // const handleDelay = () => {
  //   setDelayStart(true)
  // }
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
          <Input name="name" defaultValue={user.displayName} />
        </FormControl>
        <FormControl marginY={2}>
          <FormLabel fontSize={18}>Account Number</FormLabel>
          <Input type="text" name="account" defaultValue={approve.accountId} />
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
            onClick={onOpen}
          >
            Withdraw
          </Button>

          <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent>
              <ModalBody paddingY={8} paddingX={8}>
                Your withdraw will be done after{" "}
                <span className="text-red-500 text-xl">{value}</span>s.If you
                want, you can cancel this process by clicking cancel button
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => {
                    onClose();
                    setDelayStart(false);
                    setValue(5);
                  }}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </form>
    </div>
  );
};

export default MyWithdraw;
