import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <div className="relative">
        {icon}
        <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-full h-1 bg-[#8eb486] rounded-full skew-x-12 -skew-y-2" />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className=" text-gray-500 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;