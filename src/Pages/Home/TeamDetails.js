import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DynamicBanner from '../Shared/DynamicBanner/DynamicBanner';
import { VscStarFull, VscStarHalf } from 'react-icons/vsc';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import '../../App.css';


const TeamDetails = () => {
    const teamDetails = useLoaderData();
    const { name: name2, email, social, image, designation } = teamDetails;
    const [name, setName] = useState("Team Details");
    return (
        <div>
            <DynamicBanner name={name} />
            <div className='container'>
                <div className='flex items-center details py-10'>

                   
                    <div className='w-[30] image-box'>
                        <img src={image} alt={name2} className='rounded-md' />
                    </div>

                    
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
                                            <a href={icon.facebook} target="_blank" className='mr-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded flex items-center justify-center' ><BsFacebook /></a>
                                            <a href={icon.linkedin} target="_blank" className='w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded flex items-center justify-center' ><BsLinkedin /></a>
                                            <a href={icon.github} target="_blank" className='ml-3 w-[28px] h-[28px] bg-[#df0303] hover:bg-[#010c3a] duration-500 text-white rounded flex items-center justify-center' ><BsGithub /></a>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <hr />

                        
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