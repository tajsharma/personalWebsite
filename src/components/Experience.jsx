import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.12 * index, 0.6)}
    className="card-glow bg-surface rounded-2xl overflow-hidden"
  >
    {/* ── Header: role, company, date ── */}
    <div className="p-6 border-b border-border flex flex-wrap items-start justify-between gap-4">
      <div className="flex items-center gap-4">
        {/* Icon / initials badge */}
        <div
          className="w-11 h-11 rounded-xl border border-border flex items-center justify-center flex-shrink-0"
          style={{ background: experience.iconBg }}
        >
          {experience.icon ? (
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[65%] h-[65%] object-contain"
            />
          ) : (
            <span className="font-mono font-bold text-accent text-[13px]">
              {experience.iconText}
            </span>
          )}
        </div>

        {/* Title + company */}
        <div>
          <h3 className="font-display font-bold text-text-primary text-[17px] leading-snug">
            {experience.title}
          </h3>
          <p className="font-mono text-accent text-[11px] uppercase tracking-widest mt-1">
            {experience.company_name}
          </p>
        </div>
      </div>

      {/* Date — wraps below on narrow screens via flex-wrap on parent */}
      <span className="font-mono text-text-muted text-[12px] whitespace-nowrap mt-0.5">
        {experience.date}
      </span>
    </div>

    {/* ── Bullets ── */}
    <ul className="p-6 space-y-3">
      {experience.points.map((point, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-accent text-[18px] leading-none mt-[2px] flex-shrink-0">·</span>
          <p className="text-text-secondary text-[14px] leading-relaxed">{point}</p>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Work History</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-5">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
