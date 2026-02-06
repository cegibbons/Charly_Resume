import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import CharlyPicture from './CharlyPicture';

const HelloWorld = () => {

  return (
    <Box className="hello-world">
      <Grid
        container
        rowSpacing={1}
        className="hello-world-grid-container"
        data-testid="hello-world-grid-container"
      >
        <Grid
          size={{ xs: 12, md: 8 }}
          className="hello-world-grid"
          data-testid="hello-world-grid"
        >
          <Typography
            variant="h3"
            data-testid="hello-header"
            className="hello-world-header"
          >
            Hello, I'm Charly Gibbons.
          </Typography>
          <Typography
            variant="h5"
            className="hello-world-description"
            data-testid="hello-description"
          >
            I am a Results-driven Front-End Developer skilled in building
            responsive, user-centric web applications using modern frameworks
            and design principles. Experienced in optimizing performance,
            enhancing accessibility, and collaborating across teams to deliver
            engaging digital experiences. Passionate about creating intuitive
            interfaces and continuously learning new technologies.
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          className="hello-world-picture"
          data-testid="charly-picture"
        >
          <CharlyPicture />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HelloWorld;