import React from "react";
import { Container, Grid, Box } from "@mui/material";
import ResumePdf from "../components/ResumePdf";
import PaginationNav from "../components/PaginationNav";

const ResumePage = () => {
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
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
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Grid container justifyContent="center" sx={{ width: "100%" }}>
            <Grid size={{ xs: 12, md: 10, lg: 9 }} sx={{ width: "100%" }}>
              <ResumePdf />
            </Grid>
          </Grid>
        </Box>
        <Grid container justifyContent="center" sx={{ mt: "auto", pt: { xs: 2, md: 3 } }}>
          <Grid size="auto">
            <PaginationNav />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ResumePage;
