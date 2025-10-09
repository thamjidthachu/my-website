import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion"; // Or import { motion } from "framer-motion";
import Link from "next/link"; // Link component is imported but not used in this snippet. Remove if not needed elsewhere.
import { useRouter } from "next/router"; // useRouter is imported but not used. Remove if not needed.

interface MyNameProps {
  finishedLoading: boolean;
}

const MyName: React.FC<MyNameProps> = props => {
  // const router = useRouter(); // Not used currently

  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-52 relative" // Added relative for potential scroll indicator
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Thamjid Mannarayil.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Nothing but Creativity.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m an <span className="text-AAsecondary keyword-hover">AI-focused Python Developer</span> with over{" "}
        <span className="text-AAsecondary keyword-hover">4 years of experience</span> designing and building scalable web applications with{" "}
        <span className="text-AAsecondary keyword-hover">Django</span> and{" "}
        <span className="text-AAsecondary keyword-hover">Flask</span>.
        <br className="3xl:block hidden" /> I bring a proven track record across{" "}
        <span className="text-AAsecondary keyword-hover">HR management</span>,{" "}
        <span className="text-AAsecondary keyword-hover">travel and hospitality</span>,{" "}
        <span className="text-AAsecondary keyword-hover">university registration and learning systems</span>, and{" "}
        <span className="text-AAsecondary keyword-hover">e-commerce</span>.
        <br className="3xl:block hidden" /> Currently working as an{" "}
        <span className="text-AAsecondary keyword-hover">AI/ML Engineer</span>, I integrate intelligent systems like{" "}
        <span className="text-AAsecondary keyword-hover">resume parsing</span> and{" "}
        <span className="text-AAsecondary keyword-hover">ATS optimization</span> to deliver{" "}
        <span className="text-AAsecondary keyword-hover">data-driven solutions</span>.
        <br className="3xl:block hidden" /> I&apos;m passionate about{" "}
        <span className="text-AAsecondary keyword-hover">clean architecture</span>,{" "}
        <span className="text-AAsecondary keyword-hover">microservices</span>, and crafting applications that balance{" "}
        <span className="text-AAsecondary keyword-hover">performance</span> and{" "}
        <span className="text-AAsecondary keyword-hover">maintainability</span>.
        <br className="3xl:block hidden" /> I thrive on{" "}
        <span className="text-AAsecondary keyword-hover">challenging projects</span> that push the boundaries of{" "}
        <span className="text-AAsecondary keyword-hover">innovation</span> and create{" "}
        <span className="text-AAsecondary keyword-hover">meaningful impact</span>.
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="mt-12"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary transition-transform duration-300 ease-out resume-button-hover">
            Check out my resume!
          </button>
        </a>
      </motion.div>

      {/* Optional Scroll Down Indicator Placeholder */}
      {/* You would implement this with its own motion.div and styling/icon if this hero is full viewport height */}
      { <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: props.finishedLoading ? 0 : 11, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-AAsecondary"
        // style={{ bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }} // Alternative to Tailwind classes
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>}
    </div>
  );
};

export default MyName;
