import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <>
      <div className="w-full flex items-center pt-28 pb-28 gap-20">
        <div className="w-1/2">
          <h1 className="text-[56px] mb-6">
            Building the Future with Strength and Innovation
          </h1>
          <p className="mt-6 text-lg mb-8">
            At TerraVertex Builders, we merge the power of nature with
            pioneering technology to deliver exceptional construction solutions.
            Our commitment to quality and sustainability sets us apart in every
            project we undertake.
          </p>

          <div className="flex gap-4">
            <Button className="w-[137px] h-[44px] rounded-xl bg-gradient-to-r from-[#FB840C] via-pink-700 to-[#5617F9] to-90% text-white">
              Learn More
            </Button>
            <Button className="w-[110px] h-[44px] rounded-xl border border-neutral-300 font-medium">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src="/images/hero.jpg"
            alt="hero"
            className="object-contain "
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
