import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import cover from '../../../images/bg.png'
import { Container, Typography } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';


const AppointmentHeader = ({ date, setDate }) => {


    const bg = {
        background: `url(${cover})`,
    }
    return (
        <Container sx={{ flexGrow: 1, marginTop: 5 }} style={bg}>
            <Grid container spacing={2} sx={{ mt: 0 }}>

                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box>
                        <Typography style={{ color: '#1F2F46', marginBottom: '20px', fontWeight: 500, textAlign: 'left' }} variant="h4" component="div">
                            Appointment
                        </Typography>
                        <Calendar sx={{}} date={date} setDate={setDate}></Calendar>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        style={{ width: 500, height: 300, padding: 50 }}
                        src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};
export default AppointmentHeader;