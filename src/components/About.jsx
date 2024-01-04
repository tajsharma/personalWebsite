import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index, title, icon}) => {
  return (
    <p>{title}</p>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants = {textVariant()}>
        <p className = {styles.sectionSubText}>Introduction</p>
        <h2 className = { styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variant = {fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
          👋 Hi there! I'm Taj, a passionate Software Developer dedicated 
          to turning complex problems into elegant solutions. In this corner of the
          internet, you'll discover the fusion of my creativity and technical skills.
          Whether you're here to explore my portfolio, seek collaboration, or just
          to satisfy your curiosity about the latest in tech, you've come to the right place.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>

  )
}

export default About