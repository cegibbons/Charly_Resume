import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import PaginationNav from "../components/PaginationNav";

const AboutPage = () => {
  return (
    <Container
      data-testid="about-page"
      sx={{
        flex: 1,
        py: { xs: 2, sm: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container justifyContent="center" sx={{ width: "100%" }}>
        <Grid item xs={12} md={10} lg={8}>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Hello World
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: "auto", pt: { xs: 2, sm: 3 } }}>
        <Grid item>
          <PaginationNav />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
