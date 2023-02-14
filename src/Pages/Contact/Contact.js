import React, { useState } from "react";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";
import {
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import "./Contact.css";
import phone from "../.././assets/contact/Phone.png";
import mail from "../.././assets/contact/Mail.png";
import address from "../.././assets/contact/Address.png";
import arrow from "../.././assets/contact/ArrowUpRight.png";
import { redirect, Form, Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("Contact");
  return (
    <div>
      <DynamicBanner name={name}></DynamicBanner>
      <div className="contact-area">
        <div className="container">
          {/* Card Section Start */}
          <div className="card">
            <SimpleGrid
              spacing={5}
              templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
            >
              <Card className="card-body">
                <CardHeader className="CardContent">
                  <img src={phone} alt="" />
                </CardHeader>
                <CardBody className="CardContent">
                  <Text className="text-white">+00(123)345 543 23</Text> <br />
                  <Text className="text-white">
                    This is our contact number, if you are interested in any
                    loan, service, insurance, then feel free to call us. 24/7 we
                    serve you.
                  </Text>
                </CardBody>
              </Card>
              <Card className="card-body">
                <CardHeader className="CardContent">
                  <img src={mail} alt="" />
                </CardHeader>
                <CardBody className="CardContent">
                  <Text className="text-white">Ixora@gmail.com</Text> <br />
                  <Text className="text-white">
                    This is our email address, feel free to email us if you have
                    any queries regarding any of our services. 24/7 we serve
                    you.
                  </Text>
                </CardBody>
              </Card>
              <Card className="card-body">
                <CardHeader className="CardContent">
                  <img src={address} alt="" />
                </CardHeader>
                <CardBody className="CardContent">
                  <Text className="text-white">2880 Broadway, New York</Text>{" "}
                  <br />
                  <Text className="text-white">
                    This is our bank address, if you are interested in any
                    services or have any questions about any of our services
                    then come our bank.
                  </Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </div>
          {/* Card Section End */}

          {/* Send Us A Message Start */}
          <h1 className="text-4xl font-bold text-center mt-10">
            Send Us A Message
          </h1>
          <div className="my-16">
            <Form method="post" action="/">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
                <FormControl isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input placeholder="First name" name="firstName" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder="Last name" name="lastName" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Email" name="email" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Address</FormLabel>
                  <Input placeholder="Address" name="address" />
                </FormControl>
              </div>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Write Your Message" name="message" />
              </FormControl>

              <div className="mt-5 text-center">
                <Link type="submit" to="/" className="secondary-btn ml-10 mt-5">
                  Send A Message <img src={arrow} alt="" />
                </Link>
              </div>
            </Form>
          </div>
          {/* Send Us A Message End */}
        </div>

        {/* GoogleMap Start */}
        <div>
          <iframe
            style={{ width: "100%", height: "500px" }}
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
        {/* GoogleMap End */}
      </div>
    </div>
  );
};

export default Contact;

export const createAction = async ({ request }) => {
  const data = await request.formdata();

  const task = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    address: data.get("address"),
    message: data.get("message"),
  };

  console.log(task);

  return redirect("/");
};
