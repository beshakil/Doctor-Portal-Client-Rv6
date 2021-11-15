import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PeopleOne from '../../../images/people-1.png'
import PeopleTwo from '../../../images/people-2.png'
import PeopleThree from '../../../images/people-3.png'
import BlogSingle from '../BlogSingle/BlogSingle';


const Blogs = () => {

    const OurBlogs = [
        {
            id: 1,
            name: 'Dr. Caudi',
            img: PeopleTwo,
            date: '23 April 2019',
            title: '2 times of brush in a day can keep you healthy',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'
        },
        {
            id: 2,
            name: 'Dr. John Mitchel',
            img: PeopleThree,
            date: '23 April 2019',
            title: '2 times of brush in a day can keep you healthy',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'
        },
        {
            id: 3,
            name: 'Dr. Caudi',
            img: PeopleOne,
            date: '23 April 2019',
            title: '2 times of brush in a day can keep you healthy',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'
        }
    ]


    return (
        <Container sx={{ marginTop: 5 }}>
            <Typography style={{ color: '#1CC7C1', fontWeight: 500, margin: '10px' }} variant="h6" component="div">
                OUR BLOGS
            </Typography>
            <Typography style={{ color: '#1F2F46', fontWeight: 500, margin: '10px' }} variant="h3" component="div">
                From Our Blog News
            </Typography>
            <Grid container spacing={2}>
                {
                    OurBlogs.map(OurBlog => <BlogSingle
                        key={OurBlog.id}
                        OurBlog={OurBlog}
                    ></BlogSingle>)
                }
            </Grid>
        </Container>
    );
};

export default Blogs;