import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.imageDivider} style={{ backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod/images/wedding-wishes-bride-and-groom-surrounded-by-their-friends-66abb2eac5cde.jpg?crop=1xw:0.8433521923620934xh;center,top)' }}>
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
