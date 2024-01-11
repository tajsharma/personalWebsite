import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-none bg-[#000000]'/>
          <div className='w-1 sm:h-80 h-40 alt-black-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi there! I'm<span className='text-[#a656e8] font-bold'> Taj!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#515151]`}>
           Welcome to my portfolio :) <br className='sm:block hidden' />
           Here you'll find some of my coolest works as a Software Developer!
          </p>    
        </div>

      </div>

      <ComputersCanvas/>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className = "w-[35px] h-[63px] rounded-3xl border-black border-4 border-secondary flex justify-center  items-start p-2">
          <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-black mb-1'
            />
          </div>
        </a>

      </div>

    </section>
  )
}

export default Hero