import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const EducationCard = ({ edu, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.1 * index, 0.6)}
    className="card-glow bg-surface rounded-xl p-5 flex items-start gap-4"
  >
    {/* Logo tile — white bg so logos with white canvas render cleanly on dark card */}
    <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-white flex items-center justify-center overflow-hidden">
      <img
        src={edu.logo}
        alt={edu.institution}
        className="w-full h-full object-contain p-1.5"
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
    </div>
    <div className="min-w-0">
      <p className="font-heading font-semibold text-text-primary text-[15px] leading-snug">
        {edu.degree}
      </p>
      <p className="font-mono text-accent text-[11px] uppercase tracking-widest mt-1.5">
        {edu.institution}
      </p>
      <p className="font-mono text-text-muted text-[11px] mt-1">{edu.date}</p>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Credentials</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-10 grid sm:grid-cols-3 grid-cols-1 gap-4">
        {education.map((edu, index) => (
          <EducationCard key={index} edu={edu} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
