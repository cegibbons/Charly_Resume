import React from "react";
import CharlyPic from "../images/charly-pic.png";
import Button from '@mui/material/Button';

const CharlyPicture = () => {
    return (
        <Button onClick={() => alert('Picture clicked!')}>
            <img 
                src={CharlyPic} 
                alt="Charly" 
            />
        </Button>
    );
};

export default CharlyPicture;