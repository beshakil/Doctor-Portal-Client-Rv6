import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DoctorSingle from '../DoctorSingle/DoctorSingle';


const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    const doctorSlice = doctors.slice(0, 3)

    useEffect(() => {
        fetch('https://nameless-hollows-88754.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <Container sx={{ marginTop: 5 }}>
            <Typography style={{ color: '#1CC7C1', fontWeight: 500, margin: '10px' }} variant="h6" component="div">
                OUR DOCTORS
            </Typography>
            <Grid container spacing={2}>
                {
                    doctorSlice.map(OurDoctor => <DoctorSingle
                        key={OurDoctor._id}
                        OurDoctor={OurDoctor}
                    ></DoctorSingle>)
                }
            </Grid>
        </Container>
    );
};

export default Doctors;