import { Button, Input, TextField } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-area">
      <div className="container">
        <div className="flex justify-center align-middle gap-5">
          <span className="text-red-600">--</span>
          <h2 className="text-red-600">Contact Us</h2>
          <span className="text-red-600">--</span>
        </div>
        <h1 className="text-4xl font-bold text-center">
          Free Consultation Right Now
        </h1>
        <div className="my-16">
          <form className="w-9/12 mx-auto bg-zinc-50 p-5 rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
              <TextField hintText="Enter username" placeholder="Your Name">
                <input
                  className="form-control"
                  ref="username"
                  type="text"
                  name="name"
                />
              </TextField>
              <TextField hintText="Enter Email" placeholder="Your Email">
                <input
                  className="form-control"
                  ref="useremail"
                  type="email"
                  name="email"
                />
              </TextField>
              <TextField hintText="Enter Phone" placeholder="Your Phone">
                <input
                  className="form-control"
                  ref="usernumber"
                  type="number"
                  name="number"
                />
              </TextField>
              <TextField hintText="Enter Website" placeholder="Your Website">
                <input
                  className="form-control"
                  ref="useremail"
                  type="text"
                  name="website"
                />
              </TextField>
            </div>
            <div className="mt-5">
              <TextField
                className="bd_textarea w-full"
                label="Message..."
                multiline
                rows={5}
              />
            </div>
            <div className="mt-5 text-center">
              <Button variant="contained" color="error">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
