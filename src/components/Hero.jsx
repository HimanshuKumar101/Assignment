

import React from 'react';
import NewsletterForm from './NewsletterForm';

const Hero = () => {
  return (
    <main className="flex items-center justify-center py-20 md:py-40 px-4 md:px-10">
      <div className="max-w-7xl w-full flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-7">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              World's first{' '}
              <span className="text-[#8eb486]">Green</span> AI
            </h1>
          </div>
          <div className="w-full max-w-[80%] md:max-w-[70%]">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;