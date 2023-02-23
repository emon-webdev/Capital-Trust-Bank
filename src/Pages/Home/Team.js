import React from "react";
// import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
// import image1 from "../../assests/Team/team-img1.png";
// import image2 from "../../assests/Team/team-img2.png";
// import image3 from "../../assests/Team/team-img3.png";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "../../App.css";
import { getTeams } from "../../hooks/API/API";
import TeamSection from "./TeamSection";

const Team = () => {
  const { t } = useTranslation();
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
    arrows: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
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
        <div className="section-title w-full md:w-[650px] mx-auto text-center">
          <h5 className="text-[#DF0303] text-xl text-md mb-3">
            -- {t("Our_Team")} --
          </h5>
          <h1 className="text-[#010C3A] md:leading-[48px] text-4xl md:text-[40px] font-bold mb-6">
            {t("Our_Team_sb_tlt")}
          </h1>
        </div>
        <Slider {...sliderSettings} className="mt-[60px]">
          {teams?.map((team) => (
            <TeamSection key={team._id} team={team} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
