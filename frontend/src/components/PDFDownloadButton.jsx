import React from "react";

const PDFDownloadButton = ({ file, label }) => {
  return (
    <a
      href={file}
      download
      className="px-8 py-3 bg-[#FFD700] text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition"
    >
      {label}
    </a>
  );
};

export default PDFDownloadButton;
