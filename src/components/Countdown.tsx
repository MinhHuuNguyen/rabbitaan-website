import { useEffect, useState } from 'react';
import styles from '../styles/Countdown.module.css';

interface CountdownProps {
  weddingDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ weddingDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const weddingTime = weddingDate.getTime();
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
  }, [weddingDate]);

  return (
    <div className={styles.countdownContainer}>
      <h2 className={styles.heading}>Counting</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
        aliquam nunc a pharetra.
      </p>
      <div className={styles.timeContainer}>
        <div className={styles.timeBox}>
          <span className={styles.time}>{timeLeft.days}</span>
          <span className={styles.label}>DAYS</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.time}>{timeLeft.hours}</span>
          <span className={styles.label}>HOURS</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.time}>{timeLeft.minutes}</span>
          <span className={styles.label}>MINUTES</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.time}>{timeLeft.seconds}</span>
          <span className={styles.label}>SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;