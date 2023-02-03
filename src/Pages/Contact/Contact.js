import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import address from '../../assets/contact/Address.png';
import arrow from '../../assets/contact/ArrowUpRight.png';
import mail from '../../assets/contact/Mail.png';
import phone from '../../assets/contact/Phone.png';
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
import './Contact.css';


const Contact = () => {
  const [name, setName] = useState("Contact Us");
  return (
    <div>
      <DynamicBanner name={name}></DynamicBanner>
      <div className="contact-area">
      <div className="container">


        {/* Card Section Start */}
      <div className="card">
      <Card className="onlyCard">
        <CardContent className="CardContent">
          <img className=" mb-3" src={phone} alt="" />
          <Typography className="text-white" sx={{ fontSize: 14}} gutterBottom>
        +00(123)345 543 23
        </Typography>
        <Typography className="text-white" variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisc elit.<br /> Phasellus aliquet urna  libero ut.
          </Typography>
        </CardContent>
      </Card>
      <Card className="onlyCard">
        <CardContent className="CardContent">
          <img className=" mb-3" src={mail} alt="" />
          <Typography className="text-white" sx={{ fontSize: 14}} gutterBottom>
          Ixora@gmail.com
        </Typography>
        <Typography className="text-white" variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisc elit. <br /> Phasellus aliquet urna  libero ut.
          </Typography>
        </CardContent>
      </Card>
      <Card className="onlyCard">
        <CardContent className="CardContent">
          <img className=" mb-3" src={address} alt="" />
          <Typography className="text-white" sx={{ fontSize: 14}} gutterBottom>
          12 Poving st..Rnu 3542
        </Typography>
        <Typography className="text-white" variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisc elit. <br /> Phasellus aliquet urna  libero ut.
          </Typography>
        </CardContent>
      </Card>
      </div>
      {/* Card Section End */}

      {/* Send Us A Message Start */}
        <h1 className="text-4xl font-bold text-center mt-10">
        Send Us A Message
        </h1>
        <div className="my-16">
          <form
            className="w-9/12 mx-auto bg-zinc-50 p-5 rounded"
            action="https://formspree.io/f/xrgvbwoq"
            method="POST"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
              <TextField
                hintText="Enter username"
                placeholder="First Name"
                name="name"
              >
                <input
                  className="form-control"
                  ref="username"
                  type="text"
                  name="name"
                />
              </TextField>
              <TextField
                hintText="Enter username"
                placeholder="Last Name"
                name="name"
              >
                <input
                  className="form-control"
                  ref="username"
                  type="text"
                  name="name"
                />
              </TextField>
              <TextField
                hintText="Enter Email"
                placeholder="Your Email"
                name="email"
              >
                <input
                  className="form-control"
                  ref="useremail"
                  type="email"
                  name="email"
                />
              </TextField>
              <TextField
                hintText="Address"
                placeholder="Address"
                name="name"
              >
                <input
                  className="form-control"
                  ref="username"
                  type="text"
                  name="name"
                />
              </TextField>
            </div>
            <div className="mt-5">
              <TextField
                className="bd_textarea w-full"
                name="Message"
                label="Message..."
                multiline
                rows={5}
              />
            </div>
            <div className="mt-5 text-center">
              <Button variant="contained" color="error" type="submit">
                Send A Message <img src={arrow} alt="" />
              </Button>
            </div>
          </form>
        </div>
        {/* Send Us A Message End */}
        
        {/* GoogleMap Start */}
        <div>
          <iframe style={{ width: "100%", height: "500px" }}  src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        {/* GoogleMap End */}
      </div>
    </div>
    </div>
  );
};

export default Contact;
