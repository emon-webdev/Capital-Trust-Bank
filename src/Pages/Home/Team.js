import { Box, Typography } from "@mui/material";
import React from "react";
// import image1 from '../../assests/Team/Ellipse 3497 (1).png';
// import image2 from '../../assests/Team/Ellipse 3497 (2).png';
// import image3 from '../../assests/Team/Ellipse 3497.png';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import image1 from "../../assests/Team/team-img1.png";
import image2 from "../../assests/Team/team-img2.png";
import image3 from "../../assests/Team/team-img3.png";

import "../../App.css";

const Team = () => {
  return (
    <Box className="team-area py-12">
      <Box className="container mx-auto">
        <Typography marginBottom={2} textAlign="center" sx={{fontWeight: 'bold'}} color="#DF0303">
        -- Our Team --
      </Typography>
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "56px",
            fontWeight: 700,
            color: "#010C3A",
            textAlign:'center'
          }}
          variant="h3"
        >
          Team Of Expert Consulted
        </Typography>
        <Box className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 py-16 mt-[150px]">
          <Box
            sx={{
              position: "relative",
              height: "348px",
              maxWidth: "424px",
              // width: '424px',
            }}
            className="team"
          >
            <Box
            
              sx={{
                position: "absolute",
                height: "348px",
                left: "38px",
                right: "38px",
                // right: '30px',
                top: "-45%",
              }}
              className="team-img-box"
            >
              {" "}
              <img className="bg-image" src={image1} alt="team-1" />
              <Box
                sx={{
                  position: "absolute",
                  left: "35%",
                  bottom: "24%",
                }}
                className="flex justify-between w-[100px] icon-box"
              >
                <FaLinkedin className="icon cursor-pointer w-[30px] h-[30px] p-2" />
                <FaTwitter className="icon cursor-pointer w-[30px] h-[30px] p-2" />
                <FaFacebook className="icon cursor-pointer w-[30px] h-[30px] p-2" />
              </Box>
            </Box>

            <Box className="title-box">
              <Typography
                className="title"
                sx={{
                  position: "absolute",
                  bottom: "5px",
                  width: "134px",
                  height: "28px",
                  left: "126px",
                  top: "210px",
                  // left: '144px',
                  // top: '240px',
                  fontSize: "20px",
                  lineHeight: "28px",
                  fontWeight: 700,
                  color: "#010C3A",
                }}
              >
                Adam Smith
              </Typography>

              <Typography
                className="title"
                sx={{
                  position: "absolute",
                  width: "216px",
                  height: "24px",
                  left: "143px",
                  top: "240px",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#706F6D",
                  opacity: 0.5,
                }}
              >
                Co-Founder
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              height: "348px",
              maxWidth: "424px",
              // width: '424px'
            }}
            className="team team-2"
          >
            <Box
              sx={{
                position: "absolute",
                height: "348px",
                left: "38px",
                right: "38px",
                // right: '30px',
                top: "-45%",
              }}
              className="team-img-box"
            >
              {" "}
              <img className="bg-image" src={image2} alt="team-2" />
              <Box
                sx={{
                  position: "absolute",
                  left: "35%",
                  bottom: "24%",
                }}
                className="flex justify-between w-[100px] icon-box"
              >
                <FaLinkedin className="icon cursor-pointer w-[30px] h-[30px] p-2" />
                <FaTwitter className="icon cursor-pointer w-[30px] h-[30px] p-2" />
                <FaFacebook className="icon cursor-pointer w-[30px] h-[30px] p-2" />
              </Box>
            </Box>
            <Box className="title-box">
              <Typography
                className="title"
                sx={{
                  position: "absolute",
                  bottom: "5px",
                  width: "134px",
                  height: "28px",
                  left: "126px",
                  top: "210px",
                  fontSize: "20px",
                  lineHeight: "28px",
                  fontWeight: 700,
                  color: "#010C3A",
                }}
              >
                Adam Smith
              </Typography>

              <Typography
                className="title"
                sx={{
                  position: "absolute",
                  width: "216px",
                  height: "24px",
                  left: "143px",
                  top: "240px",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#706F6D",
                  opacity: 0.5,
                }}
              >
                Co-Founder
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              height: "348px",
              maxWidth: "424px",
              // width: '424px'
            }}
            className="team team-2 team-3"
          >
            <Box
              sx={{
                position: "absolute",
                height: "348px",
                left: "38px",
                right: "38px",
                // right: '30px',
                top: "-45%",
              }}
              className="team-img-box"
            >
              {" "}
              <img className="bg-image" src={image3} alt="team-3" />
              <Box
                sx={{
                  position: "absolute",
                  left: "35%",
                  bottom: "24%",
                }}
                className="flex justify-between w-[100px] icon-box"
              >
                <FaLinkedin className="icon cursor-pointer w-[30px] h-[30px] p-2" />
                <FaTwitter className="icon cursor-pointer w-[30px] h-[30px] p-2" />
                <FaFacebook className="icon cursor-pointer w-[30px] h-[30px] p-2" />
              </Box>
            </Box>

            <Box className="title-2 title-box">
              <Typography
                className="title"
                sx={{
                  position: "absolute",
                  bottom: "5px",
                  width: "134px",
                  height: "28px",
                  left: "126px",
                  top: "210px",
                  fontSize: "20px",
                  lineHeight: "28px",
                  fontWeight: 700,
                  color: "#010C3A",
                }}
              >
                Adam Smith
              </Typography>

              <Typography
                className="title"
                sx={{
                  position: "absolute",
                  width: "216px",
                  height: "24px",
                  left: "143px",
                  top: "240px",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#706F6D",
                  opacity: 0.5,
                }}
              >
                Co-Founder
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
