import React, { useState } from 'react';
import {TextField, Button, Radio, RadioGroup, FormControlLabel, FormLabel, Checkbox, Select, MenuItem, Rating, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Formulario = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  // Definir el estado inicial del formulario
  const [data, setData] = useState({
    name: '',
    surname: '',
    age: '',
    gender: '',
    language: '',
    rating: 0,
    termsAccepted: false,
  });

  // Manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  //Manejar dialogo.
  const handleClose = () => {
    setOpen(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  // Manejar la limpieza del formulario
  const handleClear = () => {
    setData({
      name: '',
      surname: '',
      age: '',
      gender: '',
      language: '',
      rating: 0,
      termsAccepted: false,
    });
  };

  const isTermsAccepted = () => {
    return (
      data.termsAccepted
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {/* Nombre */}
        <Grid item size={{ xs: 4, sm: 5}}>
          <TextField
            label="Nombre"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>

        {/* Apellidos */}
        <Grid item size={{ xs: 4, sm: 5}}>
          <TextField
            label="Apellidos"
            name="surname"
            value={data.surname}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>

        {/* Edad */}
        <Grid item size={{ xs: 4, sm: 2}}>
          <TextField
            label="Edad"
            name="age"
            type="number"
            value={data.age}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>

        {/* Género */}
        <Grid item size={{ xs: 6, sm: 6}}>
          <FormLabel component="legend">Género</FormLabel>
          <RadioGroup
            name="gender"
            value={data.gender}
            onChange={handleChange}
            row
          >
            <FormControlLabel required value="Masculino" control={<Radio />} label="Masculino" />
            <FormControlLabel required value="Femenino" control={<Radio />} label="Femenino" />
            <FormControlLabel required value="Otro" control={<Radio />} label="Otro" />
          </RadioGroup>
        </Grid>

        {/* Lenguaje de Programación Favorito (Select) */}
        <Grid item size={{ xs: 6, sm: 6}}>
          <FormLabel component="legend">Lenguaje de Programación Favorito</FormLabel>
          <Select
            name="language"
            value={data.language}
            onChange={handleChange}
            fullWidth
            required
          >
            <MenuItem value="javascript">JavaScript</MenuItem>
            <MenuItem value="python">Python</MenuItem>
            <MenuItem value="java">Java</MenuItem>
          </Select>
        </Grid>

        {/* Calificación */}
        <Grid item size={12}>
          <Typography component="legend">Califica tu experiencia</Typography>
          <Rating
            name="rating"
            value={data.rating}
            onChange={(e, value) => setData({ ...data, rating: value })}
          />
        </Grid>

        {/* Aceptar términos */}
        <Grid item size={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={data.termsAccepted}
                onChange={handleChange}
                name="termsAccepted"
              />
            }
            label="Acepto los términos y condiciones"
          />
        </Grid>

        {/* Botones */}
        <Grid item size={6}>
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={!isTermsAccepted()}>
            Enviar
          </Button>
        </Grid>
        <Grid item size={6}>
          <Button type="button" variant="outlined" color="secondary" onClick={handleClear} fullWidth>
            Limpiar
          </Button>
        </Grid>

         <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Confirmación"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          {"¿Estás seguro de mandar la encuesta?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            No
          </Button>
          <Button onClick={handleClose} autoFocus>
            Si
          </Button>
        </DialogActions>
      </Dialog>
      </Grid> 
    </form>
  );
};

export default Formulario;
