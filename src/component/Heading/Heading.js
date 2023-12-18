import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MyComponent = () => {
    const bgimg = process.env.PUBLIC_URL + '/path/to/background-image.jpg';


  return (
    <Box
      sx={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', 
      }}
    >
      <Typography variant="h4">Your Text Goes Here</Typography>
    </Box>
  );
};

export default MyComponent;
