import React from 'react';
import FeatureCard from './FeatureCard';
import { Leaf, Search, Lock, Minimize } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Leaf className="w-12 h-12 text-[#8eb486]" />,
      title: "Climate Driven",
      description: "We put the revenue earned to work with climate investments in renewables and plantation drives."
    },
    {
      icon: <Search className="w-12 h-12 text-[#8eb486]" />,
      title: "Optimized Search",
      description: "We provide quality search results, reducing energy consumption by 300%"
    },
    {
      icon: <Lock className="w-12 h-12 text-[#8eb486]" />,
      title: "Privacy First",
      description: "We don't collect or store any data. We are privacy focused ai search engine."
    },
    {
      icon: <Minimize className="w-12 h-12 text-[#8eb486]" />,
      title: "Minimal Design",
      description: "Our Design System is minimal to reduce the carbon footprints with user interaction."
    }
  ];

  return (
    <section className="py-20 md:py-40 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="w-200 mx-50 text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-20">
          Build sustainable system's with your search
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;