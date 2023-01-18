import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './Mylinks';

const NavLinks = () => {

    const [heading, setHeading] = useState('');
    const [subHeading, setSubHeading] = useState('');


    // let activeClass = {
    //     color: "#DF0303",
    //     background: "none",
    // };
    return (
        <>
            {
                links.map(link =>
                (<div>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h1
                            className='mb-0 py-3'
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading('');
                                setSubHeading('');
                            }}
                        >
                            {link?.name}
                        </h1>
                        {heading}
                        {
                            link.submenu &&
                            <div>
                                <div className='absolute to-20 hidden group-hover:md:block hover:md:block md:cursor-pointer'>
                                    <div className='py-3'>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-red-500 rotate-45'>

                                        </div>
                                    </div>
                                    <div className='bg-white p-3.5  border-t-2 border-[#df0303]'>
                                        {
                                            link.sublinks?.map(mySubLinks => (
                                                <div>
                                                    <h2 className='text-lg font-semibold'>{mySubLinks.Head}</h2>
                                                    {
                                                        mySubLinks.subLink.map(sLink => (
                                                            <li className='text-sm text-gray-600 my-2.5'>
                                                                <Link to={sLink.link} className="hover:text-primary">
                                                                    {sLink.name}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                        }
                    </div>
                    {/* Mobile Menus */}
                    <div div className={`
                    ${heading === link.name ? 'md:hidden' : 'hidden'}
                    `}>
                        {/* sublinks */}
                        {
                            link.sublinks?.map(slinks => (
                                <div>
                                    <h2 onClick={() =>
                                        subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading('')
                                    }
                                        className='text-lg font-semibold py-4 pl-7 md:pr-0 pr-5 '>{slinks.Head}</h2>
                                    <div className={`${subHeading === slinks.Head ? 'md:hidden' : 'hidden'
                                        }`}>
                                        {
                                            slinks.subLink.map(sLink => (
                                                <li className='text-sm py-3 pl-14 text-gray-600 my-2.5'>
                                                    <Link to={sLink.link} className="hover:text-primary">
                                                        {sLink.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div >)
                )
            }
        </>
    );
};

export default NavLinks;