
"use client"

import React from 'react';
import Image from 'next/image';

const sponsorLogos = [
  { id: 1, path: '/sponser/1.png' },
  { id: 2, path: '/sponser/2.png' },
  { id: 3, path: '/sponser/3.png' },
  { id: 4, path: '/sponser/4.png' },
  { id: 5, path: '/sponser/5.png' },
  { id: 6, path: '/sponser/6.png' },
];

export const SponsorScroll = () => {
  const displayLogos = [...sponsorLogos, ...sponsorLogos, ...sponsorLogos, ...sponsorLogos];

  return (
    <div className="flex overflow-hidden group select-none py-4">
      <div className="flex animate-marquee group-hover:pause-animation whitespace-nowrap items-center">
        {displayLogos.map((logo, i) => (
          <div key={`${logo.id}-${i}`} className="mx-6 md:mx-12 flex items-center justify-center transition-all duration-500 grayscale opacity-40 hover:grayscale-0 hover:opacity-100">
            <div className="relative h-12 w-24 md:h-16 md:w-32">
              <Image
                src={logo.path}
                alt={`Sponsor ${logo.id}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 96px, 128px"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
