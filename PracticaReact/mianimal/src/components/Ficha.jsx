import { useState } from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Ficha({animal, atribute, imageUrl, imageSize, description}) {
  const [count, setCount] = useState(0)
  const animals = [{
    id: 0,
    animal: 'capibara',
    atribute: 'sensible',
    imageUrl: '../public/capibara.png',
    imageSize: 150,
    description: 'Capibara rara',
  },
  {
    id: 1,
    animal: 'Perro',
    atribute: 'bello',
    imageUrl: '../public/perro.png',
    imageSize: 150,
    description: 'Perro callejero',
  },
  {
    id: 2,
    animal: 'Gato',
    atribute: 'lindo',
    imageUrl: '../public/gato.png',
    imageSize: 150,
    description: 'Gato casero',
  },
  {
    id: 3,
    animal: 'Oveja',
    atribute: 'bello',
    imageUrl: '../public/oveja.png',
    imageSize: 150,
    description: 'Oveja de granja',
  }]


  return (
    <>
      <Stack 
         direction={{ xs: 'column', sm: 'column' }}
         spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{
          marginTop: -13,
          justifyContent: "center", 
          alignItems: "center", 
          minHeight: '100vh'  // Esto asegura que ocupe toda la pantalla
        }}
      >
        <Avatar src={imageUrl} sx={{ width: imageSize, height: imageSize }} />
        <Typography variant="h4" component="h2">Hola, soy yo, {animal}. y soy {atribute}:</Typography>
        <Typography variant="h6" component="h2">{description}</Typography>
        <Button sx={{marginTop: 5}} variant='contained' onClick={() => setCount(count + 1)} size="large" color="secondary">Me has hecho: {count} rascaditas</Button>
      </Stack>

      
    </>
  );
}

export default Ficha
