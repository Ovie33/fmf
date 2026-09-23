"use client";

import React from "react";
import Image from "next/image";

export function ValueProps() {
  const cards = [
    {
      img: "/images/fee.png",
      alt: "Reduced fees icon",
      title: "Reduced fees on your Investments",
    },
    {
      img: "/images/secure.png",
      alt: "Secure fund management icon",
      title: "Seamless and secure fund management",
    },
    {
      img: "/images/growth.png",
      alt: "Passive income growth icon",
      title: "Enjoy passive income from the comfort of your home",
    },
    {
      img: "/images/dollars.png",
      alt: "Quick transactions icon",
      title: "Quick and reliable transactions",
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-12 md:py-16 border-b border-[#27272a] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex h-44 flex-col rounded-xl border-2 border-[#27272a] bg-[#141414] hover:border-[#a500a3]/50 text-[#ededed] shadow-xl transition-all group"
            >
              <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6">
                <div className="relative h-16 w-16 group-hover:scale-110 transition-transform">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm font-semibold leading-snug">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
