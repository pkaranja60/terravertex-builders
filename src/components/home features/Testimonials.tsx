"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";

function getStars(rating: number): string {
  const fullStar = "⭐";
  return fullStar.repeat(rating);
}

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );

  return (
    <>
      <div className="w-full pt-16 lg:pt-28 pb-16 lg:pb-28 bg-[#0D0701] px-4 sm:px-8 lg:px-16 text-white">
        <Carousel
          className="w-full lg:w-3/4 mx-auto"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="w-full flex flex-col justify-center items-center"
              >
                <div className="flex flex-col justify-center items-center w-full max-w-[768px] px-4 text-center">
                  <div className="text-2xl mb-6">
                    {getStars(testimonial.rating)}
                  </div>
                  <h5 className="mb-6 lg:mb-8 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                    {testimonial.testimonial}
                  </h5>

                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/image_3.svg"
                        alt="testimonial author"
                        className="object-contain"
                        priority
                        width={56}
                        height={56}
                      />
                      <div className="flex flex-col text-left">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm">{testimonial.project}</p>
                        <p className="text-sm italic text-gray-300">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>

                    {/* divider - hidden on mobile */}
                    <div className="hidden sm:block border border-white/20 h-14" />

                    <div className="hidden sm:block">
                      <p>{testimonial.project}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>

      <div className="w-full pt-16 lg:pt-28 pb-16 lg:pb-28 bg-[#0D0701] px-4 sm:px-8 lg:px-16 text-white">
        <div className="w-full max-w-[768px] flex flex-col items-center justify-center text-center mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6">
            Build Your Dream Project Today
          </h2>
          <p className="text-base lg:text-lg font-medium mb-6 lg:mb-8">
            Contact TerraVertex Builders to bring your construction vision to
            life with our expert team.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="w-full sm:w-[137px] h-[44px] rounded-xl bg-gradient-to-r from-[#FB840C] via-pink-700 to-[#5617F9] to-90% text-white">
              Learn More
            </Button>
            <Button className="w-full sm:w-[110px] h-[44px] rounded-xl border border-white/20 font-medium">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
