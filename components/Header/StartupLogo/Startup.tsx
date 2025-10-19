import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
const Startup = (props) => {
  let WidthBy2 = 0;
  let HeightBy2 = 0;
  let greaterThanSmall=false;
  if (typeof window !== "undefined") {
    if (window.innerWidth > 768) {
      WidthBy2 = window.innerWidth / 2 - 48 - 20;
      HeightBy2 = window.innerHeight / 2-44;
      greaterThanSmall=true;
    }else{
      WidthBy2 = window.innerWidth / 2 -28;
      HeightBy2 = window.innerHeight / 2-40;
    }

    console.log("width by 2: ", WidthBy2);
  }

  return (

  <motion.div 
    initial={{opacity:1}}
    animate={{opacity:0}}
    transition={{opacity:{delay:4.9,duration:0}}}
    className="absolute h-full w-full flex justify-center items-center bg-StartupBackground">
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0, scale: "100%" }}
        animate={{ 
          opacity: [1, 0, 1], 
          x: -WidthBy2, 
          y: -HeightBy2,
          scale: greaterThanSmall ? "57%" : "50%"
        }}
        transition={{
          opacity: { delay: 3, duration: 1.5 },
          x: { duration: 0.8, delay: 4.5, ease: "easeInOut" },
          y: { duration: 0.8, delay: 4.5, ease: "easeInOut" },
          scale: { duration: 0.8, delay: 4.5, ease: "easeInOut" },
        }}
        className="relative h-24 w-24 flex justify-center items-center"
        style={{
          filter: 'drop-shadow(0 0 20px rgba(233, 69, 96, 0.3))'
        }}
      >
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, rotate: 90, x: 38 }}
          transition={{
            scale: { duration: 1.5, ease: "easeInOut" },
            rotate: { delay: 0.5, duration: 0.5, ease: "backOut" },
            x: { delay: 0.8, duration: 1, ease: "easeOut" },
          }}
          className="absolute h-2 w-12 bg-gradient-to-r from-AAAccent to-AATextPrimary rounded shadow-lg shadow-AAAccent/50"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, rotate: 90, x: -39 }}
          transition={{
            scale: { duration: 1.5, ease: "easeInOut" },
            rotate: { delay: 0.5, duration: 0.5, ease: "backOut" },
            x: { delay: 0.8, duration: 1, ease: "easeOut" },
          }}
          className="absolute h-2 w-12 bg-gradient-to-r from-AATextPrimary to-AAAccent rounded shadow-lg shadow-AATextPrimary/50"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: 35, x: 18, y: -34 }}
          transition={{
            opacity: { delay: 2, duration: 0 },
            scale: { duration: 2.5, ease: "easeOut" },
            rotate: { delay: 0.5, duration: 0.5, ease: "backOut" },
            y: { delay: 1.2, duration: 2, ease: "easeOut" },
            x: { delay: 1.5, duration: 0.5, ease: "easeOut" },
          }}
          className="absolute h-2 w-12 bg-gradient-to-r from-AAsecondary to-AAAccent rounded shadow-lg shadow-AAsecondary/50"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: -35, x: -18, y: -34 }}
          transition={{
            opacity: { delay: 2, duration: 0 },
            scale: { duration: 2.5, ease: "easeOut" },
            rotate: { delay: 0.5, duration: 0.5, ease: "backOut" },
            y: { delay: 1.2, duration: 2, ease: "easeOut" },
            x: { delay: 1.5, duration: 0.5, ease: "easeOut" },
          }}
          className="absolute h-2 w-12 bg-gradient-to-r from-AAAccent to-AAsecondary rounded shadow-lg shadow-AAAccent/50"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: -35, x: 18, y: 34 }}
          transition={{
            opacity: { delay: 2, duration: 0 },
            scale: { duration: 2.5, ease: "easeOut" },
            rotate: { delay: 0.5, duration: 0.5, ease: "backOut" },
            y: { delay: 1.2, duration: 2, ease: "easeOut" },
            x: { delay: 1.5, duration: 0.5, ease: "easeOut" },
          }}
          className="absolute h-2 w-12 bg-gradient-to-r from-AATextPrimary to-AAsecondary rounded shadow-lg shadow-AATextPrimary/50"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: 35, x: -18, y: 34 }}
          transition={{
            opacity: { delay: 2, duration: 0 },
            scale: { duration: 2.5, ease: "easeOut" },
            rotate: { delay: 0.5, duration: 0.5, ease: "backOut" },
            y: { delay: 1.2, duration: 2, ease: "easeOut" },
            x: { delay: 1.5, duration: 0.5, ease: "easeOut" },
          }}
          className="absolute h-2 w-12 bg-gradient-to-r from-AAsecondary to-AATextPrimary rounded shadow-lg shadow-AAsecondary/50"
        ></motion.div>
        <motion.span
          initial={{ scale: 0, y: -4, x: -1 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ 
            scale: { 
              delay: 1.5, 
              duration: 1.5, 
              ease: "easeOut",
              times: [0, 0.6, 1]
            } 
          }}
          className="text-AATextSecondary font-Text2 text-4xl font-bold drop-shadow-lg"
          style={{
            textShadow: '0 0 20px rgba(233, 69, 96, 0.6), 0 0 40px rgba(233, 69, 96, 0.4)'
          }}
        >
          T
        </motion.span>
      </motion.div>
    </motion.div>
  );
};
export default Startup;
