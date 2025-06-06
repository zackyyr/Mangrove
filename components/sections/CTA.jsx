import React from 'react'
import styles from '@/styles/sections/CTA.module.css'
import PrimaryBtn from '../PrimaryBtn'

const CTA = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Join the Green Movement</h2>
        <p className={styles.subtitle}>
          Together, we restore what’s lost and strengthen what remains.
        </p>
        <p className={styles.description}>
          Be part of the movement defending our coastlines.
        </p>
        <div className={styles.buttons}>
          <PrimaryBtn showArrow={true} width=''>Donate Now</PrimaryBtn>
          <button className={styles.secondaryBtn}>Book a Tour</button>
          <button className={styles.secondaryBtn}>Volunteer or Collaborate</button>
        </div>
      </div>
    </div>
  )
}

export default CTA
