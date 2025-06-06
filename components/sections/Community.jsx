import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '@/styles/sections/Community.module.css'
import PrimaryBtn from '../PrimaryBtn'

const Community = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.textSection}
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          <h2>Community & Collaboration</h2>
          <p>Let’s work together to strengthen mangrove conservation efforts. Connect with local partners, submit reports, or join hands in our mission.</p>
          
          <ul className={styles.features}>
            <li>Directory of local groups and partners</li>
            <li>Submit reports of mangrove damage or illegal logging</li>
            <li>Join open calls for collaboration and volunteering</li>
          </ul>

          <a href=""><PrimaryBtn showArrow={true}>Start Exploring</PrimaryBtn></a>

          <div className={styles.tags}>
            <span>🌿 Local Action</span>
            <span>📣 Report Issues</span>
            <span>🤗 Volunteer</span>
            <span>🌍 Collaborate</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.imageSection}
          variants={imageVariants}
          initial="hidden"
          animate={controls}
        >
          <img src="/images/collab.svg" alt="Community collaboration" />
        </motion.div>
      </div>
    </div>
  )
}

export default Community
