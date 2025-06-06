import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/sections/About.module.css'
import PrimaryBtn from '../PrimaryBtn'
import Card from '../Card'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.heading}>
          <div className={styles.taglines}>
            <i className="ri-bard-fill"></i>
            <p>About the initiative</p>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Powered by Universitas Mataram and Archipelagic, this platform unites scientists, communities, and youth in a digital ecosystem to:
          </motion.h2>
        </div>

        <div className={styles.cta}>
          <PrimaryBtn showArrow={true}>Learn More</PrimaryBtn>
        </div>
      </div>

      <div className={styles.cards}>
  <Card
    className={styles.card}
    iconClass="ri-map-pin-line"
    heading="Spatial Mangrove Data"
    text="Provide GIS-based spatial data on mangrove distribution, degradation, and restoration."
  />
  <Card
    className={styles.card}
    iconClass="ri-hand-heart-line"
    heading="Transparent Donations"
    text="Channel transparent, location-specific donations and mangrove adoptions."
  />
  <Card
    className={styles.card}
    iconClass="ri-earth-line"
    heading="Eco-Educational Tourism"
    text="Enable eco-educational tourism guided by trained local groups (Pokdarwis)."
  />
  <Card
    className={styles.card}
    iconClass="ri-shield-user-line"
    heading="Local Heroes"
    text="Celebrate and support local heroes who protect Indonesia’s coastlines."
  />
</div>

    </div>
  )
}

export default About
