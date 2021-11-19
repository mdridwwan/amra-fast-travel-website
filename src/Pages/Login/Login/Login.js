import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../Images/login.jpg';

const Login = () => {
    const {user, signInWithGoogle, authError } = useAuth();
    console.log(user)
    const location = useLocation();
    const history = useHistory();

   

    const hanldeWithGoogle = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Typography class="shadow  fs-1 mt-5 py-3 text-primary fw-bolder rounded-pill" variant="h2">Please Login</Typography>
            <Grid container spacing={2}>
               
                <Grid sx={{ mt: 15 }} item xs={12} md={6}>
                    <form >
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            name="email"
                            
                        />

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            variant="standard"
                            name="password"
                            
                        />

                        <Button sx={{ width: "75%", m: 1 }} variant="contained" type="submit">Login</Button>

                        
                            <Button variant="text">New User? Please Register</Button>
                     
                    </form>
                    
                    <Button onClick={hanldeWithGoogle} sx={{ width: "75%", m: 1 }} variant="outlined" >Sign In With Google</Button>
                   
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;