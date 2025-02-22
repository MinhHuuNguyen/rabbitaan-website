import React, { useState, useEffect } from "react";
import timelineData from "../utils/timeline.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import textStyles from '../styles/Text.module.css';

const useTimelineInView = (index: number, setCurrentIndex: (index: number) => void) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setCurrentIndex(index);
    }
  }, [inView, index, setCurrentIndex]);

  return ref;
};

const WeddingTimeline: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div id="story" className="my-20 md:w-[100wh]">
      <div className={`${textStyles.title}`}>Chuyện tình yêu</div>
      <div className="flex h-[400px] md:h-[600px] lg:h-[800px] 2xl:h-screen overflow-hidden snap-y snap-mandatory scroll-smooth overflow-y-auto">
        <div className="w-1/3 p-8">
          {timelineData.map((event, index) => {
              /* eslint-disable-next-line react-hooks/rules-of-hooks */
            const ref = useTimelineInView(index, setCurrentIndex);

            return (
              <motion.div
                key={index}
                ref={ref}
                className="flex flex-col justify-center text-center align-middle h-[400px] md:h-[600px] lg:h-[800px] 2xl:h-screen"
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0.4,
                  x: currentIndex === index ? 0 : -30,
                }}
                transition={{ duration: 0.5 }}
              >
                <h3 className={`${textStyles.sub1} mb-5`}>{event.title}</h3>
                <p className={`${textStyles.sub2} mb-5`}>{event.description}</p>
                <span className="text-sm text-gray-500">{event.time}</span>
              </motion.div>
            );
          })}
        </div>
        <div className="w-2/3 sticky top-0">
          <motion.img
            key={timelineData[currentIndex].image}
            src={timelineData[currentIndex].image}
            alt={timelineData[currentIndex].title}
            className="w-full h-full rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default WeddingTimeline;