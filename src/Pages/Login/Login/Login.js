import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import loginCover from '../../../images/login.png'
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2} sx={{ mt: 0, paddingTop: 5, paddingBottom: 5 }}>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>

                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Typography style={{ color: '#1F2F46', fontWeight: 500, textAlign: 'left', margin: '10px' }} variant="h6" component="div">
                                Login
                            </Typography> <br />
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '100%', m: 1, backgroundColor: 'white' }}
                                    label="Your Email"
                                    id="standard-basic"
                                    name="email"
                                    type="email"
                                    onChange={handleOnChange}
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: '100%', m: 1, backgroundColor: 'white' }}
                                    id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    variant="standard"
                                    autoComplete="current-password"
                                /> <br />
                                <br />

                                <Button type="submit" variant="contained" style={{ margin: 8, width: '100%', backgroundColor: '#1CC7C1' }}>Sign in</Button> <br />
                                <NavLink to="/register" style={{ textDecoration: 'none' }}><Button variant="text">New User? Please Click For Register</Button>
                                </NavLink>
                                {isLoading && <CircularProgress />}
                                {user?.email && <Alert severity="success">Successfully Login!</Alert>}
                                {authError && <Alert severity="error">{authError}</Alert>}
                            </form>
                            <p>-------- Sign In With Google ---------</p>
                            <Button onClick={handleGoogleSignIn} variant="contained" style={{ margin: 8, width: '100%', backgroundColor: '#1CC7C1' }}>Google Sign In</Button>
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
export default Login;