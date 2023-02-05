import { Box } from '@mui/material';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../App.css';

const TeamSection = ({ team }) => {
    const { image, name, designation, social, _id } = team;



    return (

        <Link to={`/team-details/${_id}`}>
            <Box className="flex flex-col items-center team p-8 transition-colors duration-300 transform rounded-xl bg-[#fdf3f3] group hover:bg-[#df0303]">
                <Box className='image-wrapper'>
                    <img className="object-cover w-32  h-32 rounded-full ring-4 ring-gray-300" src={image} alt="" />

                </Box>

                <Box className='text-center'>

                    <h1 className="mt-4 text-2xl font-semibold text-[#010c3a] capitalize dark:text-white group-hover:text-white">{name}</h1>

                    <p className="-mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{designation}</p>
                </Box>

                <Box className="flex">
                    {
                        social.map((icon) =>
                            <>
                                <Link to={icon.facebook} className='mr-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded-full flex items-center justify-center' ><FaFacebook /></Link>
                                <Link to={icon.linkedin} className='w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded-full flex items-center justify-center' ><FaLinkedin /></Link>
                                <Link to={icon.github} className='ml-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded-full flex items-center justify-center' ><FaGithub /></Link>
                            </>
                        )
                    }
                </Box>

            </Box>
        </Link>

    );
};

export default TeamSection;