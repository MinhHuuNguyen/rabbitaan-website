import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import weddingData from "../utils/wedding_box.json";

const WeddingBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [currentImage, setCurrentImage] = useState<string>(""); 

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  return (
    <div id="gifts" className="bg-floralwhite py-8 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-teal-800">Wedding Box</h2>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {weddingData.map((item) => (
            <div
              key={item.accountNumber}
              className="bg-white p-6 w-[410px] h-[436px] text-center border-2 border-pink-200 rounded-md relative"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h2>
              <img
                src={item.qrCode}
                alt="QR Code"
                className="w-40 h-40 object-contain mx-auto mb-4 cursor-pointer"
                onClick={() => openLightbox(item.qrCode)}
              />
              <p className="text-lg text-gray-700 mb-2">Ngân hàng: {item.bankName}</p>
              <p className="text-lg text-gray-700 mb-2">Tên tài khoản: {item.accountHolder}</p>
              <p className="text-lg text-gray-700">Số tài khoản: {item.accountNumber}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={[{ src: currentImage }]} 
        />
      )}
    </div>
  );
};

export default WeddingBox;
