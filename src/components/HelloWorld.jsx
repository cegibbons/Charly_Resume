import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import CharlyPicture from './CharlyPicture';

const HelloWorld = () => {

  return (
    <Box 
      sx={{ 
        width: '100%', 
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <Grid 
          container 
          sx={{ 
            width: '100%', 
            maxWidth: 1200 
          }} 
          rowSpacing={1} 
          columnSpacing={{ 
            xs: 1, 
            sm: 2, 
            md: 3 }}>
          <Grid size={6}>
            <Typography
              variant="h2"
              data-testid="hello-header"
              style={{
                fontFamily: 'minion-pro, serif',
                fontSize: '22px',
                fontWeight: 'bold',
              }}
            >
              Hello, I'm Charly Gibbons.
            </Typography>
                 <Typography
              variant="h2"
              style={{ fontFamily: 'minion-pro, serif', fontSize: '18px', marginTop: '10px' }}
            >
              I am a Results-driven Front-End Developer skilled in building responsive,
              user-centric web applications using modern frameworks and design principles.
              Experienced in optimizing performance, enhancing accessibility,
              and collaborating across teams to deliver engaging digital experiences.
              Passionate about creating intuitive interfaces and continuously learning new technologies.
            </Typography>
          </Grid>
          <Grid size={6}>
            <CharlyPicture />
          </Grid>
        </Grid>
      </Box>
  );
}

export default HelloWorld;