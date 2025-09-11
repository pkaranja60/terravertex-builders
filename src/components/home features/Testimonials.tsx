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
import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";

function getStars(rating: number, maxStars: number = 5): string {
  const fullStar = "⭐";
  const emptyStar = "☆";

  const filled = fullStar.repeat(rating);

  const empty = emptyStar.repeat(maxStars - rating);

  return filled + empty;
}

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );
  return (
    <>
      <div className="w-full pt-28 pb-28 gap-20 bg-[#0D0701] px-16 text-white">
        <Carousel
          className="w-3/4 mx-auto"
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
                <div className="flex flex-col justify-center items-center w-[768px] h-[279px]">
                  {getStars(testimonial.rating)}
                  <h5 className="mt-8 mb-8 text-center text-2xl">
                    {testimonial.testimonial}
                  </h5>

                  <div className="flex items-center">
                    <Image
                      src="/images/image_3.svg"
                      alt="hero"
                      className="object-contain mr-5"
                      priority
                      width={56}
                      height={56}
                    />
                    <div className="flex flex-col items-center justify-center">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p>{testimonial.project}</p>
                      <p className="text-sm italic">{testimonial.date}</p>
                    </div>

                    <div className="ml-5 mr-5 border border-white/20 h-14" />

                    <div>
                      <p>{testimonial.project}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="w-full pt-28 pb-28 gap-20 bg-[#0D0701] px-16 text-white">
        <div className="w-[768px] h-[212px] flex flex-col items-center justify-center text-center mx-auto">
          <h2 className="text-5xl">Build Your Dream Project Today</h2>
          <p className="text-lg font-medium mt-6 mb-8">
            Contact TerraVertex Builders to bring your construction vision to
            life with our expert team.
          </p>

          <div className="flex items-center gap-4">
            <Button className="w-[137px] h-[44px] rounded-xl bg-gradient-to-r from-[#FB840C] via-pink-700 to-[#5617F9] to-90% text-white">
              Learn More
            </Button>
            <Button className="w-[110px] h-[44px] rounded-xl border border-white/20 font-medium">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
