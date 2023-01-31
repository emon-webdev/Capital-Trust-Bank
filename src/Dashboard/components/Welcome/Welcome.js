import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const Welcome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>           
            <div className='flex items-center flex-col justify-center h-screen'>
                <div className='flex'>
                    <h1 className='text-white text-[50px]'>Welc</h1>
                    <div className="w-[30px] h-[30px] border-2 border-dashed rounded-full animate-spin border-[#cf173c] mt-[25px]"></div>
                    <h1 className='text-white text-[50px]'>me to </h1>
                </div>
                
                
            <h1 className='text-white'>{user?.displayName} Dashboard</h1>
            </div>
        </div>
    );
};

export default Welcome;