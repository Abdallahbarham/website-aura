
import React from 'react';
import { Waves } from '../ui/waves-background';

interface ResourceHeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ResourceHero = ({
  title,
  description,
  imageUrl
}: ResourceHeroProps) => {
  return (
    <section className="pt-28 pb-12 bg-gradient-to-b from-rich-black to-charcoal-gray text-white my-0 py-0 rounded-none relative overflow-hidden">
      <div className="absolute inset-0">
        <Waves 
          lineColor="rgba(255, 255, 255, 0.2)"
          backgroundColor="transparent"
          waveSpeedX={0.015}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={15}
          yGap={36}
        />
      </div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg opacity-90">{description}</p>
          </div>
          <div className="hidden md:block">
            <img src={imageUrl} alt="Resources Hub" className="rounded-xl shadow-lg object-cover h-[300px] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceHero;
