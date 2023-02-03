import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const DeviceActivity = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [devicesInfo, setDevicesInfo] = useState([]);
  useEffect(() => {
    fetch(`https://capital-trust-bank-server.vercel.app/getDeviceInfo/${email}`)
      .then((res) => res.json())
      .then((data) => {
      setDevicesInfo(data);
      });
  }, [user]);
 
  return (
    <div className="my-2">
      <h2 className="text-center default-font">
        Total Login devices:{devicesInfo.length}
      </h2>
      {devicesInfo.map((deviceInfo) => {
        return (
          <div key={deviceInfo._id}>
            <div className="w-4/5 lg:w-1/2 mx-auto my-2 gap-2 p-2 rounded h-fit default-bg">
              <div className="info overflow-auto text-center">
                <p className="default-font">Browser: {deviceInfo.browser}</p>
                <p className="default-font">Os: {deviceInfo.os}</p>
                <p className="default-font">Date: {deviceInfo.date}</p>
                <button className="ring rounded p-2 m-2 hover:bg-red-600">
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeviceActivity;
