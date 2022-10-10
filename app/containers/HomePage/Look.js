import React, { useEffect, useState } from 'react';

function Look() {
  const [timeString, setTimeString] = useState('');
  function formateDate() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formateDate(now);
      setTimeString(newTimeString);
    }, 1000);
    return () => {
      console.log('clearInterval');
      //clearn up
      clearInterval(clockInterval);
    };
  }, []);
  return <div style={{ fontSize: '42px' }}>{timeString}</div>;
}

export default Look;
