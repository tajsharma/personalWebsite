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
    <div className="w-2 h-2 rounded-full bg-accent mt-[6px] flex-shrink-0" />
    <div>
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
