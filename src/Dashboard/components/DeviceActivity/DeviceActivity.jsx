import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useTitle from "../../../hooks/useTitle/useTitle";

const DeviceActivity = () => {
  useTitle("DeviceActivity")
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [devicesInfo, setDevicesInfo] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/getDeviceInfo/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setDevicesInfo(data);
      });
  }, [user]);

  return (
      <div className="mt-3">
        <h1 className="text-2xl font-semibold text-center my-2">Device Remaining: {3- devicesInfo.length}</h1>
        <table class="table-auto w-full text-center border-2 p-3">
          <thead className="border-2">
            <tr>
              <th>Browser</th>
                <th>OS</th>
                <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {devicesInfo.map((deviceInfo) => {
                return (
                  <tr key={deviceInfo._id} className="border-2 p-3">
                    <td>{deviceInfo.browser}</td>
                    <td>{deviceInfo.os}</td>
                    <td>{deviceInfo.date}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
  );
};

export default DeviceActivity;
