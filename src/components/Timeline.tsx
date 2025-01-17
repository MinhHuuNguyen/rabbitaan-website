import React, { useState, useEffect } from "react";
import timelineData from "../utils/timeline.json";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useInView } from "react-intersection-observer";
import "react-vertical-timeline-component/style.min.css";

const WeddingTimeline = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [currentEventIndex, setCurrentEventIndex] = useState(null);

  useEffect(() => {
    const firstEvent = timelineData[0];
    if (firstEvent && firstEvent.image) {
      setBackgroundImage(firstEvent.image);
    }
  }, []);

  const handleBackgroundChange = (newImage: any, index: any) => {
    if (newImage !== backgroundImage && currentEventIndex !== index) {
      setBackgroundImage(newImage);
      setCurrentEventIndex(index);
    }
  };

  return (
    <div id="story" className="my-20 w-full">
      <div className="text-center mb-12">
        <h2 className="font-bold">Chuyện tình yêu</h2>
      </div>
      <div
        className="py-12"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
          transition: "background-image 1s ease-in-out",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto px-4">
          <VerticalTimeline lineColor="#f6e7d7">
            {timelineData.map((event, index) => {
              const { ref, inView } = useInView({
                threshold: 1,
                triggerOnce: false,
              });

              useEffect(() => {
                if (inView) {
                  handleBackgroundChange(event.image, index);
                }
              }, [inView, event.image, index]);

              return (
                <VerticalTimelineElement
                  key={index}
                  className={`vertical-timeline-element--work ${inView ? "animate-fade-in" : "opacity-0"
                    }`}
                  contentStyle={{
                    background: "#f6e7d7",
                    color: "#2c2c2c",
                    borderRadius: "10px",
                    height: "auto",
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
                  <div ref={ref}>
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <p className="mt-2">{event.description}</p>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default WeddingTimeline;
