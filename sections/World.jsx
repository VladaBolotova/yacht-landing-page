'use client';

import { motion } from 'framer-motion';


import styles from '../styles';
import {  staggerContainer, fadeIn} from '../utils/motion';
import { TitleText, TypingText } from '../components';


const World = () => (
  <section className={`${styles.paddings} relative
  z-10`}>   <div className="mt-[8px] font-extrabold sm:text-[40 px] text-[40px]
text-center text-secondary-white">

      Yacht Vacation of a Lifetime with your friends!
      </div>
  <motion.div
  variants={staggerContainer}
  initials="hidden"
  whileInView="show"
  viewport={{once: 'false', amount: 0.25}}
  className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
 

      <motion.div
      variant={fadeIn('up', 'tween', 0.3, 1)}
      className="relative mt-[68px] flex w-full h-[550px]">
<img
src="/map.png"
alt="map"
className="w-full h-full object-cover">
</img>
<div className="absolute bottom-20 right-20 
w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
  <img
  src="people-01.png" 
  alt="people"
  className="w-full h-full">
  </img>

</div>
<div className="absolute top-10 left-20 
w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
  <img
  src="people-02.png" 
  alt="people"
  className="w-full h-full">
  </img>

</div>
<div className="absolute top-1/2 left-[45%] 
w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
  <img
  src="people-03.png" 
  alt="people"
  className="w-full h-full">
  </img>

</div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
