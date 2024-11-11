import Layout from '../components/layout';
import SlideShow from '../components/Slideshow';
import styles from '../styles/Home.module.css';

const images = [
  '/images/image3.jpg',
  '/images/image4.jpg'
];

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
      <main>
        <SlideShow images={images} />
      </main>
    </div>
    </Layout>
  );
}