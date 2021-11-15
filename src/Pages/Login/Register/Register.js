import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import loginCover from '../../../images/login.png'
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const navigate = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did Not Match')
            return
        }
        registerUser(loginData.email, loginData.password, navigate, loginData.name);
        e.preventDefault();
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2} sx={{ mt: 0, paddingTop: 5, paddingBottom: 5 }}>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>

                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Typography style={{ color: '#1F2F46', fontWeight: 500, textAlign: 'left', margin: '10px' }} variant="h6" component="div">
                                Register User
                            </Typography> <br />
                            {!isLoading && <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '70%', m: 1, backgroundColor: 'white' }}
                                    label="Your Name"
                                    id="standard-basic"
                                    name="name"
                                    type="text"
                                    onChange={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '70%', m: 1, backgroundColor: 'white' }}
                                    label="Your Email"
                                    id="standard-basic"
                                    name="email"
                                    type="email"
                                    onChange={handleOnBlur}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '70%', m: 1, backgroundColor: 'white' }}
                                    id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnBlur}
                                    variant="standard"
                                    autoComplete="current-password"
                                />
                                <TextField
                                    sx={{ width: '70%', m: 1, backgroundColor: 'white' }}
                                    id="standard-basic"
                                    label="Re-type Your Password"
                                    type="password"
                                    name="password2"
                                    onChange={handleOnBlur}
                                    variant="standard"
                                    autoComplete="current-password"
                                />
                                <br />
                                <br />



                                <Button type="submit" variant="contained" style={{ margin: 8, width: '70%', backgroundColor: '#1CC7C1' }}>Register</Button>
                                <br />
                                <NavLink to="/login" style={{ textDecoration: 'none' }}><Button variant="text">Already Register? Please Login</Button>
                                </NavLink>
                            </form>}
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Your Account is a Successfully Created!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}

                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            style={{ width: 500 }}
                            src={loginCover} alt="" />
                    </Grid>

                </Grid>

            </Container >
        </Box>
    );
};
export default Register;