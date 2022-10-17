import React, { useEffect, useState } from 'react';
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import image4 from './img/image4.jpg';

function ExportTableToExcel(props) {
  const { id } = props;

  return (
    <div
      id={id}
      style={{
        fontSize: '13px',
        position: 'absolute',
        top: '-1000000px',
        overflow: 'hidden',
      }}
    >
      <img src={image1} alt="Logo" />
      {/* <img src={image2} alt="Logo" />
      <img src={image3} alt="Logo" />
      <img src={image4} alt="Logo" /> */}
    </div>
  );
}

export default ExportTableToExcel;
