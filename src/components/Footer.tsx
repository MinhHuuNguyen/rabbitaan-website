import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.imageDivider} style={{ backgroundImage: 'url(/images/image4.jpg)' }}>
        <div className={styles.dividerOverlay}></div>

        {/* Center Middle Alignment */}
        <div className={styles.alignment}>
          <div className={styles.vAlign}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.col}>
                  <div id="thank-you" className={styles.thankYou}>
                    <div id="thank" className={styles.animation}>Thank</div>
                    <div id="you" className={styles.animation}>You</div>
                  </div>
                  <h6 className={styles.animation}>ALBERT & EMILY</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
