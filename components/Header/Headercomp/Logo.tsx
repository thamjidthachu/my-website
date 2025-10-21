import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Image from "next/image";

export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 0.3, duration: 0.4 },
          opacity: { delay: props.finishedLoading ? 0 : 0.3, duration: 0.4 },
        }}
        className="relative h-12 w-12 flex items-center justify-center"
      >
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={48}
          height={48}
          className="rounded-full object-cover shadow-lg"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(233, 69, 96, 0.3))'
          }}
        />
      </motion.div>
    </>
  );
}
