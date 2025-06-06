import React from 'react'
import styles from '@/styles/sections/Team.module.css'
import Card2 from '../Card2'
import PrimaryBtn from '../PrimaryBtn'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Meet Our Guardians.</h1>
        <p>
          Behind every healthy coastline are the silent heroes—local stewards, fishermen, mothers, and young people.
          <br />
          We call them, <span>The Mangrove Coast Guards.</span>{' '}
        </p>
      </div>

      <motion.div
        className={styles.cards}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} 
      >
        <motion.div variants={cardVariants}>
          <Card2
            imageSrc="/images/team-1.jpg"
            name="Honey Alya"
            role="Chair of Eko Wisata Mangrove Sigar Penjalin"
            description="Leads immersive mangrove ecotourism while inspiring the next generation."
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <Card2
            imageSrc="/images/team-2.jpg"
            name="Aprizal"
            role="Tembobor Mangrove Tourism Group"
            description="Mobilizes his community through zone-based conservation and environmental education."
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <Card2
            imageSrc="/images/team-3.jpg"
            name="Pak Jumar"
            role="Local Hero & Shoreline Guardian of Tembobor"
            description="Walks the coastline each morning to protect the mangroves with tireless dedication."
          />
        </motion.div>
      </motion.div>

      <div className={styles.cta}>
        <PrimaryBtn showArrow={true} width=''>See More Stories</PrimaryBtn>
      </div>
    </div>
  )
}

export default Team
