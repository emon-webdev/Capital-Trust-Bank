import { Stack } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../App.css';

const ExchangeSlide = ({ item }) => {
    const { img, rate, buying, selling , BDT } = item;
    return (
        <div className={` rounded flex flex-col items-center text-center text-white p-3 bg-[${item.img}] bg-cover bg-center`}
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            <Stack spacing={3}>
                <h className='bg-[#010c3a] py-3 rounded'>{rate}</h>
                <input type='text' value={buying} className='text-black p-[10px] rounded text-center' readOnly />
                <input type='text' placeholder='text' value={selling} className='text-black p-[10px] rounded text-center' readOnly />
            </Stack>
            <Link to='/exchange' className='sm-btn primary-btn exchange-btn bg-[#df0303]' state={{BDT}}>
                Exchange Now
            </Link>
        </div>
    );
};

export default ExchangeSlide;