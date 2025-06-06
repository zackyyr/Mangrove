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
            <p>Leading Families Toward a Greener Tomorrow</p>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover the story, values, and dedicated team behind our mission to connect generations through nature-driven experiences.
          </motion.h2>
        </div>

        <div className={styles.cta}>
          <PrimaryBtn showArrow={true}>Discover More</PrimaryBtn>
        </div>
      </div>

      <div className={styles.cards}>
        <Card
          className={styles.card}
          iconClass="ri-tree-line"
          heading="Our Background"
          text="Learn about the roots of our initiative and how our commitment to family-nature bonding has grown into a movement."
        />
        <Card
          className={styles.card}
          iconClass="ri-lightbulb-flash-line"
          heading="Vision & Mission"
          text="We aim to inspire every generation to protect nature by creating meaningful and accessible family-centered experiences."
        />
        <Card
          className={styles.card}
          iconClass="ri-service-fill"
          heading="Partner Institutions"
          text="In proud collaboration with Unram, ARC, and community groups, we build stronger bonds between people and the planet."
        />
        <Card
          className={styles.card}
          iconClass="ri-group-line"
          heading="Team & Advisory Board"
          text="Meet the passionate individuals and expert advisors guiding our programs, grounded in care, science, and sustainability."
        />
      </div>
    </div>
  )
}

export default About
