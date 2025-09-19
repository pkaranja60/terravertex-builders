import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { IoChevronForwardSharp } from "react-icons/io5";


export default function Highlights() {
  return (
    <>
      {/* Strength Section */}
      <div className="w-full flex flex-col lg:flex-row items-center pt-16 lg:pt-28 pb-16 lg:pb-28 gap-8 lg:gap-20 bg-[#643404] px-4 sm:px-8 lg:px-16 text-white">
        <div className="w-full lg:w-1/2">
          <span className="font-semibold mb-4 block text-center lg:text-left">
            Strength
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 text-center lg:text-left">
            Building the Future with Strength and Innovation
          </h2>
          <p className="text-base lg:text-lg mb-6 lg:mb-8 text-center lg:text-left">
            At TerraVertex Builders, we prioritize durability and quality in
            every project. Our sustainable construction solutions are designed
            to meet the needs of today while protecting our planet for future
            generations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-6 lg:mb-8">
            <div className="text-center lg:text-left">
              <Image
                src="/images/cube.svg"
                alt="hero"
                className="object-contain mb-4 mx-auto lg:mx-0"
                priority
                width={36}
                height={40}
              />
              <h6 className="text-xl mb-4">Quality Assurance</h6>
              <p className="text-base">
                We ensure every build meets the highest standards of excellence
                and sustainability.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <Image
                src="/images/cube.svg"
                alt="hero"
                className="object-contain mb-4 mx-auto lg:mx-0"
                priority
                width={36}
                height={40}
              />
              <h6 className="text-xl mb-4">Innovative Designs</h6>
              <p className="text-base">
                Our forward-thinking designs elevate construction, combining
                functionality with aesthetic appeal.
              </p>
            </div>
          </div>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button className="w-full sm:w-[106px] h-[44px] rounded-xl border border-white/20">
              Explore
            </Button>
            <Button className="w-full sm:w-auto h-[44px] shadow-none flex items-center justify-center">
              Contact{" "}
              <IoChevronForwardSharp size={24} className="w-6 h-6 ml-1" />
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/image_1.svg"
            alt="hero"
            className="object-contain max-w-full h-auto"
            priority
            width={616}
            height={640}
          />
        </div>
      </div>

      {/* Discovery Section */}
      <div className="w-full pt-16 lg:pt-28 pb-16 lg:pb-28 bg-[#0D0701] px-4 sm:px-8 lg:px-16 text-white">
        <h3 className="text-2xl sm:text-3xl lg:text-[40px] mb-12 lg:mb-20 max-w-full lg:w-[768px] text-center lg:text-left leading-tight">
          Discover Our Comprehensive Range of Construction Services Tailored for
          You
        </h3>

        {/* sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-center lg:text-left">
            <Image
              src="/images/cube.svg"
              alt="hero"
              className="object-contain mb-4 mx-auto lg:mx-0"
              priority
              width={36}
              height={40}
            />
            <h5 className="text-xl lg:text-2xl mb-4">
              Building Dreams: Our Expertise in Residential Construction
              Services
            </h5>
            <p className="text-base mb-6">
              From custom homes to renovations, we create spaces that inspire.
            </p>
            <Button className="w-full sm:w-auto flex items-center justify-center">
              Learn More{" "}
              <IoChevronForwardSharp size={24} className="w-6 h-6 ml-1" />
            </Button>
          </div>

          <div className="text-center lg:text-left">
            <Image
              src="/images/cube.svg"
              alt="hero"
              className="object-contain mb-4 mx-auto lg:mx-0"
              priority
              width={36}
              height={40}
            />
            <h5 className="text-xl lg:text-2xl mb-4">
              Transforming Businesses: Our Commitment to Commercial Construction
              Excellence
            </h5>
            <p className="text-base mb-6">
              We deliver innovative commercial spaces that enhance functionality
              and aesthetics.
            </p>
            <Button className="w-full sm:w-auto flex items-center justify-center">
              Learn More{" "}
              <IoChevronForwardSharp size={24} className="w-6 h-6 ml-1" />
            </Button>
          </div>

          <div className="text-center lg:text-left">
            <Image
              src="/images/cube.svg"
              alt="hero"
              className="object-contain mb-4 mx-auto lg:mx-0"
              priority
              width={36}
              height={40}
            />
            <h5 className="text-xl lg:text-2xl mb-4">
              Infrastructure Projects: Building the Foundations of Our
              Communities
            </h5>
            <p className="text-base mb-6">
              Our infrastructure solutions ensure safety, efficiency, and
              sustainability for all.
            </p>
            <Button className="w-full sm:w-auto flex items-center justify-center">
              Learn More{" "}
              <IoChevronForwardSharp size={24} className="w-6 h-6 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Why choose US */}
      <div className="w-full flex flex-col lg:flex-row items-center pt-16 lg:pt-28 pb-16 lg:pb-28 gap-8 lg:gap-20 bg-[#643404] px-4 sm:px-8 lg:px-16 text-white">
        <div className="w-full lg:w-1/2">
          <span className="font-semibold mb-4 block text-center lg:text-left">
            Build
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 text-center lg:text-left">
            Discover the Advantages of Choosing Us
          </h2>
          <p className="text-base lg:text-lg mb-6 lg:mb-8 text-center lg:text-left">
            At TerraVertex Builders, we prioritize eco-friendly practices that
            not only benefit the environment but also enhance the longevity of
            your projects. Our commitment to precision and efficiency ensures
            that every build meets the highest standards of quality and
            sustainability.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button className="w-full sm:w-[106px] h-[44px] rounded-xl border border-white/20">
              Learn More
            </Button>
            <Button className="w-full sm:w-auto h-[44px] shadow-none flex items-center justify-center">
              Sign Up{" "}
              <IoChevronForwardSharp size={24} className="w-6 h-6 ml-1" />
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/image_2.svg"
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
