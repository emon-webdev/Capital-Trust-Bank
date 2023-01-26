import { Box, Typography } from "@mui/material";
import React from "react";
// import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
// import image1 from "../../assests/Team/team-img1.png";
// import image2 from "../../assests/Team/team-img2.png";
// import image3 from "../../assests/Team/team-img3.png";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import "../../App.css";
import { getTeams } from "../../hooks/API/API";
import TeamSection from "./TeamSection";



// const teams = [
//   {
//     "name": "Akash Chakrabortty",
//     "designation": "Back-End Developer",
//     "image": "https://i.ibb.co/mDZMR3Q/own1.jpg",
//     "social": [
//       {
//         "facebook": "https://www.facebook.com/akash.chakrabortty.589",
//         "linkedin": "https://www.linkedin.com/in/akash-chakrabortty-dev/",
//         "github": "https://github.com/AkashChakrabortty"
//       }
//     ]
//   },
//   {
//     "name": "Salma Tabassum Mouri",
//     "designation": "Front-end Developer",
//     "image": "https://i.ibb.co/VQtQz55/ACLD-134279-copy-1.jpg",
//     "social": [
//       {
//         "facebook": "https://www.facebook.com/mrinmoyee.mouri",
//         "linkedin": "https://www.linkedin.com/in/salma-mouri/",
//         "github": "https://github.com/salmamouri"
//       }
//     ]
//   },
//   {
//     "name": "MD Emon Hossain",
//     "designation": "Full Stack Developer",
//     "image": "https://i.ibb.co/tsTbGvn/IMG-1395-01.jpg",
//     "social": [
//       {
//         "facebook": "https://www.facebook.com/emon.webdev",
//         "linkedin": "https://www.linkedin.com/in/emon-webdev/",
//         "github": "https://github.com/emon-webdev"
//       }
//     ]
//   },
//   {
//     "name": "Niloy Modak",
//     "designation": "MERN Stack Developer",
//     "image": "https://i.ibb.co/SsRZh7Z/niloy-modak.jpg",
//     "social": [
//       {
//         "facebook": "https://www.facebook.com/NiloyModak11",
//         "linkedin": "https://www.linkedin.com/in/niloy-modak/",
//         "github": "https://github.com/niloymodak"
//       }
//     ]
//   },
//   {
//     "name": "Mohd. Wahidul Alam",
//     "designation": "Full Stack Developer",
//     "image": "https://i.ibb.co/7GghYqs/wahidul.png",
//     "social": [
//       {
//         "facebook": "https://www.facebook.com/wahidul.alam.7549",
//         "linkedin": "https://www.linkedin.com/in/mohd-wahidul-alam/",
//         "github": "https://github.com/wahid30"
//       }
//     ]
//   },
//   {
//     "name": "MD Rakib Khan",
//     "email": "contact.antor.bd@gmail.com",
//     "designation": "React Developer",
//     "image": "https://i.ibb.co/PDS0mX2/antor.webp",
//     "social": [
//       {
//         "facebook": "https://www.facebook.com/antor.khan.336333/",
//         "linkedin": "https://www.linkedin.com/in/rakib-khan-66623a221/",
//         "github": "https://github.com/Rakib86547"
//       }
//     ]
//   },
// ]


const Team = () => {
  const { data: teams = [] } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => getTeams()
  })
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
    initialSlide: 0,
    speed: 1000,
    gap: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Box className="team-area py-12">
      <Box className="container mx-auto">
        <Typography marginBottom={2} textAlign="center" sx={{ fontWeight: 'bold' }} color="#DF0303">
          -- Our Team --
        </Typography>
        <Typography
          sx={{
            fontSize: "48px",
            lineHeight: "56px",
            fontWeight: 700,
            color: "#010C3A",
            textAlign: 'center'
          }}
          variant="h3"
        >
          Team Of Expert Consulted
        </Typography>

        {/* grid gap-5 md:grid-cols-3 mt-[60px] */}
        <Slider {...sliderSettings} className='mt-[60px]'>
          {
            teams.map(team => <TeamSection key={team._id} team={team} />)
          }
        </Slider>



























        {/* <Box className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 py-16 mt-[150px]">
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
        </Box> */}
      </Box>
    </Box>
  );
};

export default Team;
