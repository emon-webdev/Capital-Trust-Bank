import { Avatar } from '@chakra-ui/react';
import userEvent from '@testing-library/user-event';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const CustomerSupport = () => {
    const {user} = useContext(AuthContext);
    const [adminInfo,setAdminInfo] = useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/getAdminInfo')
        .then(res=> res.json())
        .then(data => setAdminInfo(data))
    },[])
    return (
        <div>
            <Link to={`/dashboard/CustomerSupport/admin`}>
            <div className=" lg:w-1/2 mx-auto my-2 flex gap-2 h-fit border-2 p-2">
            <div className="photo">
            <Avatar alt={adminInfo.name} src={adminInfo?.image} />
            </div>
            <div className="text">
            <p>{adminInfo.name}</p>
            </div>
           </div>
            </Link>


        </div>
    );
};

export default CustomerSupport;