import React from "react";
import Slider from "react-slick";
import "../../App.css";
import { Card, CardBody, Text } from "@chakra-ui/react";
import {
  FaGasPump,
  FaHandHoldingWater,
  FaInternetExplorer,
  FaRegCreditCard,
} from "react-icons/fa";
import { FcElectricity } from "react-icons/fc";
import { FiMonitor } from "react-icons/fi";

const PaymentBillsSlider = () => {
  const billsData = [
    {
      id: 0,
      title: "Electricity",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: FcElectricity,
    },
    {
      id: 1,
      title: "Water",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: FaHandHoldingWater,
    },
    {
      id: 2,
      title: "Gas",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: FaGasPump,
    },
    {
      id: 4,
      title: "Internet",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: FaInternetExplorer,
    },
    {
      id: 5,
      title: "Television",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: FiMonitor,
    },
    {
      id: 6,
      title: "Credit Card",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      icon: FaRegCreditCard,
    },
  ];
  const sliderSettings = {
    className: "center",
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
    <div>
      <div className="container">
        <Slider {...sliderSettings} className="mt-[60px]">
          {billsData.map((bill) => (
            <Card
              key={bill.id}
              style={{ width: "100%", height: "auto" }}
              className="hover:bg-[#041C51]  hover:text-[#fff] hover:animate-animated hover:animate-pulse"
            >
              <CardBody className="flex flex-col align-center justify-center hover:text-white">
                <div className="w-100  text-4xl flex align-center justify-center my-3">
                  <bill.icon />
                </div>
                <Text
                  fontWeight={700}
                  color="#DF0303"
                  marginY={2}
                  fontSize={24}
                  textAlign="center"
                >
                  {bill.title}
                </Text>
                <div className="text-md text-center">{bill.details}</div>
              </CardBody>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PaymentBillsSlider;
