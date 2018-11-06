import React from 'react';
import './styles.css';


const Dates = ({
  dayweek, month, day, ident, clicker, specClass,
}) => (
  <div>
    <ul className={`list-box ${specClass}`} id={ident}>
      <li className="week-day" onClick={clicker}>{dayweek}</li>
      <li className="month-highlight" onClick={clicker}>{month}</li>
      <li className="day-highlight" onClick={clicker}>{day}</li>
    </ul>
  </div>
);

export default Dates;
