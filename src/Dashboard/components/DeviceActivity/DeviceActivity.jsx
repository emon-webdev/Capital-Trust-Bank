import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const DeviceActivity = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [devicesInfo, setDevicesInfo] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/getDeviceInfo/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
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
            <div className="w-4/5 lg:w-1/2 mx-auto my-8 gap-2 py-8 rounded h-fit default-bg">
              <div className="info overflow-auto text-center">
                <p className="default-font text-2xl">Browser: {deviceInfo.browser}</p>
                <p className="default-font  text-2xl">Os: {deviceInfo.os}</p>
                <p className="default-font text-2xl">Date: {deviceInfo.data}</p>
                <button className="ring text-xl text-bold text-white rounded p-3 m-3 hover:bg-red-600">
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
