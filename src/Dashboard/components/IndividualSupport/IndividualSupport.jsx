import { Avatar } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import { AuthContext } from "../../../context/AuthProvider";
const socket = io("http://localhost:5000");
const IndividualSupport = () => {
  const { user, role } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [allLoad, setAllLoad] = useState(false)
  const { state } = useLocation();
  useEffect(() => {
    socket.on("messageTransfer", (message) => {
      console.log(message);
      if (message.to === user.email) {
        setMessages([...messages, message]);
      } else {
        setMessages([...messages, ""]);
      }
    });
  }, [messages, user]);
  useEffect(() => {
    fetch(`http://localhost:5000/getChatInfo/${user.email + " " + state.senderEmail}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setAllLoad(true)
        setAllMessages(data)
      });
  }, [user, messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;

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
      socket.emit("send message", chatInfo);
    } else {
      socket.emit("send message", chatInfo);
    }
    event.target.reset();
  };

  return (
    <div className="flex h-screen items-center">
      <div className=" w-full lg:w-1/2 mx-auto border-2 h-full default-bg p-3 overflow-auto">

        {allMessages.map((singleInfo) => {
          return (
            <div className=" border-2 my-2 p-2 default-bg">
              <div className="photo flex items-center p-2">
                <Avatar alt={singleInfo.senderName} src={singleInfo?.senderImg} />
                <p className="text-white">{singleInfo.senderName}</p>
              </div>
              <div className="text">
                <p className="text-white">{singleInfo.message}</p>
              </div>
            </div>
          );
        })}


        <hr />
        <div className="sent text-right">
          <div className="btn my-2 flex justify-end gap-2">
            <form className="" onSubmit={handleSubmit}>
              <input
                type="text"
                name="message"
                className="border-2 p-2"
                placeholder="Type here....."
              />
              <div className="mt-2">
                <button type="submit" className="border-2 p-2 rounded text-white hover:bg-red-600">
                  Sent
                </button>
              </div>
            </form>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default IndividualSupport;
