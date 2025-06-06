'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/sections/Hero.module.css'
import PrimaryBtn from '@/components/PrimaryBtn'

// Variants

const blurFadeIn = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)', 
    transition: { duration: 1.4, ease: 'easeOut' }
  },
}
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const hero = () => {
  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
    <motion.div className={styles.header} initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h1 variants={blurFadeIn}>
        Connecting Families with Nature Through Meaningful Experiences.
      </motion.h1>
      <motion.p variants={fadeUp}>
        MangroveCoastGuard, is a digital conservation platform connecting science, coastal communities, and global action to protect mangrove forests—the living roots of our coastlines
      </motion.p>
    </motion.div>


      <motion.div className={styles.ctas} variants={fadeUp}>
        <a href="#Explore The Map">
          <PrimaryBtn showArrow={true} width="220px">Explore The Map</PrimaryBtn>
        </a>
        <a href="#Adopt a Tree">
          <PrimaryBtn showArrow={true} width="220px">Adopt a Tree</PrimaryBtn>
        </a>
        <a href="#Book a Tour">
          <PrimaryBtn showArrow={true} width="220px">Book a Tour</PrimaryBtn>
        </a>
        <a href="#Meet The Guardians">
          <PrimaryBtn showArrow={true} width="220px">Meet The Guardians</PrimaryBtn>
        </a>
      </motion.div>

      <motion.div className={styles.heroCards} variants={containerVariants}>
        <motion.div className={styles.card1} variants={fadeUp}>
          <img src="images/hero-img-1.png" alt="Family exploring nature together" />
          <div className={styles.cardText}>
            <h3>Experience Nature’s Wonders</h3>
            <p>
              Embark on unforgettable adventures designed to spark curiosity, laughter, and connection across generations.
            </p>
            <a href="">Discover More</a>
          </div>
        </motion.div>

        <motion.div className={styles.card2} variants={fadeUp}>
          <img src="images/hero-img-2.svg" alt="Interactive learning in nature" />
          <h3>Engage, Learn, and Grow</h3>
          <p>
            Foster meaningful memories through hands-on activities and thoughtful programs that bring families closer.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default hero
