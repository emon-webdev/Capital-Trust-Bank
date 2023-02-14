import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  Grid,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import application from "../../../assets/Services(Home)/E-Wallet-amico.png";
import { AuthContext } from "../../../context/AuthProvider";
import { districts } from "../districtData";
// import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";

const Loans = (props) => {
  const [name, setName] = useState("Loans");
  const loansData = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showImg, setShowImg] = useState(false);
  const [district, setDistrict] = useState("");
  const handleChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const date = form.date.value;
    const loan = form.loan.value;
    console.log(name, email, phone, city, date, loan);

    const applicant = {
      name: name,
      email: email,
      phone: phone,
      city: city,
      loan: loan,
      date: date,
    };

    fetch("https://capital-trust-bank-server.vercel.app/applicants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicant),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Application Successlly Done");
          form.reset();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="loan-area ">
      {/* <div className="mb-5">
        <DynamicBanner name={name}></DynamicBanner>
      </div> */}
      <div className="container  align-center justify-center gap-10 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {loansData.map((loan) => (
          <Card
            shadow="lg"
            key={loan.id}
            style={{ width: "100%", height: "auto" }}
            className="hover:bg-[#041C51]  hover:text-[#fff] "
          >
            <CardBody className="flex flex-col align-center justify-center hover:text-white">
              <div className="w-100  text-4xl flex align-center justify-center my-3"></div>
              <Text
                fontWeight={700}
                color="#DF0303"
                fontSize={24}
                textAlign="center"
              >
                {loan.title}
              </Text>
              <div className="text-lg text-center my-5">
                {loan.details.slice(0, 300)}...
                <VStack marginY={4}>
                  <Link to={`/loanDetails/${loan._id}`}>
                    <button className="font-bold hover:bg-[#151423] rounded px-4 py-3 bg-[#DF0303] text-[#fff]">
                      Details
                    </button>
                  </Link>
                </VStack>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="flex md:flex-row flex-col w-100  align-center justify-center">
        <Box>
          <img
            style={{ width: "600px", height: "600px" }}
            className="animate__animated animate__slideInLeft mx-5"
            src={application}
            alt=""
          />
        </Box>
        <Box marginBottom={5} className="">
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#041C51",
              height: "auto",
              width: "500px",
              borderRadius: "10px",
              marginX: "auto",
            }}
            className="py-10 px-7 sm:align-content-center sm:justify-items-center"
          >
            <Grid
              container
              className=" align-content-center justify-items-center"
            >
              <FormControl>
                <input
                  name="name"
                  className="border px-3 rounded "
                  style={{ width: "100%" }}
                  placeholder="Your Name"
                  defaultValue={user?.displayName}
                  required
                ></input>
              </FormControl>
              <FormControl>
                <input
                  name="email"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="Email"
                  defaultValue={user?.email}
                  required
                ></input>
              </FormControl>
              <FormControl>
                <input
                  name="phone"
                  style={{ width: "100%" }}
                  className="border  px-3  rounded"
                  placeholder="Phone"
                  required
                ></input>
              </FormControl>
              <FormControl>
                <Select
                  name="loan"
                  marginY={1}
                  backgroundColor={"white"}
                  placeholder="Select Loan"
                >
                  <option value="Education">Education Loan</option>
                  <option value="Gold">Gold Loan</option>
                  <option value="Marriage">Marriage Loan</option>
                  <option value="Vehicle">Vehicle Loan</option>
                </Select>
                {/* <se
                name="loan"
                style={{ width: "100%" }}
                className="border  px-3 rounded"
                placeholder="Loan"
              ></se> */}
              </FormControl>
              <FormControl>
                <select
                  name="city"
                  style={{ width: "100%" }}
                  value={district}
                  onChange={handleChange}
                  label="city"
                  className="border  px-3 rounded"
                  placeholder="City"
                  required
                >
                  {districts.map((dis) => (
                    <option key={dis} value={dis}>
                      {dis}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormControl>
                <input
                  name="date"
                  type="date"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="dd/mm/yy"
                  required
                ></input>
              </FormControl>

              <FormControl>
                <button
                  style={{ width: "100%" }}
                  className="primary-btn mt-2 "
                  type="submit"
                >
                  Apply
                </button>
              </FormControl>
            </Grid>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default Loans;
