import { Box, Typography } from '@mui/material';
import React from 'react';
import image1 from '../../assests/Team/Ellipse 3497 (1).png';
import image2 from '../../assests/Team/Ellipse 3497 (2).png';
import image3 from '../../assests/Team/Ellipse 3497.png';
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

import '../../App.css';

const Team = () => {
    return (
        <Box className='team-area'>
            <Box className='container mx-auto'>
                <Typography variant='h3'>Team Of Expert Consulted</Typography>
                <Box className='grid gap-5 md:grid-cols-3 py-16 mt-[200px]'>
                    <Box
                        sx={{
                            position: 'relative',
                            height: '355px',
                            width: '424px'
                        }}
                        className='team'>

                        <Box
                            sx={{
                                position: 'absolute',
                                width: '348px',
                                height: '348px',
                                left: '38px',
                                top: '-45%'
                            }}
                        > <img className='bg-image' src={image1} alt="" />
                            <Box 
                            sx={{
                                position: 'absolute',
                                left: '38%',
                                bottom: '16%',                                
                            }}
                            className='flex justify-between w-[80px] icon-box'>
                            <FaLinkedin className='icon cursor-pointer'/>
                            <FaTwitter className='icon cursor-pointer'/>
                            <FaFacebook className='icon cursor-pointer'/>
                            </Box>
                        </Box>
                        <Box

                        ><Typography
                        className='title'
                            sx={{
                                position: 'absolute',
                                bottom: '5px',
                                width: '134px',
                                height: '28px',
                                left: '144px',
                                top: '240px',
                                fontSize: '20px',
                                lineHeight: '28px',
                                fontWeight: 700,
                                color: '#010C3A'
                            }}
                        >Adam Smith</Typography>

                            <Typography
                            className='title'
                                sx={{
                                    position: 'absolute',
                                    width: '216px',
                                    height: '24px',
                                    left: '103px',
                                    top: '270px',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    lineHeight: '24px',
                                    color: '#706F6D',
                                    opacity: 0.5
                                }}
                            >Co-Founder</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Team;