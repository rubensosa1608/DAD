
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import './App.css'


function Appgrid() {


  return (
    <>
    <Grid container spacing={3} direction={{xs: 'column', sm: 'row'}} sx={{ justifyContent: "center", alignItems: "center", minHeight: '100vh'}}>
    <Grid size={6}>
    <Button variant='contained'  fullWidth> 1 </Button>
    </Grid>
    <Grid size={4}>
    <Button variant='contained' fullWidth> 2 </Button>
    </Grid>
    <Grid size={2}>
    <Button variant='contained' fullWidth> 3 </Button>
    </Grid>
    </Grid>

    </>
  );
}

export default Appgrid