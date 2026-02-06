import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import CharlyPicture from './CharlyPicture';

const HelloWorld = () => {

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        p: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Grid
        container
        rowSpacing={1}
        sx={{ px: { xs: 1, sm: 2, md: 4 }, alignItems: "center" }}
        data-testid="hello-world-grid-container"
      >
        <Grid
          size={{ xs: 12, md: 8 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
          }}
          data-testid="hello-world-grid"
        >
          <Typography
            variant="h3"
            data-testid="hello-header"
            style={{
              fontFamily: "minion-pro, serif",
              // fontSize: "22px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Hello, I'm Charly Gibbons.
          </Typography>
          <Typography
            variant="h5"
            style={{
              fontFamily: "minion-pro, serif",
              // fontSize: "18px",
              marginTop: "16px",
              textAlign: "center",
            }}
            dada-testid="hello-description"
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
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            mt: { xs: 2, md: 0 },
          }}
          data-testid="charly-picture"
        >
          <CharlyPicture />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HelloWorld;