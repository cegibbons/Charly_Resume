import React, { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import CharlyPicture from './components/CharlyPicture'
import ResumePdf from './components/ResumePdf'
import Button from '@mui/material/Button';
import resumePdf from './images/Charly_Gibbons_Resume.pdf'
import { Typography } from '@mui/material';

export default function App() {
  const [showResume, setShowResume] = useState(false);

  const handlePictureClick = () => {
    setShowResume(true);
    window.open(resumePdf, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div>
        {showResume ? (
          <ResumePdf onBack={() => setShowResume(false)} />
        ) : (
          <>
            <HelloWorld />
            <CharlyPicture />
          </>
        )}
      </div>
      <div>
        <Button variant="contained" onClick={handlePictureClick}>
         <Typography>Click to View Resume</Typography>
        </Button>
      </div>
    </>
  )
}
