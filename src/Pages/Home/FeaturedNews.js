import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { RxArrowTopRight } from "react-icons/rx";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FeaturedNews() {
  const [newsData, setNewsData] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/blogsNews")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  return (
    <div className="features-area py-20">
      <div className="container">
        <div className="section-title w-full md:w-[650px] mx-auto text-center">
          <Text className="text-[#DF0303] text-xl text-md mb-3">
            -- Blog & News --
          </Text>
          <Text className="text-[#010C3A] md:leading-[48px] text-4xl md:text-[40px] font-bold mb-6">
            Featured news & Insights
          </Text>
        </div>
        <div className="blog-card align-content-center justify-items-center grid gap-3  grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4 ">
          {newsData?.map((news) => (
            <Card
              marginX={2}
              key={news.id}
              sx={{ height: "100%", width: "100%" }}
              className="drop-shadow-xl rounded-md"
            >
              <CardBody>
                <Image
                  component="img"
                  height="300px"
                  width="100%"
                  src={news.img}
                  alt="green iguana"
                  position="relative"
                />
                <Stack>
                  <Text
                    className="text-[#010c3a] font-semibold  "
                    fontSize={18}
                    marginY={4}
                  >
                    {news.category}
                  </Text>
                  <Text fontSize={20} fontWeight={600}>
                    {news.title}
                  </Text>

                  <Box display="flex" alignItems="center" color="red">
                    <text
                      className="text-[#DF0303] font-semibold my-2"
                      backgroundColor="white"
                      fontSize="16px"
                      Link
                    >
                      <Link to={`/blogsNews/${news._id}`}> READ MORE</Link>
                    </text>
                    <RxArrowTopRight className="text-2xl font-semibold " />
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
