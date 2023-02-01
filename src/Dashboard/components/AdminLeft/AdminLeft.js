import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CloudCircleOutlinedIcon from '@mui/icons-material/CloudCircleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../../../assets/logo/mainlogo.png';

const AdminLeft = () => {
   const [subMenu, setSubMenu] = useState(false);
  return (

    <>
    <div ClassName="text-white">
        <div className='text-white w-[70%] flex items-center justify-center py-[10px]'>
            <Link
                className="navbar-brand font-bold text-2xl flex items-center"
                to="/"
            >
                <img src={logo} alt="" srcSet="" />
                <span className="font-bold text-[32px] ml-1 text-[#fff]">
                    C<span className=" text-[#DF0303]">T</span>B
                </span>
            </Link>
        </div>

        {/* ---------LINK ------------- */}
        <div className='mt-[40px]'>
            <NavLink
                onClick={() => setSubMenu(!subMenu)}
                to='/dashboard/allCustomers'
                className={({ isActive }) =>
                    isActive ? 'border-l-2 link flex px-[20px] py-[15px]' : 'flex px-[20px] link py-[15px]'
                }
            >
                <span> <CloudCircleOutlinedIcon /></span>
                <span className='text-white ml-[10px]'>All Customers</span>
                <span className={`${subMenu ? 'rotate-180' : 'rotate-0'}`}><ExpandMoreIcon /></span>

            </NavLink>
            <div className={`${subMenu ? 'block' : 'hidden'} duration-500 transition-all flex flex-col px-[20px] py-[15px]`}>
                <NavLink
                    className='flex items-center link py-[10px] px-[5px] rounded-md'
                >
                    <span> <CloudCircleOutlinedIcon /></span>
                    <span className='text-white ml-[10px]'>SabMenu1</span>
                </NavLink>

                <NavLink
                    className='flex items-center link py-[10px] px-[5px] rounded-md'
                >
                    <span> <CloudCircleOutlinedIcon /></span>
                    <span className='text-white ml-[10px]'>SabMenu2</span>
                </NavLink>

                <NavLink
                    className='flex items-center link py-[10px] px-[5px] rounded-md'
                >
                    <span> <CloudCircleOutlinedIcon /></span>
                    <span className='text-white ml-[10px]'>SabMenu3</span>
                </NavLink>
            </div>


            <NavLink to='/dashboard/verificationRequest'
                className={({ isActive }) =>
                    isActive ? 'border-l-2 link flex px-[20px] py-[15px]' : 'flex px-[20px] link py-[15px]'
                }
            >
                <span> <CloudCircleOutlinedIcon /></span>
                <span className='text-white ml-[10px]'>Verification Request</span>
            </NavLink>


            <NavLink to='/dashboard/cardRequest'
                className={({ isActive }) =>
                    isActive ? 'border-l-2 link flex px-[20px] py-[15px]' : 'flex px-[20px] link py-[15px]'
                }
            >
                <span> <CloudCircleOutlinedIcon /></span>
                <span className='text-white ml-[10px]'>Card Request</span>
            </NavLink>


            <NavLink to='/dashboard/loanRequest'
                className={({ isActive }) =>
                    isActive ? 'border-l-2 link flex px-[20px] py-[15px]' : 'flex px-[20px] link py-[15px]'
                }
            >
                <span> <CloudCircleOutlinedIcon /></span>
                <span className='text-white ml-[10px]'>Loan Request</span>
            </NavLink>
        </div>
    </div>
</>
  );
};

export default AdminLeft;
