import React, { useState, useEffect, useRef } from "react";
import timelineData from "../utils/timeline.json";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { throttle } from "lodash";

const WeddingTimeline = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineData.length > 0 && timelineData[0].image) {
      setBackgroundImage(timelineData[0].image);
    }
  }, []);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      setCurrentEventIndex((prevIndex) => {
        const newIndex = Math.min(prevIndex + 1, timelineData.length - 1);
        setBackgroundImage(timelineData[newIndex].image);
        return newIndex;
      });
    } else if (e.deltaY < 0) {
      setCurrentEventIndex((prevIndex) => {
        const newIndex = Math.max(prevIndex - 1, 0);
        setBackgroundImage(timelineData[newIndex].image);
        return newIndex;
      });
    }
  };

  const throttledHandleWheel = throttle(handleWheel, 500);

  return (
    <div id="story" className="my-20 w-full">
      <div className="text-center mb-12">
        <h2 className="font-bold">Chuyện tình yêu</h2>
      </div>
      <div
        ref={containerRef}
        onWheel={throttledHandleWheel}
        className="py-12 overflow-y-auto h-screen relative"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
          transition: "background-image 1s ease-in-out",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto px-4 relative z-10">
          <VerticalTimeline lineColor="#f6e7d7">
            {timelineData.map((event, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work transition-opacity duration-500"
                contentStyle={{
                  background: "#f6e7d7",
                  color: "#2c2c2c",
                  borderRadius: "10px",
                  height: "auto",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  opacity: index === currentEventIndex ? 1 : 0.5,
                  filter: index === currentEventIndex ? "brightness(1)" : "brightness(0.5)",
                  transition: "opacity 0.5s ease, filter 0.5s ease",
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
                <div>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="mt-2">{event.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default WeddingTimeline;
