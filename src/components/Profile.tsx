import React, { useEffect, useState } from 'react';
import profile from '../utils/profile.json';

const Profile: React.FC = () => {
  return (
    <div id="couple" className="my-24 mx-5 w-full">
      <div className="max-w-screen-xl mx-auto px-4">
      <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">HAPPY COUPLE</h2>
          <p className="text-gray-600 text-base md:text-lg">We are so excited to share our special day with you!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.couples.map((profile, index) => (
            <div  key={index}
            className="h-auto md:h-[700px] rounded-lg relative">
              <div className="relative overflow-hidden group">
                <img src={profile.image} className="w-full h-[400px] md:h-[556px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <div className="text-white text-lg md:text-xl font-bold animate-fade-in">
                    {profile.name}
                  </div>
                </div>
              </div>
              <div className="mt-6 mb-6">
                <h2 className="text-sm md:text-base uppercase tracking-wide font-bold hover:text-[#f98d8a]">
                  <a>{profile.role}</a>
                </h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4">
                  {profile.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;