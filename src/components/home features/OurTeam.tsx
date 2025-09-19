import { team } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { FaLinkedin, FaDribbble } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const socialIcons = {
  LinkedIn: <FaLinkedin size={24} className="rounded-lg" />,
  Twitter: <FaSquareXTwitter size={24} className="rounded-lg" />,
  Dribbble: <FaDribbble size={24} />,
};

function TeamMemberCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map((member) => (
        <div
          key={member.name}
          className="team-member p-6 rounded-lg shadow-md bg-white flex flex-col items-center text-center 
                 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
        >
          <Image
            src={member.image}
            alt={member.name}
            width={80}
            height={80}
            className="rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div className="mt-6 mb-6">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-lg text-gray-600">{member.title}</p>
            <p className="text-base mt-4 text-gray-700">{member.description}</p>
          </div>
          <div className="flex items-center gap-4">
            {member.socialMedia.map((platform) => (
              <a
                key={platform}
                href="#"
                aria-label={platform}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                {socialIcons[platform as keyof typeof socialIcons] || platform}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function OurTeam() {
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-16 bg-[#FEE6CE] pt-16 lg:pt-20 pb-16 lg:pb-28">
        <div className="text-center lg:text-left">
          <span className="text-base font-semibold">Team</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6">
            Our Team
          </h2>
          <p className="text-base lg:text-lg">
            Meet the dedicated professionals behind our projects.
          </p>
        </div>

        {/* Team Members */}
        <div className="mt-12 lg:mt-20 mb-12 lg:mb-20">
          <TeamMemberCard />
        </div>

        {/* Job Hiring */}
        <div className="text-center lg:text-left">
          <h4 className="text-2xl sm:text-3xl lg:text-[32px]">We're Hiring!</h4>
          <p className="text-base lg:text-lg mt-4 mb-6">
            Join our growing team of construction experts.
          </p>
          <Button className="text-base font-medium w-full sm:w-[168px] h-[44px] rounded-xl p-4 border border-[#0D0701]/15">
            Open Positions
          </Button>
        </div>
      </div>
    </>
  );
}
