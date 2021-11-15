import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import cover from '../../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${cover})`,
    backgroundColor: 'rgba(45, 58, 74, .8)',
    backgroundBlendMode: 'darken',
    marginTop: 150
}

const AppointmentBanner = () => {

    return (
        <>
            <Box style={appointmentBg} sx={{ flexGrow: 1, paddingLeft: '0px' }}>
                <Container style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                    <Grid container >
                        <Grid item xs={12} md={6} sx={{ marginBottom: '-4px' }}>
                            <img
                                style={{ width: 500, marginTop: '-130px' }}
                                src={doctor} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
                            <Box>
                                <Typography style={{ color: '#6ACFCF', fontWeight: 500 }} variant="h5" component="div">
                                    Appointment
                                </Typography>
                                <Typography style={{ color: 'white', marginTop: 20 }} variant="h3" component="div">
                                    Make An Appointment <br /> Today
                                </Typography>
                                <Typography style={{ color: 'white', marginTop: 20, fontSize: 14, fontWeight: 300, marginRight: 100 }} variant="p" component="div">
                                    The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
                                </Typography>
                                <Button variant="contained" style={{ marginTop: 20, backgroundColor: '#1CC7C1' }}>Learn More</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ >
    );
};

export default AppointmentBanner;