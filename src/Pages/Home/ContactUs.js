import { Button, Input, Textarea, WrapItem } from "@chakra-ui/react";
import React from "react";
import './ContactUs.css'
const ContactUs = () => {
  return (
    <div className="contact-area">
      <div className="container">
        <div className="flex justify-center align-middle gap-5 my-5">
          <span className="text-red-600">--</span>
          <h2 className="text-red-600">Contact Us</h2>
          <span className="text-red-600">--</span>
        </div>
        <h1 className="text-4xl font-bold text-center">
          Free Consultation Right Now
        </h1>
        <div className="my-16">
          <form
            className="w-9/12 mx-auto bg-zinc-50 p-5 rounded"
            action="https://formspree.io/f/xrgvbwoq"
            method="POST"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
            <Input placeholder='Your Name' name="name" type="text" size='lg'/>
            <Input placeholder='Your Email' name="email" type="email" size='lg'/>
            <Input placeholder='Your Phone' name="number" type="number" size='lg'/>
            <Input placeholder='Your Website' name="email" type="url" size='lg'/>
            </div>
            <div className="mt-5">
            <Textarea placeholder='Here is a sample placeholder'/>
            </div>
            <div className="mt-5 text-center">
            
      <button className="custom-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
