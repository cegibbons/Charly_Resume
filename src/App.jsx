import React from "react";
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";
import { Container, Grid, Pagination } from "@mui/material";

const App = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Container
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pb: { xs: 3, sm: 0, md: 3 },
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
      <Container sx={{ mt: "auto" }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid>
            <Pagination count={3} variant="outlined" shape="rounded" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
