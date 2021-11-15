import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space, price } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);


    return (
        <>
            <Grid item xs={12} sm={6} md={4}>

                <Paper elevation={3}>
                    <Box sx={{ padding: 5 }}>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#1CC7C1', fontWeight: 600 }}>
                            {name}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#394155', fontWeight: 500 }}>
                            {time}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'red' }}>
                            Price: ${price}
                        </Typography>
                        <Typography variant="p" component="div" sx={{ flexGrow: 1, color: 'gray' }}>
                            {space} SPACE AVAILABLE
                        </Typography>
                        <Button onClick={handleBookingOpen} variant="contained" style={{ marginTop: 10, backgroundColor: '#1CC7C1' }}>BOOK APPOINTMENT</Button>
                    </Box>
                </Paper>

            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;