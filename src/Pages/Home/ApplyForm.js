import { Box } from "@mui/system";
import React, { useState } from "react";
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

  return (
    <div className="apply-area w-100 d-flex justify-center my-20">
      <Box
        className="container"
        display={"flex"}
        alignItems="center"
        width="100%"
        mx={"auto"}
        height={"500px"}
        sx={{
          backgroundImage: `url(${apply})`,
          backgroundRepeat: "no-repeat",
        }}
        maxWidth="1200px"
      >
        <Box
          sx={{
            background: "#F7F1EB",
            marginLeft: "500px",
            marginTop: "10px",
            width: "50%",
          }}
        >
          <div className=""></div>
          <form style={{ height: "400px" }} className="p-5 mb-4 ">
            <input
              className="border m-3 p-2"
              height={"100px"}
              placeholder="Your Name"
            ></input>
            <input className="border m-3 p-2" placeholder="Email"></input>
            <br />
            <input className="border m-3 p-2" placeholder="Phone"></input>
            <input className="border m-3 p-2" placeholder="State"></input>
            <br />

            <select
              style={{ height: "40px", width: "240px" }}
              value={district}
              onChange={handleChange}
              label="city"
              className="border m-3 p-2"
            >
              {districts.map((dis) => (
                <option key={dis} value={dis}>
                  {dis}
                </option>
              ))}
            </select>
            <input className="border m-3 p-2" placeholder="Date"></input>
            <br></br>
            <button
              className="primary-btn m-3 p-2 d-flex my-5 items-center justify-center"
              type="submit"
            >
              Send
            </button>
          </form>
        </Box>
      </Box>
    </div>
  );
}
