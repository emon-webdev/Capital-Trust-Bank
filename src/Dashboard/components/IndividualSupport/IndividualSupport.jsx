import React from 'react';

const IndividualSupport = () => {
    return (
        <div className="flex h-screen items-center">
      <div className=" w-full lg:w-1/2 mx-auto border-2 h-fit p-3 overflow-auto">
        {/* <ul>
          {messages.map((message, index) => (
            <li key={index}>{message.message}</li>
          ))}
        </ul> */}
        <ul>
            <li>Akash</li>
        </ul>
        <div className="sent text-right">
          <div className="btn my-2 flex justify-end gap-2">
            <form className=''>
             <div className=""></div>
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