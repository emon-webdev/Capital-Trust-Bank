import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@mui/material";
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
    <>
      <div className="mb-5">
        <DynamicBanner name={name}></DynamicBanner>
      </div>
      <div className="loan-area my-10 ">
        <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
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
              backgroundColor: "#041C51",
              height: "auto",
              width: "500px",
              borderRadius: "10px",
              marginX:'auto'
            }}
            className="py-10 px-7 sm:align-content-center sm:justify-items-center"
          >
            <Grid container className=" align-content-center justify-items-center">
              <Grid item xs={12}>
                <input
                  name="name"
                  className="border px-3 rounded "
                  style={{ width: "100%" }}
                  placeholder="Your Name"
                  defaultValue={user?.displayName} required
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="email"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="Email"
                  defaultValue={user?.email} required
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="phone"
                  style={{ width: "100%" }}
                  className="border  px-3  rounded"
                  placeholder="Phone" required
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="loan"
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="Loan"
                  defaultValue={loan.title}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <select
                  name="city"
                  style={{ width: "100%" }}
                  value={district}
                  onChange={handleChange}
                  label="city" required
                  className="border  px-3 rounded"
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
                  style={{ width: "100%" }}
                  className="border  px-3 rounded"
                  placeholder="dd/mm/yy" required
                ></input>
              </Grid>

                <Grid item xs={12}>
                  <button
                    style={{ width: "100%" }}
                    className="primary-btn mt-2 "
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
    </>
  );
}
