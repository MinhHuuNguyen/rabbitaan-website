import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Layout from '@/components/layout';
import Countdown from '@/components/Countdown';
import Wedding from '@/components/Wedding';
import Profile from '@/components/Profile';
import VietnamMap from '@/components/Map';
import WeddingGallery from '@/components/WeddingGallery';
import Timeline from '@/components/Timeline';
import WeddingGiftPage from '@/components/WeddingBox';
import Preloader from '@/components/Preloader'; 

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heartDrop';
      heart.innerHTML = '<i class="fa fa-heart text-red-500"></i>';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    const heartInterval = setInterval(createHeart, 1000);

    return () => clearInterval(heartInterval);
  }, []);

  return (
    <Layout>
      {loading && <Preloader />} {}
      <div className={styles.container}>
        <main
          className={`${
            loading ? 'opacity-0' : 'opacity-100'
          } ${loading ? 'translate-y-10' : 'translate-y-0'} transition-all duration-700 ease-out`} 
        >

          {/* Apply fade-in and slide-up effect */}
          <Countdown />
          <Profile />
          <VietnamMap />
          <Wedding />
          <WeddingGiftPage />
          <WeddingGallery />
          <Timeline />
        </main>
      </div>
    </Layout>
  );
}
