import React, { useState, useEffect } from "react";
import timelineData from "../utils/timeline.json";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useInView } from "react-intersection-observer";
import "react-vertical-timeline-component/style.min.css";
import Modal from "react-modal";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


const WeddingTimeline = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <div id="story" className="my-20 w-full">
      <div className="text-center mb-12">
        <h2 className="font-bold">Chuyện tình yêu</h2>
      </div>
      <div className="mx-auto px-8">
        <VerticalTimeline lineColor="#f6e7d7" animate={true}>
          {timelineData.map((event, index) => {
            const { ref, inView } = useInView({
              threshold: 0.5,
              triggerOnce: false,
            });
            return (
              <VerticalTimelineElement
                key={index}
                className={`${inView ? "animate-fade-in" : "opacity-0"}`}
                contentStyle={{
                  background: "#f6e7d7",
                  color: "#2c2c2c",
                  borderRadius: "10px",
                  height: "auto",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
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
                <div
                  ref={ref}
                  className="flex gap-4"
                  style={{
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  }}
                >
                  <div className="relative group ">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-96 h-40 rounded-lg object-cover shadow-md cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-black rounded-lg  bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"  onClick={() => openModal(event.image)}>
                      <MagnifyingGlassIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <p className="mt-2">{event.description}</p>
                  </div>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 p-3 bg-white rounded mx-auto my-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
      >
        <button
          onClick={closeModal}
          className="absolute top-[-1rem] right-[-1rem] w-6 h-6 flex items-center justify-center bg-black border-2 border-white rounded-full shadow"
        >
          <XMarkIcon className="w-4 h-4 text-white" />
        </button>

        {selectedImage && (
          <img
            src={selectedImage}
            alt="Timeline Event"
            className="w-full max-h-[80vh] object-cover"
          />
        )}
      </Modal>
    </div>
  );
};

export default WeddingTimeline;
