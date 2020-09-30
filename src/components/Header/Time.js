import React, { useState, useEffect } from 'react';
import { getTime } from '../../helpers';
import './index.scss';

const Time = () => {
  const [date, setDate] = useState(new Date);
  useEffect(() => {
    const interval = setInterval(() => setDate(new Date), 250);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="Header__Time">{getTime(date)}</div>
  );
};

export default Time;
