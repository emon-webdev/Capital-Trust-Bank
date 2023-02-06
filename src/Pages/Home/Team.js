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

const Team = () => {
  const { data: teams = [] } = useQuery({
    queryKey: ["teams"],
    queryFn: async () => getTeams(),
  });
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
          dots: true,
        },
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     dots: true,
      //     infinite: 3
      //   }
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="team-area py-12">
      <div className="container mx-auto">
        {/* <Typography marginBottom={2} textAlign="center" sx={{ fontWeight: 'bold' }} color="#DF0303">
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
        </Typography> */}

        {/* grid gap-5 md:grid-cols-3 mt-[60px] */}
        <Slider {...sliderSettings} className="mt-[60px]">
          {teams.map((team) => (
            <TeamSection key={team._id} team={team} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
