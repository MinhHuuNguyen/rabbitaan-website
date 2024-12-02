import React, { useEffect, useState } from 'react';
import styles from '../styles/Profile.module.css';
import profile from '../utils/profile.json';

const Profile: React.FC = () => {
  return (
    <div className={styles.coupleProfile}>
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>HAPPY COUPLE</h2>
          <p className={styles.subtitle}>We are so excited to share our special day with you!</p>
        </div>
        <div className={styles.profileContainer}>
          {profile.couples.map((profile, index) => (
            <div key={index} className={styles.profileItem}>
              <div className={styles.photoItem}>
                <img src={profile.image} />
                <div className={styles.overplay}>
                  <div className={styles.overplayText}>{profile.name}</div>
                </div>
              </div>
              <div className={styles.coupleDes}>
                <h2 className={styles.profileRole}>
                  <a>{profile.role}</a>
                </h2>
                <p className={styles.profileBio}>{profile.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;