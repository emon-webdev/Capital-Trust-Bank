import { Stack } from '@chakra-ui/react';
import React from 'react';

const ExchangeSlide = ({ item }) => {
    return (
        <div className={`text-center text-white p-3 bg-[${item.img}] bg-cover bg-center`}
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${item.img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            <Stack spacing={3}>
                <input type='text' placeholder='text' />
                <input type='text' placeholder='text' />
                <input type='text' placeholder='text' />
            </Stack>
        </div>
    );
};

export default ExchangeSlide;