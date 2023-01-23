import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";

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

  const districts = [
    "Barguna",
    "Barisal",
    "Bhola",
    "Jhalokati",
    "Patuakhali",
    "Pirojpur",
    "Bandarban",
    "Brahmanbaria",
    "Chandpur",
    "Chittagong",
    "Comilla",
    "Cox's Bazar",
    "Feni",
    "Khagrachhari",
    "Lakshmipur",
    "Noakhali",
    "Rangamati",
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Narayanganj",
    "Narsingdi",
    "Rajbari",
    "Shariatpur",
    "Tangail",
    "Bagerhat",
    "Chuadanga",
    "Jessore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira",
    "Jamalpur",
    "Mymensingh",
    "Netrakona",
    "Sherpur",
    "Bogra",
    "Chapainawabganj",
    "Joypurhat",
    "Naogaon",
    "Natore",
    "Pabna",
    "Rajshahi",
    "Sirajganj",
    "Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon",
    "Habiganj",
    "Moulvibazar",
    "Sunamganj",
    "Sylhet",
    "Rangamati",
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Narayanganj",
    "Narsingdi",
    "Rajbari",
    "Shariatpur",
    "Tangail",
    "Bagerhat",
    "Chuadanga",
    "Jessore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira",
    "Jamalpur",
    "Mymensingh",
    "Netrakona",
    "Sherpur",
    "Bogra",
    "Chapainawabganj",
    "Joypurhat",
    "Naogaon",
    "Natore",
    "Pabna",
    "Rajshahi",
    "Sirajganj",
    "Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon",
    "Habiganj",
    "Moulvibazar",
    "Sunamganj",
    "Sylhet",
  ];
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
          navigate("/");
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div className="loan-area my-10 ">
      <div className="mb-5">
        <DynamicBanner name={name}></DynamicBanner>
      </div>
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
              backgroundColor: "#041C51",
              height: "550px",
              width: "500px",
              borderRadius: "10px",
            }}
            className="p-5 mb-4 "
          >
            <Grid container className="my-3">
              <Grid item xs={12}>
                <input
                  name="name"
                  className="border m-3 p-2 w-100"
                  style={{ width: "400px" }}
                  placeholder="Your Name"
                  defaultValue={user.displayName}
                ></input>
              </Grid>
              <Grid item lg={12}>
                <input
                  name="email"
                  style={{ width: "400px" }}
                  className="border m-3 p-2"
                  placeholder="Email"
                  defaultValue={user.email}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="phone"
                  style={{ width: "400px" }}
                  className="border m-3 p-2"
                  placeholder="Phone"
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  name="loan"
                  style={{ width: "400px" }}
                  className="border m-3 p-2"
                  placeholder="Loan"
                  defaultValue={loan.title}
                ></input>
              </Grid>
              <Grid item xs={6}>
                <select
                  name="city"
                  style={{ height: "50px", width: "400px" }}
                  value={district}
                  onChange={handleChange}
                  label="city"
                  className="border m-3 p-2"
                  placeholder="City"
                >
                  {districts.map((dis) => (
                    <option key={dis} value={dis}>
                      {dis}
                    </option>
                  ))}
                </select>
              </Grid>
              <Grid item lg={12}>
                <input
                  name="date"
                  style={{ width: "400px" }}
                  className="border m-3 p-2"
                  placeholder="dd/mm/yy"
                ></input>
              </Grid>

              <button
                style={{ width: "400px" }}
                className="primary-btn m-3 p-2  my-2 "
                type="submit"
              >
                Apply
              </button>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
}
