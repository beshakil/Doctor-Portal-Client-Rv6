import React from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Container, Typography } from '@mui/material';
import Booking from '../Booking/Booking';
import { useState } from 'react';

const bookings = [
    {
        id: 1,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
        price: 20
    },
    {
        id: 2,
        name: 'Pediatric Dental',
        time: '11.00 AM - 12.00 PM',
        space: 10,
        price: 30
    },
    {
        id: 3,
        name: 'Oral Surgery',
        time: '11.00 AM - 12.00 PM',
        space: 10,
        price: 25
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 10,
        price: 15
    },
    {
        id: 5,
        name: 'Oral Surgery',
        time: '11.00 AM - 12.00 PM',
        space: 7,
        price: 10
    },
    {
        id: 6,
        name: 'Pediatric Dental',
        time: '11.00 AM - 12.00 PM',
        space: 3,
        price: 20
    },
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <div>
            <Container sx={{ paddingBottom: 10 }}>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#1CC7C1', fontWeight: 500, padding: 5 }}>
                    Available Appointments: {date.toDateString()}
                </Typography>
                {bookingSuccess && <Alert severity="success">Appointment Book Successfully</Alert>}


                <Grid container spacing={2}>
                    {
                        bookings.map(booking => <Booking
                            key={booking.id}
                            booking={booking}
                            date={date}
                            setBookingSuccess={setBookingSuccess}
                        ></Booking>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default AvailableAppointments;