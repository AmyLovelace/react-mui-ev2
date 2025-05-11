import React, { forwardRef } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const lugaresComuna = [
  {
    titulo: 'Puente Cholchol',
    imagen: 'https://municholchol.cl/images/1200/14069582/PUENTE1.jpg',
  },
  {
    titulo: 'Municipalidad',
    imagen: 'https://municholchol.cl/images/1200/14633344/baseparabannercanaldeyoutube.png',
  },
  {
    titulo: 'Cruce en Balsa',
    imagen: 'https://municholchol.cl/images/792/14633362/cruce_en_balsa.jpg',
  },
  {
    titulo: 'Municipalidad vista aerea',
    imagen: 'https://municholchol.cl/images/1200/14052231/PLAZAYFRONTISMUNICIPALIDAD1.jpg',
  },
];

const ComunaSlider = forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{width:'100vw',maxWidth: '700px', minWidth: '200px', margin: '0 auto', padding: 4 }} ref={ref}>
      <Typography variant="h4" component="h2" gutterBottom align="center" fontWeight="bold">
        Conoce la comuna
      </Typography>
      <Slider {...settings}>
        {lugaresComuna.map((lugar, index) => (
          <Card key={index} >
            <CardMedia
              component="img"
              height="400"
              image={lugar.imagen}
              alt={lugar.titulo}
              sx={{ objectFit: 'fit' }}
            />
            <CardContent>
              <Typography variant="h6" component="div" align="center">
                {lugar.titulo}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
});

export default ComunaSlider;
