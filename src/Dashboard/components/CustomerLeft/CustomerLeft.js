import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DevicesIcon from '@mui/icons-material/Devices';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import { Button, Hidden, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../App.css';
import { AuthContext } from '../../../context/AuthProvider';
import CustomerLink from './CustomerLink';

const drawerWidth = 260;

const CustomerLeft = () => {
    const { mobileOpen, handleDrawerToggle } = useContext(AuthContext);
    const listItemData = [
      {
        label: "My Transaction",
        link: "/dashboard/myTransaction",
        icon: <AccountCircleOutlinedIcon />,
      },
      {
        label: "My Balance",
        link: "/dashboard/my-balance",
        icon: <StickyNote2OutlinedIcon />,
      },
      {
        label: "My Withdraw",
        link: "/dashboard/my-withdraw",
        icon: <AccessibilityNewOutlinedIcon />,
      },
      {
        label: "My Deposit",
        link: "/dashboard/my-deposit",
        icon: <AccountCircleOutlinedIcon />,
      },
      {
        label: "Device Activity",
        link: "/dashboard/deviceActivity",
        icon: <DevicesIcon />,
      },
    ];
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

            <Hidden implementation='css'>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        // display: { xs: 'block', sm: 'none' },

                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
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
                </Drawer>
            </Hidden>

            <Hidden implementation='css'>
                <Drawer
                    variant="permanent"
                    sx={{
                        // display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    <CustomerLink />
                </Drawer>
            </Hidden>
        </Box>
    );
};

export default CustomerLeft;