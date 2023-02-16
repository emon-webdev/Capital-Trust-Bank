import { Avatar } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../../App.css';
import { AuthContext } from "../../../context/AuthProvider";

const CustomerSupport = () => {
  const { user, role } = useContext(AuthContext);
  const [chatsInfo, setChatsInfo] = useState([]);
  const [adminInfo, setAdminInfo] = useState([]);
  let url;
  role === "customer" ? (url = "getAdminInfo") : (url = "getAllCustomersChat");
  useEffect(() => {
    fetch(`http://localhost:5000/${url}`)
      .then((res) => res.json())
      .then((data) => {
        role === "admin" ? setChatsInfo(data) : setAdminInfo(data);
      });
  }, []);
  console.log(chatsInfo)
  console.log(adminInfo)
  return (
    <>
      <div>
        {
          role === 'customer' ? <Link to={`/dashboard/CustomerSupport/admin`} state={{ senderEmail: 'admin@gmail.com' }}>
            <div className=" lg:w-1/2 mx-auto my-2 flex gap-2 h-fit border-2 p-2">
              <div className="photo">
                <Avatar alt={adminInfo.name} src={adminInfo?.image} />
              </div>
              <div className="text flex items-center">
                <p>{adminInfo.name}</p>
              </div>
            </div>
          </Link> : chatsInfo.map((chatInfo) => {
            return (
              <>
                <Link to={`/dashboard/CustomerSupport/admin`} state={chatInfo}>
                  <div className=" lg:w-1/2 mx-auto my-2 flex gap-2 h-fit border-2 p-2">
                    <div className="photo">
                      <Avatar alt={chatInfo.senderName} src={chatInfo?.senderImg} />
                    </div>
                    <div className="text flex items-center">
                      <p>{chatInfo.senderName}</p>
                    </div>
                  </div>
                </Link>
              </>
            );
          })
        }
      </div>
    </>

  );
};

export default CustomerSupport;
