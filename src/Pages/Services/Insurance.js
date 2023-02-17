import {
    Box,
    Card,
    CardBody,
    FormControl,
    Grid,
    Select,
    Text,
    VStack
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import appli from "../../assets/Services(Home)/E-Wallet-amico.png";
import { AuthContext } from "../../context/AuthProvider";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
import FactToKnow from "../Shared/FactToKnow/FactToKnow";
import { districts } from "./districtData";

const Insurance = () => {
  const [name, setName] = useState("Insurance");
  const insuranceData = useLoaderData();
  const { user } = useContext(AuthContext);


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
    const date = form.date.value;
    const insurance = form.insurance.value;

    const applicant = {
      name: name,
      email: email,
      phone: phone,
      insurance: insurance,
      date: date,
    };

    fetch("https://capital-trust-bank-server.vercel.app/insuranceApplicants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Application Successlly Done");
          form.reset();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="loan-area ">
      <div className="mb-5">
        <DynamicBanner name={name}></DynamicBanner>
      </div>
      <div className="container loan-card  align-center justify-center gap-10 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {insuranceData.map((insu) => (
          <Card
            shadow="2xl"
            key={insu.id}
            style={{ width: "100%", height: "auto" }}
            className="hover:bg-gradient-to-r from-blue-500 to-blue-900  hover:text-[#fff] "
          >
            <CardBody className="flex flex-col align-center justify-center hover:text-white">
              <div className="w-100  text-4xl flex align-center justify-center my-3"></div>
              <Text
                fontWeight={700}
                color="#010c3a"
                fontSize={24}
                textAlign="center"
              >
                {insu.title}
              </Text>
              <div className="text-lg text-center my-5">
                {insu.details.slice(0, 200)}...
                <VStack marginY={4}>
                  <Link to={`/insuranceDetails/${insu._id}`}>
                    <text className="font-bold sm-btn secondary-btn bg-[#151423] rounded px-4 py-3  text-[#fff]">
                      Details
                    </text>
                  </Link>
                </VStack>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="py-12 flex md:flex-row flex-col w-100  align-center justify-center">
        <Box>
          <img
            style={{ width: "600px", height: "600px" }}
            className="animate__animated animate__slideInLeft mx-5"
            src={appli}
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
            className="py-10 px-7 sm:align-content-center sm:justify-items-center animate__animated animate__slideInRight"
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
                  name="insurance"
                  marginY={1}
                  backgroundColor={"white"}
                  placeholder="Select Insurance"
                >
                  <option value="Education">Health Insurance</option>
                  <option value="Gold">Business Insurance</option>
                  <option value="Marriage">Travel Insurance</option>
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
      <FactToKnow />
    </div>
  );
};

export default Insurance;
