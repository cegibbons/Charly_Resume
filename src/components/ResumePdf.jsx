import React from 'react';
import resumePdf from '../images/Charly_Gibbons_Resume.pdf';

export default function ResumePdf() {
  return (
    <div className="resume-pdf">
      <div className="resume-pdf-frame-wrap">
        <iframe title="Resume PDF" src={resumePdf} className="resume-pdf-frame" />
      </div>
    </div>
  );
}
