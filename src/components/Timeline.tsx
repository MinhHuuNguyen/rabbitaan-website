import React, { useState, useEffect } from "react";
import timelineData from "../utils/timeline.json";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import textStyles from "../styles/Text.module.css";

const useTimelineInView = (
  index: number,
  setCurrentIndex: (index: number) => void
) => {
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
    <div id="story" className="my-20">
      <div className={`${textStyles.title} text-center mb-8`}>
        Chuyện tình yêu
      </div>

      {/* 1) LAYOUT PC */}
      <div className="hidden md:flex flex-row">
        <div className="md:w-1/3">
          {timelineData.map((event, index) => {
            /* eslint-disable-next-line react-hooks/rules-of-hooks */
            const ref = useTimelineInView(index, setCurrentIndex);
            return (
              <section
                key={index}
                ref={ref}
                className="h-screen flex flex-col justify-center text-center p-4"
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0.4,
                    x: currentIndex === index ? 0 : -30,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className={`${textStyles.sub1} mb-5`}>
                    {event.title}
                  </h3>
                  <p className={`${textStyles.sub2} mb-5`}>
                    {event.description}
                  </p>
                  <span className="text-sm text-gray-500">
                    {event.time}
                  </span>
                </motion.div>
              </section>
            );
          })}
        </div>

        <div className="md:w-2/3 sticky top-0 h-screen flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={timelineData[currentIndex].image}
              src={timelineData[currentIndex].image}
              alt={timelineData[currentIndex].title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* 2) LAYOUT MOBILE:*/}
      <div className="flex flex-col md:hidden">
        {timelineData.map((event, index) => (
          <section
            key={index}
            className="min-h-[500px] flex flex-col justify-center items-center mb-8"
          >
            <motion.img
              src={event.image}
              alt={event.title}
              className="w-full h-auto object-cover rounded-lg shadow-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            />
            <div className="text-center">
              <h3 className={`${textStyles.sub1} mb-3`}>
                {event.title}
              </h3>
              <p className={`${textStyles.sub2} mb-3`}>
                {event.description}
              </p>
              <span className="text-sm text-gray-500">
                {event.time}
              </span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default WeddingTimeline;
