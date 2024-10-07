import React from 'react';
import Testimonio from './components/Testimonio.jsx';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';


const App = () => {
    const testimonios = [
        {
            id: 1,
            nombre: 'Juan Pérez',
            testimonio: 'React ha mejorado mi forma de pensar y desarrollar interfaces.',
            imagen: '/juan.png',
            alt: 'Foto de Juan Pérez',
            puesto: 'Desarrollador Web'
        },
        {
            id: 2,
            nombre: 'Ana García',
            testimonio: 'Usar React ha hecho mi trabajo mucho más rapido y eficiente.',
            imagen: '/ana.png',
            alt: 'Foto de Ana García',
            puesto: 'Diseñadora Web'
        },
        {
            id: 3,
            nombre: 'Carlos López',
            testimonio: 'No puedo imaginarme usando otra librería que no sea React.',
            imagen: '/carlos.png',
            alt: 'Foto de Carlos López',
            puesto: 'Ingeniero de Software'
        },
        {
            id: 4,
            nombre: 'María Rodríguez',
            testimonio: 'React ha facilitado la creación de aplicaciones escalables.',
            imagen: '/maria.png',
            alt: 'Foto de María Rodríguez',
            puesto: 'Ingeniera de Software'
        }
    ];

    return (
      <Container>
      <Grid container spacing={4} justifyContent="center" alignItems="center" direction="column">
          {testimonios.map((t) => (
              <Grid item xs={12} key={t.id} display="flex" justifyContent="center">
                  <Testimonio
                      nombre={t.nombre}
                      testimonio={t.testimonio}
                      imagen={t.imagen}
                      alt={t.alt}
                      puesto={t.puesto}
                  />
              </Grid>
          ))}
      </Grid>
  </Container>
    );
};

export default App;
