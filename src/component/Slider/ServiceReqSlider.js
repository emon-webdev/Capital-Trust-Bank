import CheckIcon from "@mui/icons-material/Check";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Box, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FiPhoneCall } from "react-icons/fi";
import Slider from "react-slick";
import sliderImg1 from "../../assets/serviceReqImg/features-style2-banner-1.jpg";
import AuthProvider, { AuthContext } from "../../context/AuthProvider";
import "./ServiceReqSlider.css";
const ServiceReqSlider = () => {
  const { user } = AuthProvider(AuthContext);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [slidersNav, setSlidersNav] = useState([]);
  const [slidersContents, setSlidersContents] = useState([]);
  /* Modal action */
  const [show, setShow] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  /* slider data fetch */
  useEffect(() => {
    fetch("sliders.json")
      .then((res) => res.json())
      .then((data) => {
        setSlidersNav(data[0].sliderNav);
        setSlidersContents(data[0].sliderContent);
      });
  }, []);

  const handleServiceSubmit = (event) => {
    event.preventDefault();
    console.log("hello from");
    toast.success("Emergency Service Requests  Done");
  };

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  /* submit from for service req */
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      {/* Section title here */}
      <div>
        <div>
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            // slidesToShow={4}
            // swipeToSlide={true}
            // focusOnSelect={true}
            {...settings}
          >
            {slidersNav.map((sliderNav) => (
              <div key={sliderNav?._id}>
                <div className="single-slider-nav">
                  <div className="slider-nav-icon">
                    <CreditCardIcon />
                  </div>
                  <h3>{sliderNav?.title}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-8 slider-main-content">
          <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
            {slidersContents.map((slidersContent) => (
              <div>
                <div className="single-slider-content">
                  <div className="md:flex items-center justify-between">
                    <div className="flex-1 md:mr-[30px] mb-[30px] md:mb-0">
                      <div className="slider-content">
                        <h2 className=" font-semibold text-xl text-[#010C3A]">
                          {slidersContent?.name}
                        </h2>
                        {slidersContent?.services.map((service) => (
                          <p
                            key={service?._id}
                            className="font-medium text-[16px] mb-2 text-[#010C3A]"
                          >
                            <span className="">
                              <CheckIcon className="text-[#DF0303] text-[22px] p-[2px] rounded-md mr-1" />
                            </span>
                            {service?.name}
                          </p>
                        ))}
                        <button
                          onClick={handleOpen}
                          className="primary-btn"
                          type="submit"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="slider-img  flex items-center justify-between">
                        <div className="slider-img-content flex-1 text-center px-3">
                          <p className="">
                            <FiPhoneCall />
                          </p>
                          <h4 className="text-md font-medium mb-2">Call for</h4>
                          <h3 className="text-lg font-medium mb-3">
                            {slidersContent?.name}
                          </h3>
                          <h2>
                            <a
                              href="tel:+8(222)123-456-78"
                              className="mb-0  text-xl"
                            >
                              {slidersContent?.phone}
                            </a>
                          </h2>
                        </div>
                        <div className="img-box flex-1">
                          <img src={sliderImg1} alt="" srcSet="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Show Modal */}
                  <div>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={open}>
                        <Box sx={style}>
                          <h2 className="font-semibold ">
                            {slidersContent?.name}
                          </h2>

                          <div className="service-main-from">
                            <form
                              onSubmit={handleServiceSubmit}
                              className="text-center"
                            >
                              <input
                                name="name"
                                className="border px-3 rounded "
                                style={{ width: "100%" }}
                                readOnly
                                placeholder={user?.displayName}
                                defaultValue={user?.displayName}
                              ></input>
                              <input
                                name="email"
                                readOnly
                                style={{ width: "100%" }}
                                className="border email-filed px-3 rounded"
                                placeholder={user?.email}
                                defaultValue={user?.email}
                              ></input>

                              <select
                                name="city"
                                style={{ width: "100%" }}
                                label="city"
                                className="border  px-3 rounded"
                                placeholder="City"
                              >
                                {slidersContent?.services.map((service) => (
                                  <option
                                    key={service?._id}
                                    value={service?.name}
                                  >
                                    {service?.name}
                                  </option>
                                ))}
                              </select>
                              <input
                                name="phone"
                                style={{ width: "100%" }}
                                className="border  px-3  rounded"
                                placeholder="Phone"
                              ></input>
                              <div className="flex items-center">
                                <span
                                  onClick={() => setOpen(false)}
                                  className="sm-btn mr-4"
                                >
                                  Cancel
                                </span>
                                <input
                                  onClick={() => setOpen(false)}
                                  type="submit"
                                  value="SUBMIT"
                                  className="sm-btn"
                                />
                              </div>
                            </form>
                          </div>
                        </Box>
                      </Fade>
                    </Modal>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServiceReqSlider;
