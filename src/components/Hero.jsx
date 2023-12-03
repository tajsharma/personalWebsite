import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#000000]'/>
          <div className='w-1 sm:h-80 h-40 alt-black-gradient'/>
        </div>

        <div>
          <h1 className='font-bold text-black'>
            Hi, my name is <span className='text-[#ff7ae1] font-bold'> Taj!</span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero