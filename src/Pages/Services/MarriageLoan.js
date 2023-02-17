
import { Card, CardBody } from "@chakra-ui/card";
import { FormControl } from "@chakra-ui/form-control";
import { Image } from "@chakra-ui/image";
import { Grid, Stack, Text } from "@chakra-ui/layout";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
import { districts } from "./districtData";

export default function MarriageLoan() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("Marriage Loan");
  const loan = {
    id: "3",
    details:
      "Term loan facility available to incur own, children and sibling's marriage expenses only. Age Limit: Minimum Age 21 years and maximum 60 years.",
    title: "Marriage Loan",
    img: "https://i.ibb.co/R23kLm0/marriage-loan.jpg",
  };
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
    <>
      <div className="mb-5">
        <DynamicBanner name={name}></DynamicBanner>
      </div>
      <div className="loan-area my-10 ">
      <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        <div className="">
          <Card sx={{ maxWidth: 700, height: "auto" }}>
            <CardBody>
              <Image
                component="img"
                height="100%"
                width='100%'
                marginY={2}
                src={loan.img}
                alt="green iguana"
              />
              <Stack>
                <Text
                  fontSize={26}
                  fontWeight={800}
                  marginY={1}
                  component="div"
                >
                  {loan.title}
                </Text>
                <Text fontSize={20} color="text.primary">{loan.details}</Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit}
            style={{ 
              backgroundColor: "#041C51",
              height: "auto",
              width: "500px",
              borderRadius: "10px",
              marginX:'auto'
            }}
            className="py-10 px-7 sm:align-content-center sm:justify-items-center"
          >
            <Grid container className=" align-content-center justify-items-center">
              <FormControl>
                <input
                  name="name"
                  className="border px-3 rounded "
                  style={{ width: "100%" }}
                  placeholder="Your Name"
                  defaultValue={user?.displayName} required
                ></input>
              </FormControl>
              <FormControl>
                <input
                  name="email"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="Email"
                  defaultValue={user?.email}  required
                ></input>
              </FormControl>
              <FormControl>
                <input
                  name="phone"
                  style={{ width: "100%" }}
                  className="border  px-3  rounded"
                  placeholder="Phone" required 
                ></input>
              </FormControl>
              <FormControl>
                <input
                  name="loan"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="Loan"
                  defaultValue={loan.title}
                ></input>
              </FormControl>
              <FormControl>
                <select
                  name="city"
                  style={{ width: "100%" }}
                  value={district}
                  onChange={handleChange}
                  label="city"
                  className="border  px-3 rounded"
                  placeholder="City"  required
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
                  name="date" type='date'
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="dd/mm/yy"  required
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
          </div>
        </div>
      </div>
    </>
  );
}
