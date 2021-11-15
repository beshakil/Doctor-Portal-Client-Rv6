import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import cover from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Banner = () => {

    const bg = {
        background: `url(${cover})`,
    }
    return (
        <Box sx={{ flexGrow: 1 }} style={bg}>
            <Container>
                <Grid container spacing={2} sx={{ mt: 0, paddingTop: 10, paddingBottom: 10 }}>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
                        <Box>
                            <Typography style={{ color: '#1F2F46', fontWeight: 500 }} variant="h3" component="div">
                                Your New Smile<br />
                                Starts Here
                            </Typography>
                            <Typography style={{ color: 'gray', marginTop: 20, fontSize: 14, fontWeight: 400, marginRight: 50 }} variant="p" component="div">
                                The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
                            </Typography>

                            <Link to="/appointment" style={{ textDecoration: 'none', color: 'white' }}><Button variant="contained" style={{ marginTop: 20, backgroundColor: '#1CC7C1' }}>GET APPOINTMENT</Button></Link>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            style={{ width: 500, height: 300 }}
                            src={chair} alt="" />
                    </Grid>

                </Grid>

            </Container >
        </Box>
    );
};
export default Banner;