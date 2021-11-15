import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TreatmentImg from '../../../images/treatment.png'
import { Button, Container, Typography } from '@mui/material';

const Treatment = () => {

    return (
        <Container sx={{ flexGrow: 1, marginTop: '60px' }}>
            <Grid container spacing={2} sx={{ mt: 0 }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box>
                        <img
                            style={{ width: 500 }}
                            src={TreatmentImg} alt="" />

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', textAlign: 'left', marginTop: '30px' }}>
                    <Box>
                        <Typography style={{ color: '#1F2F46', fontWeight: 500 }} variant="h3" component="div">
                            Exceptional Dental<br />
                            Care, on Your Terms
                        </Typography>
                        <Typography style={{ color: 'gray', marginTop: 20, fontSize: 18, fontWeight: 400, marginRight: 50, lineHeight: '2' }} variant="p" component="div">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                        <Button variant="contained" style={{ marginTop: 20, backgroundColor: '#1CC7C1' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Treatment;