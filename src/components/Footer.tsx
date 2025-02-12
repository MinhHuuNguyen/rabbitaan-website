import React from 'react';
import Image from "next/image";

const Footer: React.FC = () => {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen  border-opacity-30 border-black">
        <div className="relative w-96 h-96 mb-20">
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-opacity-30 border-black">
            <Image 
              src="/images/flower.png"
              alt="Thank you"
              fill
              objectFit="cover"
            />
          </div>
        </div>

        {/* Thank You Text */}
        <h2 className="font-bold font-great-vibes text-8xl text-black">Thank you!</h2>
      </div>
  );
};

export default Footer;
