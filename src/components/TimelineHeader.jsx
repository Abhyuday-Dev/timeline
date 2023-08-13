import React from "react";

const TimelineHeader = ({ month, day, color, date }) => {
  return (
    <div className="container">
      <div className="header-content">
        <p className="headerdate-left">
          <span
            style={{ fontWeight: "bold", fontSize: "16px", color: "black" }}
          >
            {day}
          </span>
          <span>{month}</span>
        </p>
        <div className="timeline-square" style={{ backgroundColor: color }}>
          {date}
        </div>
      </div>
    </div>
  );
};

export default TimelineHeader;
