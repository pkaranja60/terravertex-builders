import React from "react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { questions } from "@/constants";

export default function FAQs() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center pt-16 lg:pt-28 pb-16 lg:pb-28 gap-8 lg:gap-20 bg-[#643404] px-4 sm:px-8 lg:px-16 text-white">
        <div className="w-full lg:w-[500px] flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">FAQs</h2>
          <p className="text-base lg:text-lg font-medium mb-6 lg:mb-8">
            Find answers to your questions about our construction services and
            processes at TerraVertex Builders.
          </p>

          <Button className="w-full sm:w-[110px] h-[44px] rounded-xl border border-white/20 font-medium">
            Sign Up
          </Button>
        </div>

        <div className="text-white w-full lg:flex-1">
          {questions.map((item, index) => (
            <Accordion
              type="multiple"
              defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]}
              className="bg-[#4B2703] w-full max-w-[732px] mx-auto lg:mx-0 rounded-2xl mb-4"
              key={item.question}
            >
              <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger className="flex justify-between items-center w-full px-4 sm:px-6 text-base sm:text-lg text-left">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="px-4 sm:px-6 text-sm sm:text-base mt-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}
