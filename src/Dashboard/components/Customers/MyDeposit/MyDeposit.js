import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Text,
    VStack
} from "@chakra-ui/react";
import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber
} from "firebase/auth";
import React, { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { toast } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import { AuthContext } from "../../../../context/AuthProvider";
import { DashboardContext } from "../../../../context/UserDashboardProvider";

const auth = getAuth();

const MyDeposit = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user, setUser } = useContext(AuthContext);
  const { deposit, setDeposit, setBalance, balance } =
    useContext(DashboardContext);

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [ph, setPh] = useState("");
  // const [user, setUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const time = form.time.value;
    const account = form.account.value;
    const amount = form.deposit.value;
    const phone = form.phone.value;
    const email = user?.email;

    const date = form.date.value;

    console.log(name, email, amount, date, phone, time, account);

    const appellant = {
      name: name,
      email: email,
      account: account,
      phone: phone,
      deposit: amount,
      type: "deposit",
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
          toast.success("Deposit Successlly Done");
          form.reset();
        } else {
          toast.error(data.message);
        }
      });
    setDeposit(deposit + parseInt(amount));
  };

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignPhone();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignPhone() {
    setLoading(true);
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOtp(true);
        toast.success("OTP sended successfully");
        // ...
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        // Error; SMS not sent
        // ...
      });
  }
  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  return (
    <div
      style={{ width: "600px", height: "700px" }}
      className="container bg-white my-10 mx-auto shadow-lg rounded"
    >
      <Text
        fontSize={26}
        fontWeight="bold"
        color="#041C51"
        textAlign={"center"}
        paddingY={8}
      >
        Deposit
      </Text>
      <div id="recaptcha-container" className=""></div>
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

        <Text>Success</Text>

        <div className="">
          {showOtp ? (
            <>
              <Box marginLeft={20} textAlign={"center"}>
                <Center marginY={5}>Enter Your OTP</Center>
                <VStack marginY={8}>
                  <OtpInput
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    otpType="number"
                    value={otp}
                    onChange={setOtp}
                    disabled={false}
                    autoFocus
                    separator={<span>-</span>}
                    inputStyle={{
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid",
                      marginX: "auto",
                      marginLeft: "30px",
                      textAlign: "center",
                      height: "40px",
                      width: "40px",
                      marginRight: "20px",
                      background:
                        "linear-gradient(90deg, rgba(2,2,31,1) 0%, rgba(2,24,55,1) 5%, rgba(2,55,89,1) 12%, rgba(6,129,185,1) 57%, rgba(15,14,89,1) 98%, rgba(1,192,238,1) 100%, rgba(0,212,255,1) 100%);",
                    }}
                    numInputs={6}
                  ></OtpInput>
                </VStack>
                <Button
                  onClick={onOTPVerify}
                  paddingX={10}
                  paddingY={5}
                  fontSize={20}
                  color="white"
                  backgroundColor="skyblue"
                >
                  <span>
                    {loading && <CgSpinner className="animate-spin" />}
                  </span>
                  Verify OTP
                </Button>
              </Box>
            </>
          ) : (
            <>
              <FormControl marginY={2}>
                <FormLabel fontSize={18}>Phone Number</FormLabel>
                <PhoneInput country="bd" value={ph} onChange={setPh} />
              </FormControl>
              <VStack>
                <Button
                  onClick={onSignPhone}
                  fontSize={20}
                  marginY={5}
                  paddingY={5}
                  paddingX={6}
                  type="submit"
                  color="white"
                  backgroundColor="#041C51"
                  _hover={{ opacity: ".8" }}
                >
                  <span>
                    {loading && <CgSpinner className="animate-spin mx-2" />}
                  </span>
                  Send Code
                </Button>
              </VStack>
            </>
          )}
        </div>

        <FormControl marginY={2}>
          <FormLabel fontSize={18}>Amount</FormLabel>
          <Input type="number" name="deposit" placeholder="Deposit" />
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
            Deposit
          </Button>
        </VStack>
      </form>
    </div>
  );
};

export default MyDeposit;
