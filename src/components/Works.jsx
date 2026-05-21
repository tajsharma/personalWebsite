import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { github } from "../assets";

// Metric callout — $41M gets risk-text (red), 1st gets positive (green), neutral gets accent
const MetricCallout = ({ metric }) => {
  const colorClass =
    metric.type === "negative"
      ? "risk-text"
      : metric.type === "positive"
      ? "text-positive"
      : "text-accent";

  return (
    <div className="mb-1">
      <p className={`font-mono font-bold leading-none text-[2rem] sm:text-[2.25rem] ${colorClass}`}>
        {metric.value}
      </p>
      <p className="font-mono text-text-muted text-[11px] uppercase tracking-widest mt-1.5">
        {metric.label}
      </p>
    </div>
  );
};

const ProjectCard = ({ project, featured }) => {
  const hasTodoLink = !project.source_code_link;

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.1, 0.55)}
      className="card-glow bg-surface rounded-2xl overflow-hidden flex flex-col h-full"
    >
      {/* Card header — context, badge, metric */}
      <div className="bg-primary/60 border-b border-border px-6 pt-6 pb-5">
        <div className="flex items-start justify-between gap-3">
          <p className="font-mono text-text-muted text-[11px] uppercase tracking-widest">
            {project.context}
          </p>
          {featured && (
            <span className="flex-shrink-0 font-mono text-[10px] text-accent border border-accent/30 bg-accent/5 px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
        </div>
        {project.metric && (
          <div className="mt-4">
            <MetricCallout metric={project.metric} />
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-text-primary text-[18px] leading-snug mb-3">
          {project.name}
        </h3>
        <p className="text-text-secondary text-[14px] leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className="accent-chip rounded-md px-2.5 py-1 font-mono text-[11px]"
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {/* Link button */}
        <div className="mt-5">
          {hasTodoLink ? (
            // TODO: add project link — replace `disabled` button with real href when available
            <button
              disabled
              className="w-full font-mono text-[12px] text-text-muted border border-border/50 rounded-lg py-2.5 cursor-not-allowed opacity-50 select-none"
            >
              Project link coming soon
            </button>
          ) : (
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full font-mono text-[12px] text-text-secondary border border-border rounded-lg py-2.5 hover:border-accent hover:text-accent transition-colors"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-text-secondary text-[17px] max-w-3xl leading-relaxed"
      >
        Analytics and data engineering projects — pipelines, dashboards, and
        models that surface insight from real-world data.
      </motion.p>

      {/* Featured grid */}
      <div className="mt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {featured.map((project) => (
          <ProjectCard key={project.name} project={project} featured />
        ))}
      </div>

      {/* Divider */}
      {secondary.length > 0 && (
        <>
          <div className="mt-16 mb-10 flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <p className="font-mono text-text-muted text-[11px] uppercase tracking-widest whitespace-nowrap">
              Earlier Work
            </p>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Secondary grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
            {secondary.map((project) => (
              <ProjectCard key={project.name} project={project} featured={false} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SectionWrapper(Works, "projects");
