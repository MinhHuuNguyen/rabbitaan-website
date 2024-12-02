import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import Countdown from '@/components/Countdown';
import Wedding from '@/components/Wedding';
import Profile from '@/components/Profile';
import VietnamMap from '@/components/Map';
import WeddingGallery from '@/components/WeddingGallery';
import Timeline from '@/components/Timeline';

export default function Home() {
  const weddingDate = new Date('2024-12-31T00:00:00');
  return (
    <Layout>
      <div className={styles.container}>
      <main>
      <Profile />
      <Timeline />
      <VietnamMap />
      <Wedding />
      <Countdown weddingDate={weddingDate} />
      <WeddingGallery />
      </main>
    </div>
    </Layout>
  );
}