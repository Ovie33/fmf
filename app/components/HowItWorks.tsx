"use client";

import React from "react";
import Image from "next/image";

export function HowItWorks() {
  const steps = [
    {
      img: "/images/deposit.png",
      alt: "Step 1: Make a deposit illustration",
      title: "Make a deposit!",
      points: [
        "Sign in or register a new account",
        "Verify account",
        "Make a deposit",
      ],
      reverse: false,
    },
    {
      img: "/images/plan.png",
      alt: "Step 2: Choose a plan illustration",
      title: "Choose a plan and Earn!",
      points: [
        "Choose an Investment plan",
        "Select your preferred fund manager",
        "Then kick back and relax as they do the rest",
      ],
      reverse: true,
    },
    {
      img: "/images/withdraw.png",
      alt: "Step 3: Withdraw funds illustration",
      title: "Withdraw funds anytime!",
      points: [
        "Save withdrawal accounts or address",
        "Withdraw funds anytime",
        "Enjoy smooth and seamless withdrawals with no hidden fees",
      ],
      reverse: false,
    },
    {
      img: "/images/refer.png",
      alt: "Step 4: Refer and earn illustration",
      title: "Refer and Earn!",
      points: [
        "Referral program (coming soon)",
        "Track rewards from your dashboard when live",
      ],
      reverse: true,
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-[#141414] py-16 md:py-20 border-b border-[#27272a] px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold border-b-4 border-[#a500a3] pb-3 mb-6 inline-block text-[#ededed]">
            How it works
          </h2>
          <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed max-w-4xl">
            Your success is our priority. Fund managers only win when you do, with performance-based fees. Plus, our AUM fee is simple, so your assets stay your own. With just a few clicks you can start earning active or passive income without having to actively manage your Investments. Here is how it works.
          </p>
        </div>

        {/* Steps Alternating Rows with Illustrations */}
        <div className="flex flex-col items-center gap-12 sm:gap-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex w-full flex-col items-center gap-8 lg:items-center ${
                step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Illustration */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="relative h-64 w-full max-w-sm sm:h-72">
                  <Image
                    src={step.img}
                    alt={step.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text / Points */}
              <div className="w-full lg:w-1/2 p-4 lg:p-10">
                <h3 className="text-xl sm:text-2xl font-bold text-[#ededed] mb-4">
                  {step.title}
                </h3>
                <ul className="list-inside list-decimal space-y-2 text-sm text-[#a1a1aa] leading-relaxed">
                  {step.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-[#ededed]/90">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
