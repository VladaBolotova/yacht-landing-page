'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.div 
        className="flex flex-row justify-center items-center">
     

{/* <style jsx>{`
  .heroHeading {
    font-size: 3rem;
    text-align: center;
  }

  @media screen and (min-width: 640px) {
    .heroHeading {
      font-size: 2rem;
      text-align: center;
    }
  }
`}</style> */}

        </motion.div>
      </div>
      <div
      className="relative w-full md: -mt-[20px] -mt-[12px]">
      <div className="absolute w-full h- [300px] hero-gradient rounded-tl-[140px] z-[0 -top-[30px]"/>
      <div className="text-white text-center py-4 py-md-8 font-extrabold text-4xl text-md-10xl">
  LUXURY YACHT EXPERIENCE
</div>

      <img
  src="/ph.jpg"
  className="w-full h-full sm:h-[500px] h-[350px] object-cover rounded-[24px] sm:pr-[10px] sm:px-[10px] "
  />

 

{/* <style jsx>{`
  @media screen and (min-width: 640px) {
    img {
      width: 1200px;
      height: 700px;
    }
  }
`}</style> */}

  <a href="#explore">
    <div className="w-full flex justify-end
    sm: -mt-[70px] -mt-[50px] pr-[40px] relative z-10">
    </div>
  </a>
      </div>
      </motion.div>
  </section>
);

export default Hero;
