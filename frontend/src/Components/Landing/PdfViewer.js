// PdfViewer.js
import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div>
      <object
        data={pdfUrl}
        type="application/pdf"
        width="100%"
        height="800px"
      >
        <p>Sorry, your browser does not support embedded PDFs.</p>
      </object>
    </div>
  );
};

export default PdfViewer;