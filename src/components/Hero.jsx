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
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           I couldn't decide if I liked numbers or art more... <br className='sm:block hidden' />
           So I became a Software Developer!
          </p>    
        </div>

      </div>

      <ComputersCanvas/>
    </section>
  )
}

export default Hero