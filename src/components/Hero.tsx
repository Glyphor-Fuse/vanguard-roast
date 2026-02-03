
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-east-london.jpg"
          alt="East London Industrial Street"
          className="h-full w-full object-cover grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
      </div>

      {/* Brutalist Typography Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-4 py-12 md:px-8 md:py-16">
        <nav className="flex justify-between items-center border-b border-white/20 pb-4">
          <span className="font-heading text-lg tracking-widest uppercase text-white">Est. 2024</span>
          <span className="font-heading text-lg tracking-widest uppercase text-white">LDN — E1</span>
        </nav>

        <div className="flex flex-col items-start space-y-2">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading text-[15vw] leading-[0.8] tracking-tighter text-white uppercase mix-blend-difference"
          >
            Vanguard
          </motion.h1>
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-heading text-[15vw] leading-[0.8] tracking-tighter text-transparent stroke-text uppercase self-end text-right w-full"
            style={{ WebkitTextStroke: "2px white" }}
          >
            Roast
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/20 pt-6">
          <p className="max-w-sm text-sm md:text-base text-gray-300 font-light leading-relaxed">
            Specialty coffee for the brutalist soul. 
            Sourced ethically, roasted aggressively, served without pretension in the heart of East London.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 md:mt-0 bg-white text-black font-heading uppercase tracking-widest px-8 py-3 text-sm hover:bg-neutral-200 transition-colors"
          >
            Explore The Roast
          </motion.button>
        </div>
      </div>
    </section>
  );
}
