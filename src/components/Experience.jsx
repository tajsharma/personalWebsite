import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#0D1117",
      border: "1px solid #1E2D3D",
      borderRadius: "16px",
      boxShadow: "0px 4px 32px -4px rgba(129, 140, 248, 0.08)",
      color: "#F1F5F9",
      padding: "1.5rem",
    }}
    contentArrowStyle={{ borderRight: "7px solid #1E2D3D" }}
    date={
      <span className="font-mono text-text-muted text-[12px] tracking-wide">
        {experience.date}
      </span>
    }
    iconStyle={{
      background: experience.iconBg,
      border: "2px solid #1E2D3D",
      boxShadow: "0 0 0 3px #050816",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {experience.icon ? (
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        ) : (
          <span className="font-display font-bold text-accent text-[14px] tracking-tight">
            {experience.iconText}
          </span>
        )}
      </div>
    }
  >
    <div>
      <h3 className="font-display font-bold text-text-primary text-[19px] leading-snug">
        {experience.title}
      </h3>
      <p
        className="font-mono text-accent text-[12px] uppercase tracking-widest mt-1"
        style={{ margin: "6px 0 0 0" }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-4 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`exp-point-${index}`}
          className="text-text-secondary text-[14px] pl-1 leading-relaxed"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const EducationCard = ({ edu, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.1 * index, 0.6)}
    className="card-glow bg-surface rounded-xl p-5 flex items-start gap-4"
  >
    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
    <div>
      <p className="font-display font-semibold text-text-primary text-[15px] leading-snug">
        {edu.degree}
      </p>
      <p className="font-mono text-accent text-[12px] uppercase tracking-widest mt-1">
        {edu.institution}
      </p>
      <p className="font-mono text-text-muted text-[11px] mt-1">{edu.date}</p>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Work History</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className="mt-12">
        <VerticalTimeline lineColor="#1E2D3D">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>

      {/* Education */}
      <div className="mt-20">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Credentials</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
