import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PeopleOne from '../../../images/people-1.png'
import PeopleTwo from '../../../images/people-2.png'
import PeopleThree from '../../../images/people-3.png'
import TestimonialSingle from '../TestimonialSingle/TestimonialSingle';

const Testimonials = () => {

    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a normal distribution.",
            location: 'California',
            img: PeopleOne
        },
        {
            id: 2,
            name: 'Winson Herry',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a normal distribution.",
            location: 'California',
            img: PeopleTwo
        },
        {
            id: 3,
            name: 'Winson Herry',
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a normal distribution.",
            location: 'California',
            img: PeopleThree
        },

    ]
    return (
        <Container sx={{ marginTop: 10 }}>
            <Typography style={{ color: '#1CC7C1', fontWeight: 500, margin: '10px' }} variant="h6" component="div">
                TESTIMONIAL
            </Typography>
            <Typography style={{ color: '#1F2F46', fontWeight: 500, margin: '10px' }} variant="h3" component="div">
                What's Our Patients Says
            </Typography>
            <Grid container spacing={2}>
                {
                    reviews.map(review => <TestimonialSingle
                        key={review.id}
                        review={review}
                    ></TestimonialSingle>)
                }
            </Grid>
        </Container>
    );
};

export default Testimonials;