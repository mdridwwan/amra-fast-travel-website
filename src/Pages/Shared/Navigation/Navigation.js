import { Typography, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut} =useAuth();
    return (
        <div>
            <nav style={{ background: '#024d1d', color: 'white'}} class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand text-light, fs-4" href="/home">Amra Fast</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink style={{textDecoration: 'none', fontSize: '20px', color: 'white'}} to="/home">  <a aria-current="/home">Home</a></NavLink>
                            </li>
                           
                        </ul>
                        <form class="d-flex">
                            {
                                user?.email?
                                    <div class="d-flex align-items-center">
                                        <NavLink style={{ textDecoration: 'none', fontSize: '20px', color: 'white', paddingRight: '20px' }} to="/myorders">My Orders</NavLink>
                                        <NavLink style={{ textDecoration: 'none', fontSize: '20px', color: 'white', paddingRight: '20px' }} to="/managesallorder">All Order</NavLink>
                                        <NavLink style={{ textDecoration: 'none', fontSize: '20px', color: 'white', paddingRight: '20px' }} to="/addservices">Add Service</NavLink>
                                        <Typography style={{marginRight: '20px'}}>
                                            <img width="40px" class="rounded-pill" src={user.photoURL} alt="" srcset="" />
                                        </Typography>
                                        <Typography style={{ textDecoration: 'none', fontSize: '15px', color: 'white', paddingRight: '15px', paddingTop: '5px' }}>{user.displayName}
                                        </Typography>
                                     
                                        <Button onClick={logOut} color="inherit">Logout</Button>
                                    </div>
                                :
                                <NavLink to="/login"> <button class="btn btn-outline-success" type="submit">Login</button></NavLink>
                            }      
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;