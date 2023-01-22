
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import apply from "../../assets/Services(Home)/apply-form-box-bg.jpg";
import { AuthContext } from "../../context/AuthProvider";

export default function ApplyForm() {
  const [district, setDistrict] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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
  const [loans, setLoans] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/loans")
      .then((res) => res.json())
      .then((data) => setLoans(data));
  }, []);

  const ser = useLoaderData();
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
    <div className="apply-area w-100 d-flex justify-center my-20">
      
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
                                   
          <form   onSubmit={handleSubmit} style={{ backgroundColor:'#F9F9F9', height:'550px',width:'500px' }} className="p-5 mb-4 ">
            
          <Grid container className="my-3" >
            <Grid item xs={12}>
              <input
               name="name"
                className="border m-3 p-2 w-100"
                style={{width:'400px'}}
                placeholder="Your Name"
                defaultValue={user.displayName}
              ></input>
            </Grid>
            <Grid item lg={12}>
              <input name="email" style={{width:'400px'}} className="border m-3 p-2" placeholder="Email" defaultValue={user.email}></input>
            </Grid>
            <Grid item xs={12}>
              <input name="phone"  style={{width:'400px'}} className="border m-3 p-2" placeholder="Phone"></input>
            </Grid>
            <Grid item xs={12}>
              <input name="loan"  style={{width:'400px'}}
                className="border m-3 p-2"
                placeholder="Loan"
                defaultValue={ser.title}
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
                ></select>
              <button
                style={{ width: "400px" }}
                className="primary-btn m-3 p-2  my-2 "
                type="submit"
              >
                Apply
              </button>
            </Grid>
          </form>
        </Box>
      </div>
    </div>
  );
}
