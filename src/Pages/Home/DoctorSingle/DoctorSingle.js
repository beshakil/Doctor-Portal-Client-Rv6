import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

const DoctorSingle = ({ OurDoctor }) => {
    const { name, email, image } = OurDoctor
    const element = <FontAwesomeIcon icon={faEnvelopeOpenText} />

    return (
        <Grid item xs={12} sm={6} md={4} sx={{ marginTop: 2 }}>
            <Paper elevation={3}>
                <Box sx={{ padding: 5 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={`data:image/png;base64,${image}`} alt="" style={{ width: '100%' }} />

                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#1F2F46', fontWeight: 600, mt: 2 }}> {name} </Typography>

                        <Typography variant="p" component="div" sx={{ flexGrow: 1, color: 'gray' }}>
                            <strong style={{ color: '#1CC7C1' }}>{element}</strong>  {email}</Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid >
    );
};

export default DoctorSingle;