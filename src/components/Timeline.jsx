import React from "react";
import "./Timeline.css";

const Timeline = ({ date, title, authorImg, icon, authorName, color }) => {
  //component to dynamically dispaly tasks and works 
  return (
    <div className="container">
      <div className="content">
        <p className="date left">{date}</p>
        <div className="timeline-circle" style={{ backgroundColor: color }}>
          <img src={icon} alt="" />
        </div>
        <div className="description">
          <div className="title">{title}</div>
          <div className="author">
            <div className="image">
              <img src={authorImg} alt="imgage of women" />
            </div>
            <div className="author-name">{authorName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
