import { Box, Typography } from "@mui/material";
import React from "react";
// import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
// import image1 from "../../assests/Team/team-img1.png";
// import image2 from "../../assests/Team/team-img2.png";
// import image3 from "../../assests/Team/team-img3.png";
import "../../App.css";
import TeamSection from "./TeamSection";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import { getTeams } from "../../hooks/API/API";



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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          dots: true,
          infinite: 5
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      </Box>
    </Box>
  );
};

export default Team;
