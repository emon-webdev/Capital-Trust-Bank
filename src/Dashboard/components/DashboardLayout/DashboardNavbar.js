import { MdClear, MdMailOutline, MdNotificationsNone, MdOutlineFilterCenterFocus } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo/mainlogo.png';
import { AuthContext } from '../../../context/AuthProvider';
import { Avatar, Badge, Button, Hide, IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";

const DashboardNavbar = () => {
    const { user, logOut, openSideNav, handleSideNave } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSignOut = () => {
         //delete customer device info
      fetch(`http://localhost:5000/deleteDeviceInfo/${user.email}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
            logOut()
            .then(() => { navigate('/') })
            .catch((error) => {
                console.log(error.message);

            });
        });
    };

    return (
        <div className="container">
            <div className="flex items-center justify-between h-[50px]">
                <div className="text-white">
                    <div className="text-white w-[70%] flex items-center justify-center py-[10px]">
                        <Link
                            className="navbar-brand font-bold text-2xl flex items-center"
                            to="/"
                        >
                            <img src={logo} alt="" srcSet="" />
                            <span className="font-bold text-[32px] ml-1 text-[#fff]">
                                C<span className=" text-[#DF0303]">T</span>B
                            </span>
                        </Link>
                    </div>
                </div>


                {/* -----right---- */}
                <div className="flex">
                    <IconButton className='bg-transparent-nav mr-1 text-white'>
                        <Badge colorScheme='error' size='lg' badgeContent={4}>
                            <MdMailOutline />
                        </Badge>
                        {/*  */}
                    </IconButton>

                    <IconButton className=' text-white mr-1 bg-transparent-nav'>
                        <Badge colorScheme='error' size='lg' badgeContent={4}>
                            <MdNotificationsNone />
                        </Badge>
                    </IconButton>

                    <IconButton className=' text-white mr-1 bg-transparent-nav'>
                        <Badge colorScheme='error' size='lg' badgeContent={4}>
                            <MdOutlineFilterCenterFocus />
                        </Badge>
                    </IconButton>
                    <Menu>
                        <MenuButton className='bg-transparent-nav' as={Button}>
                            <Avatar name='Dan Abrahmov' src={user?.photoURL} />
                        </MenuButton>

                        <MenuList>
                            <MenuGroup title='Profile'>
                                <MenuItem>My Profile</MenuItem>
                                <Link onClick={handleSignOut}><MenuItem>Log Out </MenuItem></Link>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                    <Hide above="lg">
                        <IconButton onClick={handleSideNave} className='bg-transparent-nav text-white'>
                            {
                                openSideNav ?  <MdClear /> : <FaBars /> 
                            }
                        </IconButton>
                    </Hide>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;