'use client';


import { motion } from 'framer-motion';
import { TypingText } from '../components'

import styles from '../styles';
import { fadeIn, staggerContainer} from '../utils/motion';

const About = () => (
  <section className={`${styles.padding} relative z-10`}
  >
    <div className="gradient-02 z-0"/>
    
    <motion.div
    variants={staggerContainer}
    initials="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>

<motion.div title="| About Metaversus"
textStyles="text-center" />
<motion.p
variants={fadeIn('up', 'tween', 0.2, 1)}
className="mt-[8px] font-normal sm:text-[32 px] text-[20px]
text-center text-secondary-white">
   As powerful as it is graceful, the 68 Sport   <span className="font-extrabold
  text-white">
     Yacht
  </span> is a classic example of Sunseeker innovation. The streamlined shape.
   The 36 knot top speed. The unmistakable style. They’re all   <span className="font-extrabold
  text-white">
    Sunseeker
  </span> trademarks. 
   In fact, everything about this remarkable   <span className="font-extrabold
  text-white">
     Sport Yacht
  </span> is the result of years of dedication and an unwavering desire to produce the best. 
   Inside, the main saloon has everything you could wish for; state-of-the-art entertainment systems, high quality fabrics and plenty of natural light. 
   It’s the perfect entertainment space. Below deck, the guest cabins are equally impressive while outside, lavishness is taken to a whole new level thanks to the large sunpads both fore and aft.
   When first impressions count, this impeccable   <span className="font-extrabold
  text-white">
     yacht
  </span> always delivers.



</motion.p>

<motion.img
variants={fadeIn('up', 'tween', 0.3, 1)}
src="/arrow-down.svg"
alt="arrow down"
className="w-[18px] h-[28px] object-contain mt-[28px]">

</motion.img>
    </motion.div>

  </section>
);

export default About;
