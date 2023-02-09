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
        'rate': '1 UAE = 29-BDT',
        'buying': 'Buying 28.5-BDT',
        'selling': 'Selling 30-BDT',
    },
    {
        'img': uk,
        'rate': '1 UK = 128.28-BDT',
        'buying': 'Buying 128-BDT',
        'selling': 'Selling 128.75-BDT',
    },
    {
        'img': usa,
        'rate': '1 USA = 106.50-BDT',
        'buying': 'Buying 106-BDT',
        'selling': 'Selling 107-BDT',
    },
    {
        'img': canada,
        'rate': '1 CAD = 79.54-BDT',
        'buying': 'Buying 79-BDT',
        'selling': 'Selling 80-BDT',
    },
    {
        'img': aus,
        'rate': '1 AUD = 74.22-BDT',
        'buying': 'Buying 74-BDT',
        'selling': 'Selling 74.80-BDT',
    },
    {
        'img': india,
        'rate': '1 INR = 1.29-BDT',
        'buying': 'Buying 1-BDT',
        'selling': 'Selling 1.50-BDT',
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