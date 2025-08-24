import React from "react";
import Img from "../../../components/smallComp/image/Img"; // Assuming this path is correct for your project
import ArrowIcon from "../../../components/Icons/ArrowIcon"; // Assuming this path is correct for your project
import { forwardRef } from "react";
interface AboutMeProps {
  // Define any props you might pass to AboutMe here
  // For example: profileImageUrl?: string;
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  const technologies = [
    ["Python", "Django/Flask", "AI Agents/Automation", "Azure DevOps", "AWS/Google Cloud"],
    ["SQL Servers", "Docker", "Celery/Redis", "TypeScript/JavaScript: Basics", "Next.js/React: Basics"],
  ];

  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
      {/* 0.1 About Me Title */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Paragraphs & Image */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
          <div className="font-Header text-gray-400 text-justify">
            Hey there! I&apos;m Thamjid, an <span className="text-AAsecondary">AI-focused Python Developer</span> who loves
            building scalable and intelligent digital solutions. My journey started with a passion for programming and has
            grown into over <span className="text-AAsecondary">3 years of professional experience</span> crafting web
            applications and data-driven platforms using Django, Flask, and modern AI tools.
          </div>
          <div className="font-Header text-gray-400 text-justify">
            Over the years, I&apos;ve had the opportunity to work across diverse domains – from{" "}
            <span className="text-AAsecondary">HR management systems</span> and{" "}
            <span className="text-AAsecondary">travel & hospitality platforms</span> to{" "}
            <span className="text-AAsecondary">university registration and learning systems</span> and{" "}
            <span className="text-AAsecondary">e-commerce</span>. Currently, I&apos;m working as an{" "}
            <span className="text-AAsecondary">AI/ML Engineer</span> in Abu Dhabi, where I integrate intelligent systems like{" "}
            <span className="text-AAsecondary">resume parsing</span>,{" "}
            <span className="text-AAsecondary">ATS checks</span>, and{" "}
            <span className="text-AAsecondary">chatbots</span> to enhance enterprise platforms.
          </div>
          <div className="font-Header text-gray-400 text-justify">
            Some of my favorite projects include <span className="text-AAsecondary">Wearlay</span>, an inventory and CRM
            system, <span className="text-AAsecondary">Explore World</span>, a large-scale tourism aggregator, and{" "}
            <span className="text-AAsecondary">Redalion</span>, an e-commerce platform linking QR-coded medallions to
            digital ancestral profiles. Each project has pushed me to design{" "}
            <span className="text-AAsecondary">scalable architectures</span> and deliver{" "}
            <span className="text-AAsecondary">user-focused solutions</span>.
          </div>
          <div className="font-Header tracking-wide text-gray-400 pt-2 pb-1 text-justify">
            Here&apos;s what I&apos;m usually working with these days:
          </div>
          {/* Technologies List */}
          <div className="font-Header tracking-wide flex flex-row space-x-12 md:space-x-16 justify-center lg:justify-start">
            {technologies.map((techGroup, groupIndex) => (
              <div key={groupIndex} className="flex flex-col space-y-4 sm:text-base text-sm">
                {techGroup.map((tech, techIndex) => (
                  <div key={techIndex} className="flex flex-row items-center space-x-2">
                    <ArrowIcon className={"h-3 w-3 text-AAsecondary flex-none"} />
                    <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="font-Header text-gray-400 pt-4 text-justify">
            Whether it&apos;s <span className="text-AAsecondary">AI-driven platforms</span>,{" "}
            <span className="text-AAsecondary">microservices-based applications</span>, or{" "}
            <span className="text-AAsecondary">innovative data solutions</span>, I&apos;m always up for the next challenge that
            blends <span className="text-AAsecondary">technology</span>,{" "}
            <span className="text-AAsecondary">creativity</span>, and{" "}
            <span className="text-AAsecondary">impact</span>.
          </div>
        </div>


          {/* Image Section (Desktop and Tablet) */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/Portfolio-portrait-3.jpeg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>

          {/* Image Section (Mobile) */}
          <div className="relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/Portfolio-portrait-3.jpeg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full bg-AAsecondary opacity-10 md:opacity-60 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe; // Changed to a const for functional component definition with type
