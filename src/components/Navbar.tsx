"use client";
import React from "react";
import { motion } from "motion/react";
import { Video } from "lucide-react";
function Navbar() {
  return (
    <motion.div
    initial={{y:-80,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.4}}
    className="fixed top-0 left-0 right-0 z-30 bg-black backdrop-blur border-b border-white/10 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white">
          <Video size={18} />
        </span>
        <span className="text-lg font-semibold tracking-tight text-white">
          Stranger
        </span>
      </div>
    </motion.div>
  );
}

export default Navbar;
