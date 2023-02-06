import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import FilterCenterFocusOutlinedIcon from '@mui/icons-material/FilterCenterFocusOutlined';
import { Avatar, Hidden, IconButton, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo/mainlogo.png';
import { AuthContext } from '../../../context/AuthProvider';

const DashboardNavbar = () => {
    const { user, logOut, openSideNav, handleSideNave } = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate()
    const handleSignOut = () => {
        logOut()
            .then(() => { navigate('/') })
            .catch((error) => {
                console.log(error.message);

            });
    };

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1, background: '#041C51' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link
                            className="navbar-brand font-bold text-2xl flex items-center"
                            to="/"
                        >
                            <img src={logo} alt="" srcSet="" />
                            <span className="font-bold text-[32px] ml-1 text-[#fff]">
                                C<span className=" text-[#DF0303]">T</span>B
                            </span>
                        </Link>
                    </Typography>
                    {/* right side icons */}
                    <Box className='flex'>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>                        
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge color="error">
                                    <FilterCenterFocusOutlinedIcon />
                                </Badge>
                            </IconButton>                        
                        </Box>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <Avatar alt="Travis Howard" src={user?.photoURL} />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <Link onClick={handleSignOut}><MenuItem onClick={handleClose}>Logout</MenuItem></Link>
                        </Menu>
                    </Box>
                    <Hidden mdUp>
                        <IconButton onClick={handleSideNave}>
                            {
                                openSideNav ? <CloseOutlinedIcon /> : <DehazeOutlinedIcon />
                            }
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default DashboardNavbar;