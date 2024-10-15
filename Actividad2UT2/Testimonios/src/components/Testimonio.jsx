import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import myFavouriteBorder from 'milibreria';
import myFavourite from 'milibreria';
import myButton from 'milibreria';
import rubenSR from 'milibreria';

const Testimonio = ({ nombre, imagen, alt, testimonio, puesto }) => {
    const [meGusta, setMeGusta] = useState(false);

    const manejarMeGusta = () => {
        setMeGusta(!meGusta);
    };

    return (
        <Card sx={{ maxWidth: 400, height: 360, margin: 1, boxShadow: 5 }}>

            <rubenSR 
            description={testimonio}
            />
            <CardContent>
                <IconButton onClick={manejarMeGusta}>
                    {meGusta ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                </IconButton>


                <myButton />
            </CardContent>


        </Card>

    );
};

export default Testimonio;