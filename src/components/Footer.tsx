import React from 'react';
import Image from "next/image";

const Footer: React.FC = () => {

  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto text-center">
        {/* Circle Image with Decorative Border */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6">
          <Image src="/images/LIN00151.JPG" alt='Thank you' width={400} height={300} layout="responsive"/>
          <div
            className="absolute inset-0 rounded-full border-8 border-opacity-30 border-white"
            aria-hidden="true"
          ></div>
        </div>

        {/* Thank You Text */}
        <h2 className="text-3xl font-bold text-gray-700 italic">Thank you!</h2>
      </div>
    </footer>
  );
};

export default Footer;
