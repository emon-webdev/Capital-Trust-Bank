import React from 'react';
import Slider from 'react-slick';
import loan from '../../assets/Banner/loan.jpg';
import insurance from '../../assets/Banner/insurance.jpg';
import apply from '../../assets/Banner/apply.jpg';
import Banner2Slide from './Banner2Slide';
import '../../App.css';

const sliderData = [
    {
        'title': 'Capital Trust Bank For Better Feature',
        'img': apply,
        'content': 'We consider all the drivers of change – from the ground up and we’ll motivate and support you to make the change.',
        'btn': 'Apply Loan',
        'link': '/apply'
    },
    {
        'title': 'Capital Trust Bank For Better Feature',
        'img': loan,
        'content': 'We consider all the drivers of change – from the ground up and we’ll motivate and support you to make the change.',
        'btn': 'Get Services',
        'link': '/services'
    },
    {
        'title': 'Capital Trust Bank For Better Feature',
        'img': insurance,
        'content': 'We consider all the drivers of change – from the ground up and we’ll motivate and support you to make the change.',
        'btn': 'Pay Bill',
        'link': '/paymentbills'
    },
]
const Banner2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        // draggable: false,
        fade: true,        
    };
    return (
        < >
            <Slider  {...settings}>
                {
                    sliderData.map(data => <Banner2Slide data={data} />)
                }
            </Slider>
        </>
    );
};

export default Banner2;