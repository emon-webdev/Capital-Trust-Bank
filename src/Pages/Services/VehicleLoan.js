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

export default function VehicleLoan() {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const loan = {
        "id": "4",
        "details": "Own your dream car with Capital Trust Bank car loans. Capital Trust Bank offers uniquely tailored Car Loan product that takes the pain and hassle out of buying a car.",
        "title": "Vehicle Loan",
        "img": "https://i.ibb.co/vVxszGm/vehicle-loan.jpg"
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
