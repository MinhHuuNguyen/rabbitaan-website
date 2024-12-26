import React from 'react';

const Footer: React.FC = () => {

  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto text-center">
        {/* Circle Image with Decorative Border */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6">
          <img
            src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/473740TgN/meo-anh-long-ngan-british-shorthair-624958.jpg"
            className="w-full h-full rounded-full border-4 border-gray-300 shadow-lg object-cover"
          />
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
