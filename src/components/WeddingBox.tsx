import React from "react";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { Stack } from "@mui/material";
import weddingData from "../utils/wedding_box.json";
import textStyles from '../styles/Text.module.css';

const WeddingBox: React.FC = () => {
  return (
    <div id="gifts" className="relative mx-auto mb-[10px] w-full md:h-full">
      <div className={`${textStyles.title}`}>Hòm mừng cưới...</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Stack key={weddingData[0].accountNumber} className="bg-white border-4 border-pink-200 p-8" sx={{ borderRadius: "40px" }}>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <p className={`${textStyles.sub1} text-left`}>{weddingData[0].title}</p>
              <p className={`${textStyles.sub2} text-left`}>Số tài khoản: {weddingData[0].accountNumber}</p>
              <p className={`${textStyles.sub2} text-left`}>Chủ tài khoản: {weddingData[0].accountName}</p>
              <p className={`${textStyles.sub2} text-left`}>Ngân hàng: {weddingData[0].bankName}</p>
            </div>
            <div className="col-span-2">
              <Image
                src={weddingData[0].qrCode}
                alt="QR Code"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                style={{ maxHeight: "30vh" }}
              />
            </div>
          </div>
        </Stack>
        <Stack key={weddingData[1].accountNumber} className="bg-white border-4 border-pink-200 p-8" sx={{ borderRadius: "40px" }}>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2">
              <Image
                src={weddingData[1].qrCode}
                alt="QR Code"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                style={{ maxHeight: "30vh" }}
                className=""
              />
            </div>
            <div className="col-span-3">
              <p className={`${textStyles.sub1} text-right`}>{weddingData[1].title}</p>
              <p className={`${textStyles.sub2} text-right`}>Số tài khoản: {weddingData[1].accountNumber}</p>
              <p className={`${textStyles.sub2} text-right`}>Chủ tài khoản: {weddingData[1].accountName}</p>
              <p className={`${textStyles.sub2} text-right`}>Ngân hàng: {weddingData[1].bankName}</p>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default WeddingBox;