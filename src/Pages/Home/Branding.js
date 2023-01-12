import { Box } from '@mui/material';
import React from 'react';
import microsoft from '../../assests/Brands/Microsoft.png';
import alphabet from '../../assests/Brands/Alphabet.png';
import anydesk from '../../assests/Brands/Anedesk.png';
import ryzen from '../../assests/Brands/RYZEN.png';
import shape1 from '../../assests/Brands/shape-1.png';
import shape2 from '../../assests/Brands/shape-2.png';

const Branding = () => {
    return (
        <Box className='branding-area' sx={{background: '#010C3A', padding: '5px 0'}}>

            <Box className='container flex justify-between items-center'>
            <figure><img className='w-[54px]' src={shape1} alt="" /></figure>
                <Box className='mx-auto  md:flex justify-between items-center'>
                    
                    <figure><img className='md:w-[150px] md:mb-3 mx-auto' src={anydesk} alt="" /></figure>
                    <figure><img className='md:w-[150px] mx-auto' src={alphabet} alt="" /></figure>
                    <figure><img className='md:w-[150px] mx-auto' src={ryzen} alt="" /></figure>
                    <figure><img className='md:w-[150px] mx-auto' src={microsoft} alt="" /></figure>
                </Box>
                    <figure><img className='w-[54px]' src={shape2} alt="" /></figure>
            </Box>

        </Box>
    );
};

export default Branding;