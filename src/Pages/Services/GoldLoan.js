import React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { districts } from './districtData';


export default function GoldLoan() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const loan = {
    "id": "2",
    "details": " A secured loan, where gold jewellery is provided as collateral, is a gold loan. The loan amount that will be provided will depend on the value of the gold.",
    "title": "Gold Loan",
    "img": "https://i.ibb.co/4WB22H1/gold-loan.jpg"
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
    console.log(name, email, phone, city, date, loan);

    const applicant = {
      name: name,
      email: email,
      phone: phone,
      city: city,
      loan: loan,
      date: date,
    };

    fetch("http://localhost:5000/applicants", {
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
           navigate('/')
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div className="loan-area my-10 ">
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
      <div className="">
        <Card sx={{ maxWidth: 700, height: "auto" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={loan.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                fontSize={26}
                fontWeight={600}
                gutterBottom
                component="div"
              >
                {loan.title}
              </Typography>
              <Typography color="text.primary">{loan.details}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div className="">
        <form
          onSubmit={handleSubmit}
          style={{
            height: "400px",
            backgroundColor: "#041C51",
            height: "550px",
            width: "500px",
            borderRadius:'10px'
          }}
          className="p-5 mb-4 "
        >
          <Grid container className="my-3">
            <Grid item xs={12}>
              <input
                name="name"
                className="border m-3 p-2 rounded "
                style={{ width: "400px" }}
                placeholder="Your Name"
                defaultValue={user?.displayName}
              ></input>
            </Grid>
            <Grid item xs={12}>
              <input
                name="email"
                style={{ width: "400px" }}
                className="border m-3 p-2 rounded"
                placeholder="Email"
                defaultValue={user?.email}
              ></input>
            </Grid>
            <Grid item xs={12}>
              <input
                name="phone"
                style={{ width: "400px" }}
                className="border m-3 p-2 rounded"
                placeholder="Phone"
              ></input>
            </Grid>
            <Grid item xs={12}>
              <input
                name="loan"
                style={{ width: "400px" }}
                className="border  p-2 rounded"
                placeholder="Loan"
                defaultValue={loan.title}
              ></input>
            </Grid>
            <Grid item xs={12}>
              <select
                name="city"
                style={{ height: "50px", width: "400px" }}
                value={district}
                onChange={handleChange}
                label="city"
                className="border m-3 p-2 rounded"
                placeholder="City"
              >
                {districts.map((dis) => (
                  <option key={dis} value={dis}>
                    {dis}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid item xs={12}>
              <input
                name="date"
                style={{ width: "400px" }}
                className="border m-3 p-2 rounded"
                placeholder="dd/mm/yy"
              ></input>
            </Grid>

          <Grid item xs={12}>
          <button
              style={{ width: "400px" }}
              className="primary-btn ms-5 m-3 p-2  my-2 "
              type="submit"
            >
              Apply
            </button>
          </Grid>
          </Grid>
        </form>
      </div>
    </div>
  </div>
  )
}
