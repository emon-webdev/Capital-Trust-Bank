import React from 'react';
import Slider from 'react-slick';
import dubai from '../../assets/dubai.jpg';
import uk from '../../assets/uk.png';
import usa from '../../assets/usa.jpg';
import canada from '../../assets/Flag-Canada.jpg';
import aus from '../../assets/Flag-Australia.jpg';
import india from '../../assets/india.jpg';
import ExchangeSlide from './ExchangeSlide';


const data = [
    {
        'img': dubai,
    },
    {
        'img': uk,
    },
    {
        'img': usa,
    },
    {
        'img': canada,
    },
    {
        'img': aus,
    },
    {
        'img': india,
    },
];

const Exchange = () => {
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
        <div className='exchange-area py-12'>
            <div className='container mx-auto'>
                <div className="text-center py-5">
                    <h1 className="text-[36px] font-semibold">Exchange Rate</h1>
                </div>
                <div>
                    <Slider {...sliderSettings}>
                        {
                            data.map(item => <ExchangeSlide item={item} />)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Exchange;