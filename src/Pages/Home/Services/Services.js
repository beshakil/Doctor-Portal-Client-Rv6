import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Typography from '@mui/material/Typography';

const services = [
    {
        id: 1,
        name: 'Fluoride Treatment',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: fluoride
    },
    {
        id: 2,
        name: 'Cavity Treatment',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: cavity
    },
    {
        id: 3,
        name: 'Whitening Treatment',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: whitening
    }
]


const Services = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: '#1CC7C1', mt: '30px' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2, color: '#1F2F46', mb: '60px' }} variant="h3" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;