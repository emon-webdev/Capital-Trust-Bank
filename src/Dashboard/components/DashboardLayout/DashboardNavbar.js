import {
  Avatar,
  Badge,
  Button,
  Hide,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  MdClear,
  MdMailOutline,
  MdNotificationsNone
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { AuthContext } from "../../../context/AuthProvider";
const socket = io("http://localhost:5000/");
const DashboardNavbar = () => {
  const { user, logOut, openSideNav, handleSideNave } = useContext(AuthContext);
  const navigate = useNavigate();
  const [chatNotifications,setChatNotification] = useState([])
  const [totalChat,setTotalChat] = useState(0);
  const [reFetch,setRefetch] = useState(false);
  useEffect(() => {
    fetch(
      `http://localhost:5000/getChatNotificationInfo/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setChatNotification(data)
        setTotalChat(data.length)
      });
  }, [reFetch]);
    socket.on("messageNotificationTransfer", (message) => {
      console.log(message)
      if (message.receiverEmail === user.email) {
        setRefetch(!reFetch)
      } 
    });
 
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
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
  };
  
  const handleNotification = (data)=> {
    const info = {
      senderEmail: data.senderEmail,
      receiverEmail: data.receiverEmail
    }
  fetch(`http://localhost:5000/notificationDelete`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then(data => {
        setRefetch(!reFetch)
      })
  }
  return (
    <div className="container">
      <div className="flex items-center justify-between h-[50px]">
        <div className="text-white">
          <div className="text-white w-[70%] flex items-center justify-center py-[10px]">
          </div>
        </div>

        {/* -----right---- */}
        <div className="flex">
        <Menu>
            <MenuButton className="bg-transparent-nav" as={Button}>
            <IconButton className="bg-transparent-nav text-white -m-4">
            <Badge colorScheme="error" badgecontent={4}>
              <MdMailOutline  />{
                totalChat > 0 ? <span className="text-red-400">{totalChat}</span> : undefined
              }
            </Badge>
            {/*  */}
          </IconButton>
            </MenuButton>

           {
            totalChat > 0 ?  <MenuList className="h-80 overflow-auto p-2">
            <MenuGroup title="Messages Notification">
              {
                chatNotifications?.map(chatInfo => {
                  return <>
              <Link to={`/dashboard/CustomerSupport/admin`} state={chatInfo} onClick={()=>handleNotification(chatInfo)}>
                <MenuItem>
                <Avatar name={chatInfo?.senderName} src={chatInfo?.senderImg} />
                <span className="m-1">{chatInfo?.message}</span>
                </MenuItem>
              </Link>
                  </>
                })
              }
              
            </MenuGroup>
          </MenuList> : undefined
           }
          </Menu>

          <Menu>
            <MenuButton className="bg-transparent-nav" as={Button}>
            <IconButton className=" text-white bg-transparent-nav -m-4">
            <Badge colorScheme="error" size="lg" badgecontent={4}>
              <MdNotificationsNone />
            </Badge>
          </IconButton>
            </MenuButton>

            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Profile</MenuItem>
                <Link onClick={handleSignOut}>
                  <MenuItem>Log Out </MenuItem>
                </Link>
              </MenuGroup>
            </MenuList>
          </Menu>
          
          <Menu>
            <MenuButton className="bg-transparent-nav" as={Button}>
              <Avatar name="Dan Abrahmov" src={user?.photoURL} />
            </MenuButton>

            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Profile</MenuItem>
                <Link onClick={handleSignOut}>
                  <MenuItem>Log Out </MenuItem>
                </Link>
              </MenuGroup>
            </MenuList>
          </Menu>
          <Hide above="lg">
            <IconButton
              onClick={handleSideNave}
              className="bg-transparent-nav text-white"
            >
              {openSideNav ? <MdClear /> : <FaBars />}
            </IconButton>
          </Hide>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
