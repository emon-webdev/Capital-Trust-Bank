import { Avatar, WrapItem } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaLocationArrow } from "react-icons/fa";
import { useLocation } from "react-router-dom";
// import io from "socket.io-client";
import { AuthContext } from "../../../context/AuthProvider";
// const socket = io("*");
// const socket = io("http://localhost:5000/");

const IndividualSupport = () => {
  const { user, role } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [allLoad, setAllLoad] = useState(false);
  const { state } = useLocation();
  // useEffect(() => {
  //   socket.on("messageTransfer", (message) => {
  //     if (message.to === user.email) {
  //       setMessages([...messages, message]);
  //     } else {
  //       setMessages([...messages, ""]);
  //     }
  //   });
  // }, [messages, user]);
  useEffect(() => {
    fetch(
      `http://localhost:5000/getChatInfo/${user.email + " " + state.senderEmail
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllLoad(true);
        setAllMessages(data);
      });
  }, [user, messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    if(message.trim().length === 0) {
      toast.error("You can't send empty message!");
    }
    else {
    const chatInfo = {
      senderEmail: user.email,
      senderImg: user.photoURL,
      senderName: user.displayName,
      receiverEmail: "",
      receiverImg: "",
      receiverName: "",
      message: message,
    };
    if (role === "admin") {
      chatInfo.receiverEmail = state.senderEmail;
      chatInfo.receiverImg = state.senderImg;
      chatInfo.receiverName = state.senderName;
      // socket.emit("send message", chatInfo);
    } else {
      // socket.emit("send message", chatInfo);
    }
    event.target.reset();
  }
  };

  return (
    <div className="bg-white shadow-lg h-screen">
      <div className="p-3 border-b-2">
        <WrapItem className="flex items-center chat-avatar">
          <Avatar name={user?.name} src={user?.photoURL} />
          <h1 className="ml-3">{user?.displayName}</h1>
        </WrapItem>
      </div>
      {/* chat area */}
      <div className="flex flex-col space-y-4 p-3 overflow-y-auto scroll-w-2 scroll-touch h-[74vh]">
        <div className="chat-message">
          {
            allMessages.map(message => {
              return <>
                {
                  message.senderEmail === user?.email ? <div className="flex flex-col space-y-4 p-3 overflow-y-auto scroll-w-2 scroll-touch">
                    <div className="chat-message">
                      <div className="flex items-end justify-end">
                        <div>

                          <img
                            className="w-6 h-6 rounded-full order-1"
                            src={message.senderImg}
                            alt={message.senderName} />
                        </div>

                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200">  {message.message}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> : <div className="flex items-end py-3">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                      <div>
                        <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#010c3a] text-white">
                          {message.message}
                        </span>
                      </div>
                    </div>
                    <img
                      className="w-9 h-9 rounded-full order-1"
                      src={message.senderImg}
                      alt={message.senderName}
                    />
                  </div>
                }
              </>
            })
          }
        </div>
      </div>

      <div className="p-3">
        <hr />
        <div className="relative">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Write Something...."
              name="message"
              className=" w-full mt-3 active:outline-none focus:outline-none focus:placeholder-gray-400 placeholder-gray-300  bg-gray-100 px-4 rounded-full py-3 border-gray-200"
            />
            <button type='submit'>
              <FaLocationArrow className="dd absolute right-[3%] top-[43%] text-[#010c3a] text-[22px] cursor-pointer" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndividualSupport;
