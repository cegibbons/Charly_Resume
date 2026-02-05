import React, { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import resumePdf from './images/Charly_Gibbons_Resume.pdf'
import { Typography, Button, Grid, Container } from '@mui/material';

export default function App() {
  return (
      <div>
            <Header />
            <Container>
              <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                <Grid item xs={6}>
                  <HelloWorld />
                </Grid>
              </Grid>
            </Container>
      </div>
  )
}
