import React from "react";
import timelineData from "../utils/timeline.json";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; 
import styles from "../styles/Timeline.module.css"; 

const WeddingTimeline = () => {
  return (
    <div className={styles.timelineSection}>
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h2>Our story</h2>
        </div>
        <VerticalTimeline lineColor="#f6e7d7">
          {timelineData.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f6e7d7",
                color: "#2c2c2c", 
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #f6e7d7", 
              }}
              date={event.time}
              iconStyle={{
                background: "#f18484", 
                color: "#fff",
                fontSize: "20px",
              }}
            >
              <h3 className="vertical-timeline-element-title">{event.title}</h3>
              <p>{event.description}</p>

            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WeddingTimeline;
