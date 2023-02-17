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
import { MdClear, MdMailOutline, MdNotificationsNone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { AuthContext } from "../../../context/AuthProvider";
// const socket = io("*");
const socket = io("http://localhost:5000/");

const DashboardNavbar = () => {
  const { user, logOut, openSideNav, handleSideNave, role } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [chatNotifications, setChatNotification] = useState([]);
  const [totalChat, setTotalChat] = useState(0);
  const [reFetch, setRefetch] = useState(false);
  const [notifications, setNotification] = useState([]);
  const [totalNotification, setTotalNotification] = useState(0);
  const [bankInfo, setBankInfo] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bankAccounts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBankInfo(data);
      });
  }, []);

  
  useEffect(() => {
    fetch(`http://localhost:5000/getChatNotificationInfo/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setChatNotification(data);
        setTotalChat(data.length);
      });
  }, [reFetch]);

  useEffect(() => {
    fetch(`http://localhost:5000/getVerifyNotificationInfo`)
      .then((res) => res.json())
      .then((data) => {
        setNotification(data);
        setTotalNotification(data.length);
      });
  }, [reFetch]);

  socket.on("messageNotificationTransfer", (message) => {
    if (message.receiverEmail === user.email) {
      setRefetch(!reFetch);
    }
  });

  socket.on("verificationNotificationTransfer", (message) => {
    if (role === "admin") {
      setRefetch(!reFetch);
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
          .catch((error) => {});
      });
  };

  const handleNotification = (data) => {
    const info = {
      senderEmail: data.senderEmail,
      receiverEmail: data.receiverEmail,
    };
    fetch(`http://localhost:5000/notificationDelete`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        setRefetch(!reFetch);
      });
  };

  const handleAllNotification = (data) => {
    const info = {
      email: data.email,
    };
    fetch(`http://localhost:5000/verificationNotificationDelete`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        setRefetch(!reFetch);
      });
  };
  return (
    <div className="container">
      <div className="flex items-center justify-between h-[50px]">
        <div className="text-white">
          <div className="text-white w-[70%] flex items-center justify-center py-[10px]"></div>
        </div>

        {/* -----right---- */}
        <div className="flex">
          {/* chat notification */}
          <Menu>
            <MenuButton className="bg-transparent-nav" as={Button}>
              <IconButton className="bg-transparent-nav text-white -m-4">
                <Badge colorScheme="error" className="" badgecontent={4}>
                  <MdMailOutline className="" />
                  {totalChat > 0 ? (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-[13px] rounded-full w-5 h-5 flex items-center justify-center">
                      {totalChat}
                    </span>
                  ) : undefined}
                </Badge>
              </IconButton>
            </MenuButton>

            {totalChat > 0 ? (
              <MenuList className="h-80 overflow-auto p-2">
                <MenuGroup title="Messages Notification">
                  {chatNotifications?.map((chatInfo) => {
                    return (
                      <>
                        <Link
                          to={`/dashboard/CustomerSupport/admin`}
                          state={chatInfo}
                          onClick={() => handleNotification(chatInfo)}
                        >
                          <MenuItem>
                            <Avatar
                              name={chatInfo?.senderName}
                              src={chatInfo?.senderImg}
                            />
                            <span className="m-1">
                              {chatInfo?.message.length > 10
                                ? chatInfo?.message.slice(0, 11) + "..."
                                : chatInfo?.message}
                            </span>
                          </MenuItem>
                        </Link>
                      </>
                    );
                  })}
                </MenuGroup>
              </MenuList>
            ) : undefined}
          </Menu>

          {/* others notification */}
          {
            role === 'admin' ?   <Menu>
            <MenuButton className="bg-transparent-nav" as={Button}>
              <IconButton className="bg-transparent-nav text-white -m-4">
                <Badge colorScheme="error" badgecontent={4}>
                  <MdNotificationsNone />
                  {totalNotification > 0 ? (
                    <span className="text-[13px] absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                      {totalNotification}
                    </span>
                  ) : undefined}
                </Badge>
              </IconButton>
            </MenuButton>

            {totalNotification > 0 ? (
              <MenuList className="h-80 overflow-auto p-2">
                <MenuGroup title="Notifications">
                  {notifications?.map((notification) => {
                    return (
                      <>
                        <Link
                          to="verificationRequest/details/"
                          state={notification}
                          onClick={() => handleAllNotification(notification)}
                        >
                          <MenuItem>
                            {notification.accountCategory ? (
                              <span className="">
                                {notification?.firstName} apply for verification
                              </span>
                            ) : undefined}
                          </MenuItem>
                        </Link>
                      </>
                    );
                  })}
                </MenuGroup>
              </MenuList>
            ) : undefined}
          </Menu> : undefined
          }
        

          <Menu>
            <MenuButton className="bg-transparent-nav" as={Button}>
              <Avatar name="Dan Abrahmov" src={user?.photoURL} />
            </MenuButton>

            <MenuList>
              <MenuGroup>
              <MenuItem> {user?.displayName} </MenuItem>
             {
              role === 'customer' ?  <MenuItem> Id: {bankInfo?.accountId} </MenuItem> : undefined
             }
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
