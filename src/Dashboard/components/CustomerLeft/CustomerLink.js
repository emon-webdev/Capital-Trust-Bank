import { Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import logo from '../../../assets/logo/mainlogo.png';
import '../../../App.css';



import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const CustomerLink = () => {
    const listItemData = [
        { label: "My Transaction", link: "/dashboard/myTransaction", icon: <AccountCircleOutlinedIcon /> },
        { label: "My Balance", link: "/dashboard/my-balance", icon: <StickyNote2OutlinedIcon /> },
        { label: "My Withdraw", link: "/dashboard/my-withdraw", icon: <AccessibilityNewOutlinedIcon /> },
        { label: "My Deposit", link: "/dashboard/my-deposit", icon: <AccountCircleOutlinedIcon />, },
    ];
    return (
        <List>
           <ListItem>
           <Link
                className="navbar-brand font-bold text-2xl flex items-center"
                to="/"
            >
                <img src={logo} alt="" srcSet="" />
                <span className="font-bold text-[32px] ml-1 text-[#fff]">
                    C<span className=" text-[#DF0303]">T</span>B
                </span>
            </Link>
           </ListItem>
            {listItemData.map((item, i) => (
                <Button
                    size='small'
                    key={i}>
                    <ListItem
                    className='active:text-[#DF0303]'
                        component={NavLink}
                        to={item.link}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.label}</ListItemText>
                    </ListItem>
                </Button>
            ))}
        </List>
    );
};

export default CustomerLink;