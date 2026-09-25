'use client'
import Navbar from "@/components/Navbar";
import { Video } from "lucide-react";
import {motion} from  'motion/react';

export default function Home() {
  return (
  <div>
<Navbar />
<main className="relative min-h-screen w-full bg-linear-to-br from-black via-zinc-900 to-black text-white overflow-hidden">
<motion.div
initial={{}}
animate={{}}
transition={{}}
className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
>
<div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
  <Video/>
</div>
<div className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
Stranger
</div>
<p className="text-zinc-400 max-w-md mb-8 text-sm sm:text-base">
  Anonymous video conversations with strangers worldwide.
  No sign-up. No identity. Just pure connection.
</p>
</motion.div>
</main>
  </div>
  );
}
