import React from 'react';
import Slider from 'react-slick';
import slider2 from '../../assets/Banner/slider_2.png';
import insurance from '../../assets/Banner/insurance.jpg';
import apply from '../../assets/Banner/apply.jpg';
import Banner2Slide from './Banner2Slide';
import '../../App.css';

const sliderData = [
    {
        'title': 'Capital Trust Bank For Better Feature',
        'img': apply,
        'content': 'We consider all the drivers of change – from the ground up and we’ll motivate and support you to make the change.',
        'btn': 'Open an Account',
        'link': '/accountOpenFrom'
    },
    {
        'title': 'We Provide Best Loan Services',
        'img': slider2,
        'content': 'We provide you with many kinds of loans which you need. You can pay through monthly, quarterly, or annual installments.',
        'btn': 'Loans Services',
        'link': '/loansServices'
    },
    {
        'title': 'Let him who would enjoy a good future waste none of his presents',
        'img': insurance,
        'content': 'Breaking even is nothing to be ashamed of – especially if your needs are met, and you’re not in debt or making a loss. Profits and savings can come with time.',
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
        // autoplay: true,
        // draggable: false,
        // fade: true,
        adaptiveHeight: true,
        appendDots: dots => <ul className='slider-dots'>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom">
                <div className="loading" />
            </div>
        )
    };
    return (
        <div className='slider-parent'>
            <Slider className='slide-wrapper' {...settings}>
                {
                    sliderData.map(data => <Banner2Slide data={data} />)
                }
            </Slider>
        </div>
    );
};

export default Banner2;