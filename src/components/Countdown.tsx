import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import banner from '../utils/banner.json'; // Import dữ liệu từ gallery.json

// Define wedding date to countdown
const WEDDING_DATE = new Date('2025-03-18T18:00:00');

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const weddingTime = WEDDING_DATE.getTime();
      const difference = weddingTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[830px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="absolute inset-0 swiper-container h-[915px] w-full"
      >
        {banner.images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h2 className="text-white font-bold mb-4">Counting</h2>
        <p className="text-lg text-white mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          aliquam nunc a pharetra.
        </p>
        <div className="flex justify-center gap-12">
          <div className="bg-red-300/[0.877] p-6 rounded-full w-24 h-24 flex flex-col items-center justify-center">
            <span className="text-2xl text-white font-bold">{timeLeft.days}</span>
            <span className="text-sm font-medium text-white">DAYS</span>
          </div>
          <div className="bg-red-300/[0.877] p-6 rounded-full w-24 h-24 flex flex-col items-center justify-center">
            <span className="text-2xl text-white font-bold">{timeLeft.hours}</span>
            <span className="text-sm font-medium text-white">HOURS</span>
          </div>
          <div className="bg-red-300/[0.877] p-6 rounded-full w-24 h-24 flex flex-col items-center justify-center">
            <span className="text-2xl text-white font-bold">{timeLeft.minutes}</span>
            <span className="text-sm font-medium text-white">MINUTES</span>
          </div>
          <div className="bg-red-300/[0.877] p-6 rounded-full w-24 h-24 flex flex-col items-center justify-center">
            <span className="text-2xl text-white font-bold">{timeLeft.seconds}</span>
            <span className="text-sm font-medium text-white">SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;