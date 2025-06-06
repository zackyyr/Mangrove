// components/Card.js
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from '@/styles/components/Cards.module.css'

const Card = ({ iconClass, heading, text }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.iconWrapper}>
        <i className={iconClass} aria-hidden="true"></i>
      </div>
      <div className={styles.content}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </motion.div>
  )
}

export default Card
