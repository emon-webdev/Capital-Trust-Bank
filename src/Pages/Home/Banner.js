import React from 'react';
import Slider from 'react-slick';
import slide1 from '../../assets/Banner/apply.jpg';
import slide2 from '../../assets/Banner/slider_2.png';
import slide3 from '../../assets/Banner/insurance.jpg';
import "../../App.css";
import { Link } from 'react-router-dom';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
        // draggable: false,
        // fade: true,
        adaptiveHeight: true,
        appendDots: (dots) => <ul className="slider-dots">{dots}</ul>,
        customPaging: (i) => (
            <div className="ft-slick__dots--custom">
                <div className="loading" />
            </div>
        ),
    };
    return (
        <Slider {...settings} className=''>
            <div className='' style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide1})`,
                fontSize: "50px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // height: '100vh',
                margin: "0px",
                width: "100%",
            }}>
                <div className='container'>
                    <h1 className="banner2 banner-title font-semibold">Capital Trust Bank For Better Feature</h1>
                    <p className="banner2 py-[30px]">We consider all the drivers of change – from the ground up and we’ll motivate and support you to make the change.</p>
                    <Link to='' className="banner2 btn-sm primary-btn">
                        Button
                    </Link>
                </div>
            </div>


            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide2})`,
                    fontSize: "50px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    // height: '100vh',
                    margin: "0px",
                    width: "100%",
                }}
            >
                <div className='container'>
                    <h1 className="banner2 banner-title font-semibold">We Provide Best Loan Services</h1>
                    <p className="banner2 py-[30px]">We consider all the drivers of change – from the ground up and we’ll motivate and support you to make the change.</p>
                    <Link to='' className="banner2 btn-sm primary-btn">
                        Button
                    </Link>
                </div>
            </div>


            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide3})`,
                    fontSize: "50px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    // height: '100vh',
                    margin: "0px",
                    width: "100%",
                }}
            >
                <div className='container'>
                    <h1 className="banner2 banner-title font-semibold">Enjoy a Good Future With Our Bank</h1>
                    <p className="banner2 py-[30px]">We consider all the drivers of change – from the ground up and we’ll motivate and support you to make the change.</p>
                    <Link to='' className="banner2 btn-sm primary-btn">
                        Button
                    </Link>
                </div>
            </div>
        </Slider>
    );
};

export default Banner;