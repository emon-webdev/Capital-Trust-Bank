import { Button } from "@chakra-ui/button";
import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { RxArrowTopRight } from "react-icons/rx";

import React, { useEffect, useState } from "react";
import img1 from "../../assets/features/features-1.png";
import img2 from "../../assets/features/features-2.png";
import img3 from "../../assets/features/features-3.png";
import { Link } from "react-router-dom";

export default function FeaturedNews() {
  const [newsData, setNewsData] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/blogsNews")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  return (
    <div className="features-area my-20">
      <Text
        marginBottom={2}
        textAlign="center"
        sx={{ fontWeight: "bold" }}
        color="#DF0303"
      >
        -- Blog & News --
      </Text>
      <Text
        variant="h4"
        marginBottom={5}
        fontWeight="700"
        textAlign="center"
        color="black"
      >
        Featured news & Insights
      </Text>
      <div className="container align-content-center justify-items-center grid gap-3  grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4 ">
        {newsData?.map((news) => (
          <Card
            marginX={2}
            key={news.id}
            sx={{ height: "100%", width: "100%" }}
            className="drop-shadow-2xl"
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
              {/* <Box
               sx={{
                 width: 74,
                 height: 74,
                 backgroundColor: "#DF0303",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 color: "white",
                 padding: "10px",
                 position: "absolute",
                top: "300px",
                 right: "32px",
                 textAlign: "center",
               }}
             >
               30 March
             </Box> */}
              <Stack>
                <Text fontSize={18} marginY={4}>
                  {news.category}
                </Text>
                <Text fontSize={20} fontWeight={900}>
                  {news.title}
                </Text>

                <Box display="flex" alignItems="center" color="red">
                  <text
                    className="text-[#DF0303] font-bold my-2"
                    backgroundColor="white"
                    fontSize="16px"
                    fontWeight={900}
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
  );
}
