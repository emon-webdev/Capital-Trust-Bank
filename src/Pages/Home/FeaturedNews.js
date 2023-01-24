import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img1 from "../../assets/features/features-1.png";
import img2 from "../../assets/features/features-2.png";
import img3 from "../../assets/features/features-3.png";
export default function FeaturedNews() {
  const NewsData = [
    {
      id: 1,
      category: "Business",
      title: "Stock Exchange Market Foreca 2021-2022",
      img: img1,
    },
    {
      id: 2,
      category: "Business",
      title: "How companies are re-configuring supply",
      img: img2,
    },
    {
      id: 3,
      category: "Business",
      title: "Stock Exchange Market Foreca 2021-2022",
      img: img3,
    },
  ];
  return (
    <div className="features-area my-20">
      <Typography marginBottom={2} textAlign="center" sx={{fontWeight: 'bold'}} color="#DF0303">
        -- Blog & News --
      </Typography>
      <Typography
        variant="h4"
        marginBottom={5}
        fontWeight="700"
        textAlign="center"
        color="black"
      >
        Featured news & Insights
      </Typography>
      <div className="container grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {NewsData?.map((news) => (
          <Card key={news.id} sx={{ maxWidth: 424, maxHeight: 536 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={news.img}
                alt="green iguana"
                position="relative"
              />
              <Box
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
              </Box>
              <CardContent>
                <Typography fontSize={"16px"}>{news.category}</Typography>
                <Typography
                  marginTop={2}
                  gutterBottom
                  fontSize={"20px"}
                  fontWeight="bold"
                  component="div"
                >
                  {news.title}
                </Typography>
                <Button color="error">
                  <Typography fontSize="14px" fontWeight={900}>
                    READ MORE
                  </Typography>{" "}
                  <ArrowOutwardIcon />
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}
