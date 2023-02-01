import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo/mainlogo.png';
import { Avatar, Hidden, IconButton } from '@mui/material';
import { AuthContext } from '../../../context/AuthProvider';
import '../../../App.css'

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
        <Box sx={{ flexGrow: 1, background: 'linear-gradient(80deg, #000428, #004E92)' }}>
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
                    <Box>
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