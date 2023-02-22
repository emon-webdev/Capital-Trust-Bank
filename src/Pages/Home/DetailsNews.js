import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle/useTitle";

const DetailsNews = (props) => {
  useTitle("DetailsNews")
  const [showAll, setShowAll] = useState(false);
  const blog = useLoaderData();
  return (
    <div className="container my-10 ">
      <div className="mx-auto lg:w-[70%] md:w-[100%] sm: w-[100%]">
        <Card key={blog.id} boxShadow="xl">
          <CardBody>
            <VStack>
              <Image
                style={{ width: "800px", height: "100%" }}
                src={blog.img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </VStack>
            <VStack mt="6" spacing="3">
              <Heading marginY={5} fontSize={30} size="md">
                {blog.title}
              </Heading>
              <Text lineHeight={10} paddingX={5} fontSize={26}>
                {showAll ? blog.details : blog.details.slice(0, 600)}
                <Text
                  as={"span"}
                  onClick={() => setShowAll(!showAll)}
                  className="text-lg text-red-600 text-bold cursor-pointer"
                >
                  {showAll ? "" : "...read more"}
                </Text>
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DetailsNews;
