'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.div
  variants={navVariants}
  initials="hidden"
  whileInView="show"
  className={`${styles.xPaddings} py-10 relative`}>
    <div className='absolute w-[50%] inset-0 gradient-01'/>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <div
      className='text-white'>
300 Alton road, Slip F22
      </div>
      <div
      className='text-white'>
Miami Beach, Florida
      </div>
    </div>
    
  </motion.div>
);

export default Navbar;
