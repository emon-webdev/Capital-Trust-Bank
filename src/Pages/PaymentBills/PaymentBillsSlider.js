import React from "react";
import Slider from "react-slick";
import "../../App.css";
import { Card, CardBody } from "@chakra-ui/react";
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
        "PayBills caters to simplifying all aspects of life in a smooth transition.PayBills facilitiates paying bills of all kinds.",
      icon: FcElectricity,
    },
    {
      id: 1,
      title: "Water",
      details:
        "Paying bills can be quite a hassle when life gets busy, especially when we have more than one kind of bill to pay.",
      icon: FaHandHoldingWater,
    },
    {
      id: 2,
      title: "Gas",
      details:
        "You will not have to deal with any more hassle to pay utility, internet and other type of bills.You can easily pay any bills on time without any stress.",
      icon: FaGasPump,
    },
    {
      id: 3,
      title: "Internet",
      details:
        "PayBills caters to simplifying all aspects of life in a smooth transition.PayBills facilitiates paying bills of all kinds.",
      icon: FaInternetExplorer,
    },
    {
      id: 4,
      title: "Television",
      details:
        "Paying bills can be quite a hassle when life gets busy, especially when we have more than one kind of bill to pay.",
      icon: FiMonitor,
    },
    {
      id: 5,
      title: "Credit Card",
      details:
        "You will not have to deal with any more hassle to pay utility, internet and other type of bills.You can easily pay any bills on time without any stress.",
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
              className="hover:bg-[#010C3A]  hover:text-[#fff] hover:animate-animated hover:animate-pulse"
            >
              <CardBody className="flex flex-col align-center justify-center hover:text-white">
                <div className="w-100  text-4xl flex align-center justify-center my-3">
                  <bill.icon />
                </div>
                <div className="text-md text-center text-2xl font-bold my-2">
                  {bill.title}
                </div>
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
