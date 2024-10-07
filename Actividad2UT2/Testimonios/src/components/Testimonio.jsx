import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Testimonio = ({ nombre, imagen, alt, testimonio, puesto }) => {
    const [meGusta, setMeGusta] = useState(false);

    const manejarMeGusta = () => {
        setMeGusta(!meGusta);
    };

    return (
        <Card sx={{ maxWidth: 400, height: 360, margin: 1, boxShadow: 5 }}>

            <CardMedia
                component="img"
                sx={{ height: 200 }}  
                image={imagen}
                alt={alt}
            />

            <CardContent>

                <Typography variant="h5" component="div" sx={{ marginBottom: 1}}>
                    {nombre}
                </Typography>
            
                <Typography variant="subtitle" component="div" sx={{ marginBottom: 1}}>
                    {puesto}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {testimonio}
                </Typography>

                <IconButton onClick={manejarMeGusta}>
                    {meGusta ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                </IconButton>
            </CardContent>


        </Card>

    );
};

export default Testimonio;