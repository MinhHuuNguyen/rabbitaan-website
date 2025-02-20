import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import styles from "../styles/Wedding.module.css";
import eventsData from "../utils/our_wedding.json";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Stack } from "@mui/material";
import textStyles from "../styles/Text.module.css";

type Event = {
  image: string;
  title: string;
  card: string;
  location: string;
  address: string;
  time: string;
  day: string;
  mapLink: string;
};

Modal.setAppElement("#__next");

const OurWedding: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [currentMapLink, setCurrentMapLink] = useState("");
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState("");

  useEffect(() => {
    setEvents(eventsData.events);
  }, []);

  const handleOpenMapModal = (mapLink: string) => {
    setCurrentMapLink(mapLink);
    setIsMapModalOpen(true);
  };

  const handleCloseMapModal = () => {
    setIsMapModalOpen(false);
    setCurrentMapLink("");
  };

  const handleOpenCardModal = (card: string) => {
    setCurrentCard(card);
    setIsCardModalOpen(true);
  }

  const handleCloseCardModal = () => {
    setIsCardModalOpen(false);
    setCurrentCard("");
  }

  return (
    <div
      id="wedding"
      className="relative w-full h-[90vh] md:h-full"
    >
      <div className={`${textStyles.title}`}>Lịch trình đám cưới...</div>
      <div className="justify-center relative items-center">
        <div className="swiper-button-prev">
          <i className="ri-arrow-right-s-line"></i>
        </div>
        <div className="swiper-button-next">
          <i className="ri-arrow-left-s-line"></i>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
            1530: { slidesPerView: 4 },
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <Stack
                className="w-full h-auto"
                sx={{
                  borderRadius: "30px",
                  backgroundColor: "rgba(217, 158, 158, 0.23)",
                }}
              >
                <Stack
                  className="overflow-hidden group"
                  sx={{ borderRadius: "30px" }}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={0}
                    height={0}
                    layout="responsive"
                    quality={100}
                    style={{ minHeight: "59vh", maxHeight: "59vh" }}
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </Stack>
                <div className="p-1">
                  <p
                    className={`${textStyles.sub1} ${textStyles.wedding} text-center`}
                  >
                    {event.title}
                  </p>
                  <div className="flex">
                    <div className="w-1/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                      </svg>
                    </div>
                    <div className="w-7/8">
                      <p className={`${textStyles.sub2} text-justify`}>
                        {event.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="w-7/8">
                      <p className={`${textStyles.sub2} text-justify`}>
                        {event.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="w-7/8">
                      <p className={`${textStyles.sub2} text-justify`}>
                        {event.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                      </svg>
                    </div>
                    <div className="w-7/8">
                      <p className={`${textStyles.sub2} text-justify`}>
                        {event.day}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleOpenMapModal(event.mapLink)}
                      className="flex border-2 border-red-300 rounded-full hover:bg-red-300/[0.877] hover:text-white transition pt-2 pl-4 pr-4"
                    >
                      <div className="w-1/8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            d="M3 3 L9 5 L15 3 L21 5 V19 L15 17 L9 19 L3 17 Z"
                            fill="#E6E6E6"
                          />
                          <path d="M9 5 L9 19 M15 3 L15 17" />
                          <circle cx="12" cy="10" r="2" fill="currentColor" />
                          <path
                            d="M12 12 C10 14 12 17 12 17 C12 17 14 14 12 12 Z"
                            fill="#FF6F61"
                          />
                        </svg>
                      </div>
                      <div className="w-7/8">
                        <p className={`${textStyles.sub2} text-justify`}>
                          Xem bản đồ
                        </p>
                      </div>
                    </button>
                    {event.card && event.card.trim() !== "" && (
                      <button
                        onClick={() => handleOpenCardModal(event.card)}
                        className="flex border-2 border-red-300 rounded-full hover:bg-red-300/[0.877] hover:text-white transition pt-2 pl-4 pr-4"
                      >
                        <div className="w-1/8">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2H3V4zm0 4h18v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8zm3 2v2h12v-2H6z" />
                          </svg>
                        </div>
                        <div className="w-7/8">
                          <p className={`${textStyles.sub2} text-justify`}>
                            Xem thiệp cưới
                          </p>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal xem bản đồ */}
      <Modal
        isOpen={isMapModalOpen}
        onRequestClose={handleCloseMapModal}
        className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-9/12 p-3 bg-white rounded mx-auto my-auto"
        overlayClassName={styles.modalOverlay}
      >
        <button
          onClick={handleCloseMapModal}
          className="absolute top-[-1rem] right-[-1rem] w-6 h-6 flex items-center justify-center bg-black border-2 border-white-300 rounded-full shadow"
        >
          <XMarkIcon className="w-4 h-4 text-white" />
        </button>
        {currentMapLink && (
          <iframe
            src={currentMapLink}
            className="w-full h-[600px] md:h-[700px] lg:h-[800px] xl:h-[840px]"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </Modal>

      {/* Modal xem thiệp cưới */}
      <Modal
        isOpen={isCardModalOpen}
        onRequestClose={handleCloseCardModal}
        className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-9/12 p-3 bg-white rounded mx-auto my-auto"
        overlayClassName={styles.modalOverlay}
      >
        <button
          onClick={handleCloseCardModal}
          className="absolute top-[-1rem] right-[-1rem] w-6 h-6 flex items-center justify-center bg-black border-2 border-white-300 rounded-full shadow"
        >
          <XMarkIcon className="w-4 h-4 text-white" />
        </button>
        {currentCard && (
          <Image
            src={currentCard}
            alt="Thiệp cưới"
            width={0}
            height={0}
            layout="responsive"
            quality={100}
            style={{ maxHeight: "80vh", objectFit: "contain" }}
          />
        )}
      </Modal>
    </div>
  );
};

export default OurWedding;
