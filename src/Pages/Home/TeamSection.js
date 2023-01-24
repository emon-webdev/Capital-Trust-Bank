import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import '../../App.css';

const TeamSection = ({ team }) => {
    console.log(team)
    const { image, name, designation, email, social } = team;
    return (
        // <Box class="flex flex-col items-center team p-8 transition-colors duration-300 transform rounded-xl bg-[#fdf3f3] group hover:bg-[#df0303]">

        //         <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={image} alt="" />


        //     <Box className='tttt relative top-[-90px] text-center'>
        //         <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{name}</h1>

        //         <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{designation}</p>
        //     </Box>

        //     {/* -------------social link section------------ */}

        //     <Box class="flex mt-3 -mx-2 icon-box relative top-[-74%]">
        //         {
        //             social.map(icon =>
        //                 <>
        //                     <Link className='mr-3 w-[32px] h-[32px] bg-[#010c3a] hover:bg-[#df0303] duration-500 text-white rounded-full flex items-center justify-center' to={icon.facebook}><FaFacebook /></Link>
        //                     <Link className='w-[32px] h-[32px] bg-[#010c3a] hover:bg-[#df0303] duration-500 text-white rounded-full flex items-center justify-center' to={icon.linkedin}><FaLinkedin /></Link>
        //                     <Link className='ml-3 w-[32px] h-[32px] bg-[#010c3a] hover:bg-[#df0303] duration-500 text-white rounded-full flex items-center justify-center' to={icon.github}><FaGithub /></Link>
        //                 </>
        //             )
        //         }
        //     </Box>

        // </Box>

        <div class="flex flex-col items-center team p-8 transition-colors duration-300 transform rounded-xl bg-[#fdf3f3] group hover:bg-[#df0303]">
            <Box className='image-wrapper'>
                <img class="object-cover w-32  h-32 rounded-full ring-4 ring-gray-300" src={image} alt="" />
                <Box className=''>
                    {/* flex justify-center relative top-[-20%] */}
                    <Box class="icon-box">
                        {
                            social.map(icon =>
                                <>
                                    <Link className='mr-3 w-[32px] h-[32px] bg-[#010c3a] hover:bg-[#df0303] duration-500 text-white rounded-full flex items-center justify-center' to={icon.facebook}><FaFacebook /></Link>
                                    <Link className='w-[32px] h-[32px] bg-[#010c3a] hover:bg-[#df0303] duration-500 text-white rounded-full flex items-center justify-center' to={icon.linkedin}><FaLinkedin /></Link>
                                    <Link className='ml-3 w-[32px] h-[32px] bg-[#010c3a] hover:bg-[#df0303] duration-500 text-white rounded-full flex items-center justify-center' to={icon.github}><FaGithub /></Link>
                                </>
                            )
                        }
                    </Box>
                </Box>
            </Box>

            <Box className='text-center'>

                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{name}</h1>

                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{designation}</p>
            </Box>


        </div>

    );
};

export default TeamSection;