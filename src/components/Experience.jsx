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
          <h3 className="font-heading font-bold text-text-primary text-[17px] leading-snug">
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

      <div className="mt-12 flex flex-col">
        {experiences.map((exp, index) => {
          const isFirst = index === 0;
          const isLast = index === experiences.length - 1;
          const year = exp.date.match(/\d{4}/)?.[0] ?? "";
          return (
            <div key={index} className="flex items-stretch sm:gap-8">
              {/* Timeline column — desktop only */}
              <div className="hidden sm:flex flex-col items-center w-14 shrink-0">
                {/* Top spacer / connecting line from previous row */}
                {isFirst ? (
                  <div className="h-6 shrink-0" />
                ) : (
                  <div className="h-6 w-px bg-accent/30 shrink-0" />
                )}
                {/* Node dot */}
                <div
                  className="w-2.5 h-2.5 rounded-full bg-accent shrink-0"
                  style={{ boxShadow: "0 0 0 3px #050816" }}
                />
                {/* Year label */}
                <span className="font-mono text-[10px] text-accent mt-1.5 shrink-0 tracking-wide leading-none">
                  {year}
                </span>
                {/* Connecting line down to next card */}
                {!isLast && (
                  <div className="flex-1 w-px bg-accent/30 mt-2" />
                )}
              </div>

              {/* Card */}
              <div className={`flex-1 min-w-0 ${!isLast ? "pb-5" : ""}`}>
                <ExperienceCard experience={exp} index={index} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
