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

    <img
src="/search.svg"
alt="Search"
className="w-2[24px] h-[24px] object-contain"/>
<h2 className='font-extrabold text-[24px]  text-white '>
GEM LUXURY EXPERIENCE

</h2>
<imd
src="/menu.svg"
alt="menu"
className="w-[24px] object-contain"
/>
<img
src="/menu.svg"
alt="Search"
className="w-2[24px] h-[24px] object-contain"/>


    </div>
    
  </motion.div>
);

export default Navbar;
