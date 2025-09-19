import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center pt-16 lg:pt-28 pb-16 lg:pb-28 gap-8 lg:gap-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-[56px] mb-4 lg:mb-6 text-center lg:text-left leading-tight">
            Building the Future with Strength and Innovation
          </h1>
          <p className="text-base lg:text-lg mb-6 lg:mb-8 text-center lg:text-left">
            At TerraVertex Builders, we merge the power of nature with
            pioneering technology to deliver exceptional construction solutions.
            Our commitment to quality and sustainability sets us apart in every
            project we undertake.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button className="w-full sm:w-[137px] h-[44px] rounded-xl bg-gradient-to-r from-[#FB840C] via-pink-700 to-[#5617F9] to-90% text-white">
              Learn More
            </Button>
            <Button className="w-full sm:w-[110px] h-[44px] rounded-xl border border-neutral-300 font-medium">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
          <Image
            src="/images/hero.svg"
            alt="hero"
            className="object-contain max-w-full h-auto"
            priority
            width={616}
            height={640}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
