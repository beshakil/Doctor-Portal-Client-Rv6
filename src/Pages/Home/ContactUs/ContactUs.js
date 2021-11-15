import React from 'react';
import Box from '@mui/material/Box';
import cover from '../../../images/appointment-bg.png'
import { Button, Container, TextField, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${cover})`,
    backgroundColor: 'rgba(45, 58, 74, .8)',
    backgroundBlendMode: 'darken',
    marginTop: 100
}

const ContactUs = () => {
    const handleBookingSubmit = e => {
        alert('submitting')
        e.preventDefault();
    }

    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1, paddingLeft: '0px' }}>
            <Container style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <Box container sx={{ textAlign: 'center', pt: 5, pb: 5 }}>
                    <Typography style={{ color: '#1CC7C1', fontWeight: 500, margin: '10px' }} variant="h6" component="div">
                        CONTACT US
                    </Typography>
                    <Typography style={{ color: 'white', fontWeight: 500, margin: '10px' }} variant="h3" component="div">
                        Always Contact With Us
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleBookingSubmit}>
                            <TextField
                                sx={{ width: '50%', m: 1, backgroundColor: 'white' }}
                                id="outlined-size-small"
                                placeholder="Your Name"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '50%', m: 1, backgroundColor: 'white' }}
                                id="outlined-size-small"
                                placeholder="Your Email"
                                size="small"
                            /> <br />
                            <TextField
                                sx={{ width: '50%', m: 1, backgroundColor: 'white' }}
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                placeholder="Your Message"
                            />
                            <br />

                            <Button type="submit" variant="contained" style={{ marginTop: 10, backgroundColor: '#1CC7C1' }}>Submit</Button>
                        </form>

                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactUs;