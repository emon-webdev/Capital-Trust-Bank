import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DynamicBanner from '../Shared/DynamicBanner/DynamicBanner';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { VscStarFull, VscStarHalf } from 'react-icons/vsc';
import '../../App.css';


const TeamDetails = () => {
    const teamDetails = useLoaderData();
    const { name: name2, email, social, image, designation } = teamDetails;
    const [name, setName] = useState("Team Details");
    console.log(teamDetails)
    return (
        <div>
            <DynamicBanner name={name} />

            <div className='container'>
                <div className='flex items-center details py-10'>

                    {/* ------image box------ */}
                    <div className='w-[30] image-box'>
                        <img src={image} alt={name2} className='rounded-md' />
                    </div>

                    {/* -----content box------ */}
                    <div className='w-[50%] ml-[60px] content-box'>
                        <div className='flex title-icon-box justify-between'>
                            <div>
                                <h1 className='text-[40px] leading-[48px]'>{name2}</h1>
                                <p className='text-[#010c3a]'>{designation}</p>
                            </div>
                            <div className=''>
                                {
                                    social.map((icon) =>
                                        <div className='flex items-center'>
                                            <h3 className='mr-3 mt-3'>Follow: </h3>
                                            <Link to={icon.facebook} className='mr-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded-full flex items-center justify-center' ><FaFacebook /></Link>
                                            <Link to={icon.linkedin} className='w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded-full flex items-center justify-center' ><FaLinkedin /></Link>
                                            <Link to={icon.github} className='ml-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded-full flex items-center justify-center' ><FaGithub /></Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <hr />

                        {/* ---biography--- */}
                        <div className='py-[35px]'>
                            <h4>Biography</h4>
                            <p>
                                Mauris turpis nunc, blandit et volutpat molestie porta ut, ligula. Fusce pharetra convallis urna. Quisque ut nisi. Donec mi odio fauciberisque quis, convallis in nisi. Suspendisse non nisl sit amet velit hendrerit tm. Ut leo. a nisl id ante tempus hendrerit.

                            </p>
                        </div>
                        <hr />

                        <div className='flex items-center justify-between py-[20px]'>
                            <div>
                                <h4>Reviews:</h4>
                                <div className='flex text-yellow-400'>
                                    <spn><VscStarFull /></spn>
                                    <spn><VscStarFull /></spn>
                                    <spn><VscStarFull /></spn>
                                    <spn><VscStarHalf /></spn>
                                </div>
                            </div>

                            <div>
                                <h4>Email Address:</h4>
                                <span>email@gmail.com</span>
                            </div>

                            <div>
                                <h4>Phone Number:</h4>
                                <span>123456789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;