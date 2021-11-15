import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TestimonialSingle = (props) => {
    const { name, description, location, img } = props.review
    return (

        <Grid item xs={12} sm={6} md={4} sx={{ marginTop: 5, marginBottom: 5 }}>

            <Paper elevation={3}>
                <Box sx={{ padding: 5 }}>
                    <Typography variant="p" component="div" sx={{ flexGrow: 1, color: '#394155', fontWeight: 400, textAlign: 'left' }}>
                        {description}
                    </Typography>

                    <Box sx={{ display: 'flex', marginTop: 3 }}>
                        <img src={img} alt="" />
                        <Box sx={{ marginLeft: 3, textAlign: 'left', marginTop: 2 }}>
                            <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#1CC7C1', fontWeight: 600 }}> {name} </Typography>

                            <Typography variant="p" component="div" sx={{ flexGrow: 1, color: 'gray' }}>
                                {location}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default TestimonialSingle;