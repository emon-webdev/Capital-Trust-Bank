import { Box, Typography } from '@mui/material';
import React from 'react';
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <Box className='counter-area mb-4' sx={{background: '#010C3A', padding: '33px 0px'}}>
            <Box className='container mx-auto md:flex justify-between items-center'>
                <Box>
                   <Typography 
                   sx={{ 
                    fontSize: '64px', 
                    lineHeight: '80px',
                    color: '#DF0303',
                    fontWeight: 700,                    
                 }}
                    > <CountUp  end={345}  duration={3} /></Typography>
                    <span className='text-white font-semibold'>Total Clients</span>
                </Box>
                 
                <Box>
                <Typography 
                   sx={{ 
                    fontSize: '64px', 
                    lineHeight: '80px',
                    color: '#DF0303',
                    fontWeight: 700,                    
                 }}
                    > <CountUp  end={500} duration={3} suffix='+' /></Typography>
                    <span className='text-white font-semibold'>Project Done</span>
                </Box>

                <Box>
                <Typography 
                   sx={{ 
                    fontSize: '64px', 
                    lineHeight: '80px',
                    color: '#DF0303',
                    fontWeight: 700,                    
                 }}
                    > <CountUp  end={139} duration={3} suffix='+' /></Typography>
                    <span className='text-white font-semibold'>Award Win</span>
                </Box>

                <Box>
                <Typography 
                   sx={{ 
                    fontSize: '64px', 
                    lineHeight: '80px',
                    color: '#DF0303',
                    fontWeight: 700,                    
                 }}
                    > <CountUp  end={1200}   duration={3}  suffix='+' /></Typography>
                    <span className='text-white font-semibold'>Team Members</span>
                </Box>
            </Box>

        </Box>
    );
};

export default Counter;