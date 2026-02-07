import React from 'react';
import resumePdf from '../images/Charly_Gibbons_Resume.pdf';

export default function ResumePdf() {
  // Fits the PDF to width and hides viewer chrome to reduce internal scrolling.
  const pdfUrl = `${resumePdf}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <div className="resume-pdf">
      <div className="resume-pdf-frame-wrap">
        <iframe title="Resume PDF" src={pdfUrl} className="resume-pdf-frame" />
      </div>
    </div>
  );
}
