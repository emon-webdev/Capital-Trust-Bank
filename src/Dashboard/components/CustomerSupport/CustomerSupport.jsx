import { Avatar } from '@chakra-ui/react';
import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const CustomerSupport = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Link to={`/dashboard/CustomerSupport/admin`}>
            <div className=" lg:w-1/2 mx-auto my-2 flex gap-2 h-fit border-2 p-2">
            <div className="photo">
            <Avatar alt={user.displayName} src={user?.photoURL} />
            </div>
            <div className="text">
            <p>{user.displayName}</p>
                <p>Who are you?</p>
            </div>
           </div>
            </Link>


        </div>
    );
};

export default CustomerSupport;