import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const LoanDetails = (props) => {
  const data = useLoaderData();
  return (
    <div className="container my-10 ">
      <div className="mx-auto lg:w-[70%] md:w-[100%] sm: w-[100%]">
        <Card key={data.id} boxShadow="2xl">
          <CardBody>
            <VStack>
              <Image
                style={{ width: "800px", height: "100%" }}
                src={data.img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </VStack>
            <VStack mt="6" spacing="3">
              <Heading marginY={5} fontSize={30} size="md">
                {data.title}
              </Heading>
              <Box>
                <Text
                  fontWeight={"500"}
                  marginX={10}
                  marginY={5}
                  lineHeight={10}
                  fontSize={24}
                >
                  {data.details}
                </Text>
              </Box>
            </VStack>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LoanDetails;