import Layout from '../components/layout';
import SlideShow from '../components/Slideshow';
import styles from '../styles/Home.module.css';
import VietnamMap from '@/components/Map';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
      <main>
        <VietnamMap />
      </main>
    </div>
    </Layout>
  );
}