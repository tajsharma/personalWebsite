import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { skillGroups } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const SkillGroup = ({ group, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.12 * index, 0.6)}
    className="card-glow bg-surface rounded-2xl p-6"
  >
    <h3 className="font-mono text-accent text-label uppercase tracking-widest mb-5">
      {group.category}
    </h3>
    <div className="flex flex-wrap gap-2">
      {group.skills.map((skill) => (
        <div key={skill.name} className="accent-chip rounded-lg px-3 py-2">
          <span className="font-mono text-[13px] font-medium">{skill.name}</span>
          {skill.detail && (
            <span className="font-mono text-[11px] text-text-muted ml-1">
              · {skill.detail}
            </span>
          )}
        </div>
      ))}
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {skillGroups.map((group, index) => (
          <SkillGroup key={group.category} group={group} index={index} />
        ))}
      </div>
    </>
  );
};

// id="skills" so the nav link #skills scrolls here
export default SectionWrapper(Tech, "skills");
