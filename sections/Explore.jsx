'use client';

import { motion } from 'framer-motion';
import { useState } from 'react'

import styles from '../styles';
import {  staggerContainer} from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { explorWorlds } from "../constants"

const Explore = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
    variants={staggerContainer}
    initials="hidden"
    whileInView="show"
    viewport={{once: false, amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title="| The world"
      textStyles="text-center"/>
      <TitleText title={<>Choose the world you want
      <br className="md:block hidden" />to explore</>}
      textStyles=""text-center/>

    </motion.div>
    Explore section
  </section>
);

export default Explore;
