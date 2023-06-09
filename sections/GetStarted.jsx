'use client';

import { motion } from 'framer-motion';


import styles from '../styles';
import {  staggerContainer, fadeIn, planetVariants} from '../utils/motion';
import {StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from "../constants"

const GetStarted = () => (
  <section className={`${styles.paddings} relative
  z-10`}>
  <motion.div
  variants={staggerContainer}
  initials="hidden"
  whileInView="show"
  viewport={{once: 'false', amount: 0.25}}
  className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>

    <motion.div
    variants={planetVariants('left')}
    className={`flex-1 ${styles.flexCenter}`}>
      <img
      src="/get6.jpg"
      alt="get-started"
      className="w-[600px] h-[400px] rounded-l-[20px] rounded-r-[20px]   w-[1000px] sm:h-[600px] h-[350px] objectcover "/>

    </motion.div>
    <motion.div
    variants={fadeIn('left', 'tween', 0.2, 1)}
    className="flex-[0.75] flex justify-center
    flex-col"
    >
      <div className="mt-[8px]  sm:text-[40 px] text-[40px]
text-center text-secondary-white"> Prices:
      <div title={<>Get started with just a few clicks</>} />
      <div className='sm:-[20px] text-[24px]'>
         4 hours-3750$
      </div>
      <div className='sm:-[20px] text-[24px]'>
         6 hours-4250$
      </div>
      <div className='sm:-[20px] text-[24px]'>
       8 hours-5000$
      </div>
</div>
<div
className="pt-4 sm:pt-8 mt-[8px] font-normal sm:text-[20px] text-[20px] text-center justify-center text-secondary-white mt-[31px]   max-w-[1200px]
gap-[24px] sm:px-4">
  {startingFeatures.map((feature, index) => (
    <StartSteps
  
  
    text={feature}
    />
 ))}

</div>
<a href="https://www.imagevenue.com/upload/complete?session=f0909de0b72eef74477d4872cbafa747" className="block mt-8 text-secondary-white font-bold text-center hover:underline">Click to see more pictures.</a>
    </motion.div>
  </motion.div>
  </section>
);

export default GetStarted;
