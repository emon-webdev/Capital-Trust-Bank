import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import io from "socket.io-client";
const socket = io("http://localhost:5000");
const IndividualSupport = () => {
    const {user,role} = useContext(AuthContext)
    const [messages, setMessages] = useState([]);
    const [customerEmail,setCustomerEmail] = useState('');
    useEffect(() => {
     socket.on("messageTransfer", (message) => {
      console.log(message)
       if (message.to === user.email) {
         setMessages([...messages, message]);
       }
       else if(message.to === 'admin@gmail.com'){
        setCustomerEmail(message.sender);
        console.log(customerEmail)
       }
       else {
         setMessages([...messages, '']);
       }
     });
    }, [messages,user]);
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const message = event.target.message.value;
     
      const chatInfo = {
        senderEmail: user.email,
        senderImg: user.photoURL,
        senderName: user.displayName,
        receiverEmail: '',
        receiverImg: '',
        receiverName: '',
        message: message
      }
      if(role==='admin'){
        socket.emit("send message", { sender: user.email, to: 'akashchakrabortty2000@gmail.com', message });
      }
      else{
        socket.emit("send message", chatInfo);
      }
     
  
    };
    return (
        <div className="flex h-screen items-center">
      <div className=" w-full lg:w-1/2 mx-auto border-2 h-fit p-3 overflow-auto">
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message.message}</li>
          ))}
        </ul> 
        <div className="sent text-right">
          <div className="btn my-2 flex justify-end gap-2">
            <form className='' onSubmit={handleSubmit}>
              <input type="text" name="message" className="border-2 p-2" placeholder='Type here.....'/>
              <div className="mt-2">
              <button type="submit" className="border-2 p-2 rounded">
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