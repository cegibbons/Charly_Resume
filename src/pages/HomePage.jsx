import React from "react";
import { Container, Grid } from "@mui/material";
import HelloWorld from "../components/HelloWorld";
import PaginationNav from "../components/PaginationNav";

const HomePage = () => {
  return (
    <>
      <Container
        data-testid="home-page"
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pb: { xs: 2, sm: 1, md: 2 },
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ maxWidth: 1200, width: "100%" }}
        >
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <HelloWorld />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 2, md: 3 }, mb: { xs: 2, md: 3 } }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <PaginationNav />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
