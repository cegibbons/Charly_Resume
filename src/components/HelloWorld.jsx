import React from 'react';
import { Typography } from '@mui/material';

export default function HelloWorld() {
  return (
    <>
    <Typography variant="h2" 
      data-testid="hello-header" 
      style={{ 
        fontFamily: 'minion-pro, serif', 
        fontSize: '22px', 
        fontWeight: 'bold' 
        }}
    >
      Hello, I'm Charly Gibbons.
    </Typography>
    <Typography variant="h2" style={{ fontFamily: 'minion-pro, serif', fontSize: '18px', marginTop: '10px' }}>
      I am a Results-driven Front-End Developer skilled in building responsive, 
      user-centric web applications using modern frameworks and design principles. 
      Experienced in optimizing performance, enhancing accessibility, 
      and collaborating across teams to deliver engaging digital experiences. 
      Passionate about creating intuitive interfaces and continuously learning new technologies. 
    </Typography></>
  );
}
