import React from "react";
import { Container, Grid } from "@mui/material";
import ResumePdf from "../components/ResumePdf";
import PaginationNav from "../components/PaginationNav";

const ResumePage = () => {
  return (
    <>
      <Container
        data-testid="resume-page"
        sx={{
          flex: 1,
          pt: { xs: 0.5, sm: 1, md: 1 },
          pb: { xs: 2, sm: 2, md: 2 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container justifyContent="center" sx={{ width: "100%" }}>
          <Grid item xs={12} md={10} lg={9} sx={{ width: "100%" }}>
            <ResumePdf />
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

export default ResumePage;
