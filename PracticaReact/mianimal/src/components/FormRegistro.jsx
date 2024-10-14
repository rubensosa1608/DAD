import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'

import { useState } from 'react'


function FormRegistro() {
  const [data, setData] = useState({name:'', breed:''})

  const handleSubmit = (e) => {
    e.preventDefault();
    let ultimaLetra = data.breed.charAt(data.breed.length - 1);

    if(ultimaLetra == "a"){
        alert("Tu mascota es una " + data.breed + " llamada " + data.name);
    }

    if(ultimaLetra == "o") {
        alert("Tu mascota es un " + data.breed + " llamado " + data.name);
    }
  }

  const handleChangeName = (e) =>{
    setData({
      ...data,
      name: e.target.value
    })
  }


  const handleChangeBreed = (e) =>{
    setData({
        ...data,
        breed: e.target.value
    })
  }

  return(
    <Container sx = {{marginTop: -15}}>

      <Paper elevation={10} square={true} sx={{textAlign:'center'}} >

        <Typography variant='h6' color='elige el color' sx={{mt:2, mb:2}}>Registra tu mascota</Typography>

        <Box
          component='form'
          onSubmit={handleSubmit}
        >

          <Grid container spacing={0}>
            <Grid size={6}>
              <TextField 
                required
                label='Nombre Mascota'
                variant='outlined'
                fullWidth
                value={data.name}
                onChange={handleChangeName}
                
              />

            </Grid>
            <Grid size = {6}>
              <TextField 
                  label='Raza'
                  variant='outlined'
                  fullWidth
                  value={data.breed}
                  onChange={handleChangeBreed}W
                  
              />   
            </Grid> 

            <Grid size={12}>
              <Button type='submit' variant='outlined' fullWidth>Registrar</Button>
            </Grid>   

          </Grid>

        </Box>

      </Paper>

      </Container>
    
  )

}
  
export default FormRegistro