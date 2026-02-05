import React from 'react';
import Button from '@mui/material/Button';
import resumePdf from '../images/Charly_Gibbons_Resume.pdf';

export default function ResumePdf({ onBack }) {
  return (
    <div>
      <Button variant="outlined" onClick={onBack}>
        Back
      </Button>
      <div>
        <a href={resumePdf} target="_blank" rel="noopener noreferrer">
          View Resume (PDF)
        </a>
      </div>
    </div>
  );
}
