import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const BlogSingle = (props) => {
    const { name, description, img, date, title } = props.OurBlog

    return (
        <Grid item xs={12} sm={6} md={4} sx={{ marginTop: 5, marginBottom: 5 }}>

            <Paper elevation={3}>
                <Box sx={{ padding: 5 }}>
                    <Box sx={{ display: 'flex' }}>
                        <img src={img} alt="" />
                        <Box sx={{ marginLeft: 3, textAlign: 'left', marginTop: 2 }}>
                            <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#1CC7C1', fontWeight: 600 }}> {name} </Typography>

                            <Typography variant="p" component="div" sx={{ flexGrow: 1, color: 'gray' }}>
                                {date}</Typography>
                        </Box>
                    </Box>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#394155', fontWeight: 600, textAlign: 'left', marginTop: '15px' }}>
                        {title}
                    </Typography>
                    <Typography variant="p" component="div" sx={{ flexGrow: 1, color: 'gray', fontWeight: 400, textAlign: 'left', marginTop: '15px' }}>
                        {description.slice(0, 101)}
                    </Typography>
                </Box>
            </Paper>

        </Grid>
    );
};

export default BlogSingle;