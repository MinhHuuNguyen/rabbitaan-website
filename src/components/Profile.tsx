import React, { useEffect, useState } from 'react';
import profile from '../utils/profile.json';
import Image from "next/image";

const Profile: React.FC = () => {
  return (
    <div id="couple" className="my-24 mx-5 w-full">
      <div className="max-w-screen-xl mx-auto px-4">
      <div className="mb-12 text-center">
          <h2 className="font-serif uppercase text-4xl text-[#6d4c41] mb-5">CHÚNG MÌNH</h2>
          {/* <p className="text-gray-600 text-base md:text-lg">We are so excited to share our special day with you!</p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.couples.map((profile, index) => (
            <div  key={index}
            className="h-auto md:h-[700px] rounded-lg relative">
              <div className="relative overflow-hidden group">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={400}
                  height={556}
                  className="w-full h-[400px] md:h-[556px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="mt-6 mb-6">
                <p className="">{profile.name}</p>
                <p className="">Con ông {profile.father}</p>
                <p className="">Con bà {profile.mother}</p>
                <p className="">Tư gia: {profile.address}</p>
                <p className="">{profile.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;