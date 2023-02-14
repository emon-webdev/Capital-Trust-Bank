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

const DetailsNews = (props) => {
  const blog = useLoaderData();
  console.log(blog);
  //   const [blogs, setBlogs] = useState();
  //   useEffect(() => {
  //     fetch("http://localhost:5000/blogsNews")
  //       .then((res) => res.json())
  //       .then((data) => setBlogs(data));
  //   }, []);
  return (
    <div className="container">
      <div className="">
        <Card key={blog.id}>
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
              <Text lineHeight={10} fontSize={24}>
                {blog.details}
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DetailsNews;
