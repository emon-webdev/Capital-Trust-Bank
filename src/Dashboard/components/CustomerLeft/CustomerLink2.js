import { Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import '../../../App.css';


import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomerLink2 = () => {
    const listItemData = [
        { label: "My Transaction", link: "/dashboard/myTransaction", icon: <AccountCircleOutlinedIcon /> },
        { label: "My Balance", link: "/dashboard/my-balance", icon: <StickyNote2OutlinedIcon /> },
        { label: "My Withdraw", link: "/dashboard/my-withdraw", icon: <AccessibilityNewOutlinedIcon /> },
        { label: "My Deposit", link: "/dashboard/my-deposit", icon: <AccountCircleOutlinedIcon />,},       
    ];
    return (
        <List>
            {listItemData.map((item, i) => (
                <Button
                    size='small'
                    key={i}>
                    <ListItem
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

export default CustomerLink2;