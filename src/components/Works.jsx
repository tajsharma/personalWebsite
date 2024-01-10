import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className = {styles.sectionSubText}>More of my work!</p>
        <h2 className = { styles.sectionHeadText}>Personal Projects</h2>
      </motion.div>

      <div className="w-full-flex">
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >         
          The following projects highlight my skills and experience as a software engineer,
          showcasing real-world examples of my work. Each project is briefly described with
          links to code repositories, demonstrating my ability to tackle 
          intricate technical challenges, work with a variety of technologies, and 
          effectively manage projects.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </>
  )
}


export default SectionWrapper(Works, "");