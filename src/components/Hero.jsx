import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-primary flex items-center overflow-hidden">
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(129, 140, 248, 0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft accent glow, top-left */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className={`${styles.paddingX} max-w-7xl mx-auto w-full pt-28 pb-20`}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <p className="font-mono text-accent text-label uppercase tracking-widest mb-5">
            // Data Analyst
          </p>

          {/* Name */}
          <h1 className={`${styles.heroHeadText} mb-3`}>
            Hi, I'm{" "}
            <span className="accent-text">Taj Sharma.</span>
          </h1>

          {/* Tagline */}
          <p className="font-display font-semibold text-h2 text-text-secondary mt-2 mb-6 leading-snug">
            Turning data into decisions.
          </p>

          {/* Bio */}
          <p className={`${styles.heroSubText} max-w-xl`}>
            I design pipelines, build dashboards, and surface the insights
            that move strategy forward. UC&nbsp;Davis CS&nbsp;·&nbsp;Springboard
            Analytics&nbsp;·&nbsp;MIT Data Science — based in California.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="font-mono text-label font-semibold px-6 py-3 rounded-lg bg-accent text-primary hover:bg-accent/90 transition-colors"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="font-mono text-label px-6 py-3 rounded-lg border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <a href="#about" aria-label="Scroll to About">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop" }}
              className="w-[1px] h-10 bg-gradient-to-b from-accent/60 to-transparent"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
