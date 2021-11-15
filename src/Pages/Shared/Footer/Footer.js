import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import cover from '../../../images/footer-bg.png'
import { Container, List, ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const google = <FontAwesomeIcon icon={faGooglePlus} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />

    const bg = {
        background: `url(${cover})`,
    }
    return (
        <Box sx={{ flexGrow: 1, pt: '50px', pb: '50px' }} style={bg}>
            <Container>
                <Grid container columns={{ xs: 12, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={3} md={3}>
                        <List>
                            <ListItem> <Typography style={{ color: '#1CC7C1', fontWeight: 600, textAlign: 'left' }} variant="h6" component="div">
                                APPOINTMENT
                            </Typography> </ListItem>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Emergency Dental Care </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Check Up </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Treatment Of Professional Diseases </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Tooth Extraction </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Check Up </ListItem></Link>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <List>
                            <ListItem> <Typography style={{ color: '#1CC7C1', fontWeight: 600, textAlign: 'left' }} variant="h6" component="div">
                                SERVICES
                            </Typography> </ListItem>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Emergency Dental Care </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Check Up </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Treatment Of Professional Diseases </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Tooth Extraction </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Check Up </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Check Up </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Check Up </ListItem></Link>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <List>
                            <ListItem> <Typography style={{ color: '#1CC7C1', fontWeight: 600, textAlign: 'left' }} variant="h6" component="div">
                                ORAL HEALTH
                            </Typography> </ListItem>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Emergency Dental Care </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Check Up </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Treatment Of Professional Diseases </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Tooth Extraction </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Check Up </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Check Up </ListItem></Link>
                            <Link to="/#" style={{ textDecoration: 'none', color: 'gray' }}><ListItem> Check Up </ListItem></Link>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <List>
                            <ListItem> <Typography style={{ color: '#1CC7C1', fontWeight: 600, textAlign: 'left' }} variant="h6" component="div">
                                OUR ADDRESS
                            </Typography> </ListItem>
                            <ListItem style={{ color: 'gray' }}> NewYork, 321/8 Street Road, Hansbarg </ListItem>
                            <ListItem>
                                <span style={{ marginRight: '15px', padding: '0px' }}><Link to="/#" style={{ textDecoration: 'none', color: '#1CC7C1', fontSize: '40px' }}>{facebook}</Link></span>
                                <span style={{ marginRight: '15px', padding: '0px' }}><Link to="/#" style={{ textDecoration: 'none', color: '#1CC7C1', fontSize: '40px' }}>{google}</Link></span>
                                <span style={{ marginRight: '15px', padding: '0px' }}><Link to="/#" style={{ textDecoration: 'none', color: '#1CC7C1', fontSize: '40px' }}>{twitter}</Link></span>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default Footer;