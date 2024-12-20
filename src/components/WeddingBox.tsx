import React, { useEffect, useState } from "react";
import styles from "../styles/WeddingBox.module.css";
import weddingData from "../utils/wedding_box.json";

const WeddingBox: React.FC = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Wedding Box</h2>
        </div>
        <div className={styles.boxContainer}>
          {weddingData.map((item) => (
              <div className={styles.weddingBox}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <img src={item.qrCode} className={styles.qrCode}/>
                  <p>Ngân hàng: {item.bankName}</p>
                  <p>Tên tài khoản: {item.accountHolder}</p>
                  <p>Số tài khoản: {item.accountNumber}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingBox;
