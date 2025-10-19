import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
          opacity: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
        }}
        className=" relative h-12 w-10 "
      >
        <motion.span
          initial={{ x: 1 }}
          className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-AATextPrimary font-bold"
          style={{
            textShadow: '0 0 10px rgba(233, 69, 96, 0.5)'
          }}
        >
          T
        </motion.span>

        <motion.div 
          animate={{ rotate: -30, y: 5 }} 
          className="h-1 w-6 rounded bg-gradient-to-r from-AAAccent to-AATextPrimary shadow-sm"
        ></motion.div>
        <motion.div 
          animate={{ rotate: 90, x: -10, y: 18 }} 
          className="h-1 w-6 rounded bg-gradient-to-r from-AATextPrimary to-AAsecondary shadow-sm"
        ></motion.div>
        <motion.div 
          animate={{ rotate: 30, y: 31 }} 
          className="h-1 w-6 rounded bg-gradient-to-r from-AAsecondary to-AAAccent shadow-sm"
        ></motion.div>
        <motion.div 
          animate={{ rotate: -30, y: 27, x: 19 }} 
          className="h-1 w-6 rounded bg-gradient-to-r from-AAAccent to-AATextPrimary shadow-sm"
        ></motion.div>
        <motion.div 
          animate={{ rotate: 30, x: 19, y: -10 }} 
          className="h-1 w-6 rounded bg-gradient-to-r from-AATextPrimary to-AAsecondary shadow-sm"
        ></motion.div>
        <motion.div 
          animate={{ rotate: 90, x: 28, y: 2 }} 
          className="h-1 w-6 rounded bg-gradient-to-r from-AAsecondary to-AAAccent shadow-sm"
        ></motion.div>
      </motion.div>
    </>
  );
}
