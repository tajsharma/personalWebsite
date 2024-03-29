import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants= {fadeIn("right", "spring" , 0.5*index, .75)}
        className="w-full green-pink-gradient p-[5px] rounded-[20px] shadow-card"
        >
          <div
          options={{
            max:45,
            scale: 1,
            speed: 450
          }}
          className="rounded-[20px] py-5 min-h-[280px] flex justify-evenly
                     items-center flex-col"
          >
            <img src={icon} alt={title} className="w-[90px] h-[90px] object-contain"/>
            <h3 className="text-white text-[15px] font-bold text-center">{title}</h3>

          </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants = {textVariant()}>
        <p className = {styles.sectionSubText}>you might be wondering..</p>
        <h2 className = { styles.sectionHeadText}>Who am I?</h2>
      </motion.div>

      <motion.p
        variant = {fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
          👋 Hi there! I'm Taj, a passionate Software Developer and recent grad from 
          <span className="font-[900] text-[#ffa600]"> UC Davis </span> 
          dedicated to turning complex problems into elegant solutions. In this corner of the
          internet, you'll discover the fusion of my creativity and technical skills.
          Whether you're here to explore my portfolio, seek collaboration, or just
          to satisfy your curiosity about the latest in tech, you've come to the right place.
          <span className="font-[500] text-white"> Here are a few of the 'monikers' I go by:</span>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>

  )
}

//export default About;
export default SectionWrapper(About, "about");