import { Avatar, WrapItem } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const CustomerSupport = () => {
  const { user, role } = useContext(AuthContext);
  const [chatsInfo, setChatsInfo] = useState([]);
  const [adminInfo, setAdminInfo] = useState([]);
  let url;
  role === "customer" ? (url = "getAdminInfo") : (url = "getAllCustomersChat");
  useEffect(() => {
    fetch(`https://capital-trust-bank-server.vercel.app/${url}`)
      .then((res) => res.json())
      .then((data) => {
        role === "admin" ? setChatsInfo(data) : setAdminInfo(data);
      });
  }, []);
  console.log(chatsInfo)
  return (
    // <div>
    //   {
    //   role === 'customer' ?  <Link to={`/dashboard/CustomerSupport/admin`} state={{senderEmail:'admin@gmail.com'}}>
    //   <div className=" lg:w-1/2 mx-auto my-2 flex gap-2 h-fit border-2 p-2">
    //     <div className="photo">
    //       <Avatar alt={adminInfo.name} src={adminInfo?.image} />
    //     </div>
    //     <div className="text flex items-center">
    //       <p>{adminInfo.name}</p>
    //     </div>
    //   </div>
    // </Link> : chatsInfo.map((chatInfo) => {
    //     return (
    //       <>
    //         <Link to={`/dashboard/CustomerSupport/admin`} state={chatInfo}>
    //           <div className=" lg:w-1/2 mx-auto my-2 flex gap-2 h-fit border-2 p-2">
    //             <div className="photo">
    //               <Avatar alt={chatInfo.senderName} src={chatInfo?.senderImg} />
    //             </div>
    //             <div className="text flex items-center">
    //               <p>{chatInfo.senderName}</p>
    //             </div>
    //           </div>
    //         </Link>
    //       </>
    //     );
    //   }) 
    //   }
    // </div>


    <>
      <div className="bg-white shadow-lg h-screen">
        <div className="p-3 border-b-2">
          <WrapItem className="flex items-center">
            <Avatar name={user?.name} src={user?.photoURL} />
            <h1 className="ml-3">{user?.displayName}</h1>
          </WrapItem>
        </div>
        {/* chat area */}
        {/* first message */}
        <div className="flex flex-col space-y-4 p-3 overflow-y-auto scroll-w-2 scroll-touch">
          <div className="chat-message">
            <div className="flex items-end">
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#010c3a] text-white">lorem ipsum</span>
                </div>
              </div>
              <img
                className="w-6 h-6 rounded-full order-1"
                src={user?.photoURL} alt={user?.displayName} />
            </div>
          </div>
        </div>

        {/* second message  */}
        
        <div className="flex flex-col space-y-4 p-3 overflow-y-auto scroll-w-2 scroll-touch">
          <div className="chat-message">
            <div className="flex items-end justify-end">
              <div>
                
                <img
                  className="w-6 h-6 rounded-full order-1"
                  src={user?.photoURL} alt={user?.displayName} />
              </div>

              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200">lorem ipsum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSupport;
