import { useState } from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Ficha() {
  const [count, setCount] = useState(0)
  const datos = {
    animal: 'capibara',
    imageUrl: '../public/capibara.png',
    imageSize: 200,
  }

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
        <Avatar src={datos.imageUrl} sx={{ width: datos.imageSize, height: datos.imageSize }} />
        <Typography variant="h4" component="h2">Hola, soy yo, {datos.animal}. Eres un crack así que dale click anda:</Typography>
        <Button sx={{marginTop: 5}} variant='contained' onClick={() => setCount(count + 1)} size="large" color="secondary">Me has hecho: {count} rascaditas</Button>
      </Stack>
    </>
  );
}

export default Ficha
