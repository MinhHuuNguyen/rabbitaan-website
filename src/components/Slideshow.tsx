import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

interface SlideShowProps {
  images: string[];
}

const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="mySwiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          layout="fill"
          style={{ objectFit: 'cover' }}
        />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideShow;
