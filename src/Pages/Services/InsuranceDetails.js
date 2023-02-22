import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DynamicBanner from "../Shared/DynamicBanner/DynamicBanner";

const InsuranceDetails = (props) => {
  const insu = useLoaderData();
  const [name, setName] = useState("Insurance");
  return (
    <div className="">
      <div className="mb-5">
        <DynamicBanner name={name}></DynamicBanner>
      </div>
      <div className="container my-10 ">
        <div className="mx-auto lg:w-[70%] md:w-[100%] sm: w-[100%]">
          <Card key={insu.id} boxShadow="2xl">
            <CardBody>
              <VStack>
                <Image
                  style={{ width: "500px", height: "500px" }}
                  src={insu.img}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </VStack>
              <VStack mt="6" spacing="3">
                <Heading marginY={5} fontSize={30} size="md">
                  {insu.title}
                </Heading>
                <Box>
                  <Text
                    fontWeight={"500"}
                    marginX={10}
                    marginY={5}
                    lineHeight={10}
                    fontSize={24}
                  >
                    {insu.details}
                  </Text>
                </Box>
              </VStack>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InsuranceDetails;
