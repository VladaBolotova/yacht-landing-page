'use client';


import { motion } from 'framer-motion';


import styles from '../styles';
import {  staggerContainer, fadeIn, planetVariants} from '../utils/motion';
import {NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from "../constants"

const WhatsNew = () => (
  <section className={`${styles.paddings} relative
  z-10`}>
  <motion.div
  variants={staggerContainer}
  initials="hidden"
  whileInView="show"
  viewport={{once: 'false', amount: 0.25}}
  className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>

  
    <motion.div
    variants={fadeIn('left', 'tween', 0.2, 1)}
    className="flex-[0.75] flex justify-center
    flex-col"
    >
      <div className="mt-[8px]  sm:text-[40 px] text-[40px]
text-center text-secondary-white"> Contact us.
</div>
<div className="mt-[48px] flex flex-wrap justify-between justify-center sm:justify-between gap-[26px]">
  {newFeatures.map((feature, index) => (
    <NewFeatures key={feature.title} {...feature} className="text-center" />
  ))}
</div>


    </motion.div>

    <motion.div
    variants={planetVariants('right')}
    className={`flex-1 ${styles.flexCenter}`}>
      <img
      src="/7.jpg"
      alt="get-started"
      className="w-[90%] h-[90%] rounded-l-[20px] rounded-r-[20px]   w-[1000px] sm:h-[500px] h-[600px] objectcover"/>

    </motion.div>
  </motion.div>
  </section>
);

export default WhatsNew;
