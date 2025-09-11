import React from "react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { X } from "lucide-react";
import { questions } from "@/constants";

export default function FAQs() {
  return (
    <>
      <div className="w-full flex items-start pt-28 pb-28 gap-20 bg-[#643404] px-16 text-white">
        <div className="w-[500px] h-[212px] flex flex-col items-start justify-start">
          <h2 className="text-5xl">FAQs</h2>
          <p className="text-lg font-medium mt-6 mb-8">
            Find answers to your questions about our construction services and
            processes at TerraVertex Builders.
          </p>

          <Button className="w-[110px] h-[44px] rounded-xl border border-white/20 font-medium">
            Sign Up
          </Button>
        </div>

        <div className="text-white">
          {questions.map((item, index) => (
            <Accordion
              type="multiple"
              defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]}
              className="bg-[#4B2703] w-[732px] rounded-2xl mb-4"
              key={item.question}
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex justify-between items-center w-full px-6 text-lg">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="px-6 text-base mt-5">
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
