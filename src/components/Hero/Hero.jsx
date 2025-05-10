import './Hero.css';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            className="hero"
            sx={{
                backgroundImage: `url('/src/assets/images/PUENTE1.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '800px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent={{md: 'left', sm: 'center', xs: 'center'}} alignItems="center">
                    <Grid item xs={12} md={6} justifyContent={'center'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Typography className='highlight-text' variant={!isMobile ? "h2" : "h3"} color="white" gutterBottom>
                            Municipalidad de Cholchol
                        </Typography>
                        <Typography variant={!isMobile ? "h5" : "h6"} color="white" paragraph>
                            Descubre cómo la tecnología transforma nuestra ciudad.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default Hero;