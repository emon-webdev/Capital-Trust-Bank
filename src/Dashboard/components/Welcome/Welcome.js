import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const Welcome = () => {
    const [approve, setApprove] = useState(false);
  const {user,role} = useContext(AuthContext)
  useEffect(() => {
    fetch(
      `https://capital-trust-bank-server.vercel.app/bankAccounts/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.approve) {
         return setApprove(true);
        }
        setApprove(false);
      });
  }, [user]);

    return (
        <div>           
            <div className='flex items-center flex-col justify-center h-screen'>
                <div className='flex'>
                    <h1 className='text-[50px]'>Welc</h1>
                    <div className="w-[30px] h-[30px] border-2 border-dashed rounded-full animate-spin border-[#cf173c] mt-[25px]"></div>
                    <h1 className='text-[50px]'>me to </h1>
                </div>
            <h1 className=''>{user?.displayName} Dashboard</h1>
            {
                !approve && role==='customer' && <h2 className='text-2xl font-semibold my-2'>Wait for Admin Approval</h2>
            }
            </div>
        </div>
    );
};

export default Welcome;