import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

const VerificationDetails = () => {
  const { state: customer } = useLocation();
  console.log(customer);
  return (
    <div>
      <Card className="w-3/4 lg:w-1/2 mx-auto">
        <CardBody>
          <Image
            src={customer.cardImg}
            alt={customer.accountId}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Text size="md"> Name: {customer.firstName} {customer.lastName}</Text>
            <Text size="md"> Account Id: {customer.accountId}</Text>
            <Text size="md"> Account Category: {customer.accountCategory}</Text>
            <Text size="md"> Account Open Date: {customer.accountOpenDate}</Text>
            <Text size="md"> Account Type: {customer.accountType}</Text>
            <Text size="md"> Date of Birth: {customer.birth}</Text>
            <Text size="md"> City: {customer.city}</Text>
            <Text size="md"> Country: {customer.country}</Text>
            <Text size="md"> Email: {customer.email}</Text>
            <Text size="md"> Gender: {customer.gender}</Text>
            <Text size="md"> Id Number: {customer.idNumber}</Text>
            <Text size="md"> Identification: {customer.identification}</Text>
            <Text size="md"> MonthlySalary: {customer.monthlySalary}</Text>
            <Text size="md"> Phone: {customer.phone}</Text>
            <Text size="md"> Postal: {customer.postal}</Text>
            <Text size="md"> Region: {customer.region}</Text>
            <Text size="md"> StreetAddress: {customer.streetAddress}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
          <button className="text-lg fw-bold rounded sm-btn primary-btn exchange-btn accept bg-[#010c3a]">
                Accept
              </button>
              <button className="text-md sm-btn primary-btn exchange-btn bg-[#df0303]">
                Cancel
              </button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default VerificationDetails;
