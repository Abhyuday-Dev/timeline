import React from "react";
import Timeline from "../components/Timeline";
import timelineDataOne from "../assets/timelineDataOne";//data array
import timelineDataTwo from "../assets/timelinedataTwo";//data array
import "./TimelinePage.css";
import TimelineHeader from "../components/TimelineHeader";

const TimelinePage = () => {
  return (
    <div className="timeline">
      {/*Timeline header component*/}
      <TimelineHeader
        month="JUL"
        day="WED"
        color="rgba(63, 184, 131, 1)"
        date="30"
      />
      {/*component to display different tasks/works etc using resuable component
      and data being passed using map function */}
      {timelineDataOne.map((item) => (
        <Timeline
          key={item.id}
          title={item.title}
          authorImg={item.authorImg}
          authorName={item.author}
          date={item.date}
          icon={item.icon}
          color={item.color}
        />
      ))}
      <hr />
      <TimelineHeader
        month="JUL"
        day="WED"
        color="rgba(174, 175, 178, 1)"
        date="30"
      />
      {timelineDataTwo.map((item) => (
        <Timeline
          key={item.id}
          title={item.title}
          authorImg={item.authorImg}
          authorName={item.author}
          date={item.date}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default TimelinePage;
