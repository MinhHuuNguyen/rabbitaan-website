import React, { useEffect, useState } from 'react';
import styles from '../styles/Profile.module.css';
import profile from '../utils/profile.json';

const Profile: React.FC = () => {
  return (
    <div className={styles.coupleProfile}>
      <h2 className={styles.title}>{profile.title}</h2>
      <p className={styles.description}>{profile.description}</p>
      <div className={styles.profileContainer}>
        {profile.couples.map((profile, index) => (
          <div key={index} className={styles.profileItem}>
            <img src={profile.image} className={styles.profileImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.profileRole}>{profile.role}</h3>
              <p className={styles.profileBio}>{profile.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;