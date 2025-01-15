import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
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
    }, 1000);
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
          <Profile />
          <Timeline />
          <VietnamMap />
          <Wedding />
          <Countdown />
          <WeddingGallery />
          <WeddingGiftPage />
        </main>
      </div>
    </Layout>
  );
}
