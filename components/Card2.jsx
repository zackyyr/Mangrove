import React from 'react'
import styles from '@/styles/components/Cards2.module.css'

const Card2 = ({ imageSrc, name, role, description }) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={name} className={styles.image} />
      <div className={styles.text}>
        <h3>{name}</h3>
        <span>— {role}</span>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card2
