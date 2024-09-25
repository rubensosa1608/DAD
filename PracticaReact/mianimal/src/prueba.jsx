import { useState } from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './App.css'
import Typography from '@mui/material/Typography';

function App() {
  const [count, setCount] = useState(0)
  const datos = {
    animal: 'capibara',
    imageUrl: '../public/capibara.png',
    imageSize: 300,
  }

  return (
    <>
      <Stack 
        direction="column" 
        spacing={12} 
        sx={{
          justifyContent: "center", 
          alignItems: "center", 
          minHeight: '100vh'  // Esto asegura que ocupe toda la pantalla
        }}
      >
        <Avatar src={datos.imageUrl} sx={{ width: datos.imageSize, height: datos.imageSize }} />
        <Typography variant="h3" component="h2">Hola, soy yo, {datos.animal}. Eres un crack así que dale click anda:</Typography>
        <Button variant='contained' onClick={() => setCount(count + 1)} size="large" color="secondary">Me has hecho: {count} rascaditas</Button>
      </Stack>
    </>
  );
}

export default App
