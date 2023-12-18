import { Box, Typography } from "@mui/material";

import React from 'react';
 
import styled from "@emotion/styled";
 
const StyleBox = styled(Box)({
    backgroundImage: `url(${"https://i.pinimg.com/originals/73/70/00/737000df4b8e04719d38b1b4537ebad2.jpg"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    height:"400px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity:"0.6"
});
 
const Heading = () => {
    return (
        <StyleBox>
           <Typography variant="h3"
           sx={{paddingBottom:"20px"}}>
           Home 19 Collection Featured Products
           </Typography>
           <Typography>
           Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos.
            Duis tristique del ante le maliquam praesent murna de tellus laoreet cosmopolis.
           </Typography>
        </StyleBox>
    );
};
 
export default Heading;
 
