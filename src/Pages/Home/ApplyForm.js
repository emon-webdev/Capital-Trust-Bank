import { Button, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import apply from "../../assets/Services(Home)/apply-form-box-bg.jpg";

export default function ApplyForm() {
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
  ];
  const [loans, setLoans] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/loans")
      .then((res) => res.json())
      .then((data) => setLoans(data));
  }, []);

  const ser = useLoaderData();

  return (
    <div className="apply-area w-100  my-20" >
      <Box
        className="container"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        width="100%"
        mx={"auto"}
        height={"800px"}
        zIndex="1"
        sx={{
          backgroundImage: `url(${apply})`,
          backgroundRepeat: "no-repeat",
        }}
        maxWidth="1000px"
      >
        <form
          style={{
            background: "#F7F1EB",
            marginTop: "10px",
            width: "500px",
            height: "500px",
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 mb-4 "
        >
          <Grid container  >
            <Grid item xs={12}>
              <input
                className="border m-3 p-2 w-100"
                style={{width:'400px'}}
                placeholder="Your Name"
              ></input>
            </Grid>
            <Grid item lg={12}>
              <input  style={{width:'400px'}} className="border m-3 p-2" placeholder="Email"></input>
            </Grid>
            <Grid item xs={12}>
              <input  style={{width:'400px'}} className="border m-3 p-2" placeholder="Phone"></input>
            </Grid>
            <Grid item xs={12}>
              <input  style={{width:'400px'}}
                className="border m-3 p-2"
                placeholder="Loan"
                defaultValue={ser.title}
              ></input>
            </Grid>
            <Grid item xs={6}>
              <select
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
              <input  style={{width:'400px'}} className="border m-3 p-2" placeholder="Date"></input>
            </Grid>
            
            <button
             style={{width:'400px'}}
              className="primary-btn m-3 p-2  my-2 "
              type="submit"
            >
              Send
            </button>
          </Grid>
        </form>
      </Box>
    </div>
  );
}
