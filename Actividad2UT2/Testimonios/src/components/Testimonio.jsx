import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, IconButton } from '@mui/material';
import { RubenSR, MyButton, MyFavourite, MyFavouriteBorder } from 'milibreria';

//import {myButton} from 'milibreria';

const Testimonio = ({ nombre, imagen, testimonio, puesto, width, height, bgColor }) => {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);

    const handleToggle = () => {
        setLiked(!liked);
    };

    return (
        <Card sx={{ maxWidth: 600, height: 430, margin: 1, boxShadow: 5 }}>
            <RubenSR  
                description={testimonio}
                position={puesto}
                author={nombre}
                avatarUrl={imagen}
                width={width}
                height={height}
                bgColor={bgColor}
            />
            <CardContent>
                <MyButton
                    text={`Has clickado ${count} veces`} 
                    textColor={"lightskyblue"}
                    bgColor={"white"}
                    borderColor={"black"}
                    borderWidth={2}
                    size={"large"}
                    hoverTxtColor={"white"}
                    hoverBgColor={"lightskyblue"}
                    onClick={() => setCount(count + 1)}
                />

                <IconButton onClick={handleToggle}>
                    {liked ? (
                        <MyFavourite color="error" />
                    ) : (
                        <MyFavouriteBorder color="error" />
                    )}
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default Testimonio;
