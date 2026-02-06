import React from "react";
import { Container, Grid } from "@mui/material";
import ResumePdf from "../components/ResumePdf";
import PaginationNav from "../components/PaginationNav";

const ResumePage = () => {
  return (
    <Container
      data-testid="resume-page"
      sx={{
        flex: 1,
        pt: { xs: 0.5, sm: 1, md: 1 },
        pb: { xs: 2, sm: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container justifyContent="center" sx={{ width: "100%" }}>
        <Grid item xs={12} md={10} lg={9} sx={{ width: "100%" }}>
          <ResumePdf />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Grid item>
          <PaginationNav />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResumePage;
