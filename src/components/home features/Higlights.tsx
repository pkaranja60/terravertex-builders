import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Highlights() {
  return (
    <>
      {/* Strength Section */}
      <div className="w-full flex items-center pt-28 pb-28 gap-20 bg-[#643404] px-16 text-white">
        <div className="w-1/2">
          <span className="font-semibold mb-4">Strength</span>

          <h2 className="text-5xl mb-8">
            Building the Future with Strength and Innovation
          </h2>
          <p className="text-lg mb-8">
            At TerraVertex Builders, we prioritize durability and quality in
            every project. Our sustainable construction solutions are designed
            to meet the needs of today while protecting our planet for future
            generations.
          </p>

          <div className="flex gap-6 mb-8">
            <div>
              <Image
                src="/images/cube.svg"
                alt="hero"
                className="object-contain mb-4"
                priority
                width={36}
                height={40}
              />
              <h6 className="text-xl mb-4">Quality Assurance</h6>
              <p>
                We ensure every build meets the highest standards of excellence
                and sustainability.
              </p>
            </div>

            <div>
              <Image
                src="/images/cube.svg"
                alt="hero"
                className="object-contain mb-4"
                priority
                width={36}
                height={40}
              />
              <h6 className="text-xl mb-4">Innovative Designs</h6>
              <p>
                Our forward-thinking designs elevate construction, combining
                functionality with aesthetic appeal.
              </p>
            </div>
          </div>

          {/* buttons */}
          <div className="flex items-center">
            <Button className="w-[106px] h-[44px] rounded-xl border border-white/20">
              Explore
            </Button>
            <Button className="w-[98px] h-[44px] shadow-none">
              Contact <ChevronRight size={24} className="w-24 h-24" />
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src="/images/image_1.svg"
            alt="hero"
            className="object-contain "
            priority
            width={616}
            height={640}
          />
        </div>
      </div>

      {/* Discovery Section */}
      <div className="w-full pt-28 pb-28 gap-20 bg-[#0D0701] px-16 text-white">
        <h3 className="text-[40px] mb-20 w-[768px] h-24">
          Discover Our Comprehensive Range of Construction Services Tailored for
          You
        </h3>

        {/* sections */}
        <div className="grid grid-cols-3 gap-8">
          <div>
            <Image
              src="/images/cube.svg"
              alt="hero"
              className="object-contain mb-4"
              priority
              width={36}
              height={40}
            />
            <h5 className="text-2xl mb-4">
              Building Dreams: Our Expertise in Residential Construction
              Services
            </h5>
            <p>
              From custom homes to renovations, we create spaces that inspire.
            </p>
            <Button className="mt-8 flex items-center ">
              Learn More <ChevronRight size={24} className="w-24 h-24" />
            </Button>
          </div>

          <div>
            <Image
              src="/images/cube.svg"
              alt="hero"
              className="object-contain mb-4"
              priority
              width={36}
              height={40}
            />
            <h5 className="text-2xl mb-4">
              Transforming Businesses: Our Commitment to Commercial Construction
              Excellence
            </h5>
            <p>
              We deliver innovative commercial spaces that enhance functionality
              and aesthetics.
            </p>
            <Button className="mt-8 flex items-center ">
              Learn More <ChevronRight size={24} className="w-24 h-24" />
            </Button>
          </div>

          <div>
            <Image
              src="/images/cube.svg"
              alt="hero"
              className="object-contain mb-4"
              priority
              width={36}
              height={40}
            />
            <h5 className="text-2xl mb-4">
              Infrastructure Projects: Building the Foundations of Our
              Communities
            </h5>
            <p>
              Our infrastructure solutions ensure safety, efficiency, and
              sustainability for all.
            </p>
            <Button className="mt-8 flex items-center ">
              Learn More <ChevronRight size={24} className="w-24 h-24" />
            </Button>
          </div>
        </div>
      </div>

      {/* Why choose US */}
      <div className="w-full flex items-center pt-28 pb-28 gap-20 bg-[#643404] px-16 text-white">
        <div className="w-1/2">
          <span className="font-semibold mb-4">Build</span>

          <h2 className="text-5xl mb-8">
            Discover the Advantages of Choosing Us
          </h2>
          <p className="text-lg mb-8">
            At TerraVertex Builders, we prioritize eco-friendly practices that
            not only benefit the environment but also enhance the longevity of
            your projects. Our commitment to precision and efficiency ensures
            that every build meets the highest standards of quality and
            sustainability.
          </p>

          {/* buttons */}
          <div className="flex items-center">
            <Button className="w-[106px] h-[44px] rounded-xl border border-white/20">
              Learn More
            </Button>
            <Button className="w-[98px] h-[44px] shadow-none">
            Sign Up <ChevronRight size={24} className="w-24 h-24" />
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src="/images/image_2.svg"
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
