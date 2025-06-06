import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '@/styles/sections/News.module.css'

const News = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.25,
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <motion.div
      className={styles.container}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div className={styles.wrapper} variants={itemVariants}>
        <motion.div className={styles.header} variants={itemVariants}>
          <h1>
            Our Insightful <span>Blog</span>
          </h1>
          <p>
            Discover stories, research, and innovations from the heart of the community and nature-based
            solutions.
          </p>
        </motion.div>

        <motion.div className={styles.news} variants={itemVariants}>
          <motion.div className={styles.highlighted} variants={itemVariants}>
            <img src="/images/explore-bg.svg" alt="Stories from the Field" />
            <div className={styles.overlay}>
              <h3>Stories from the Field</h3>
              <p className={styles.date}>May 30, 2025</p>
              <p>
                Real-life experiences from coastal communities who protect and live in harmony with mangrove
                ecosystems.
              </p>
            </div>
          </motion.div>

          <motion.div className={styles.listed} variants={itemVariants}>
            {[
              {
                src: "/images/explore1.png",
                alt: "Research Initiatives",
                title: "Research and Community Initiatives",
                date: "May 28, 2025",
                href: "#"
              },
              {
                src: "/images/explore2.png",
                alt: "Mangrove Products",
                title: "Features on Sustainable Mangrove-based Products",
                date: "May 25, 2025",
                href: "#"
              },
              {
                src: "/images/explore3.png",
                alt: "Mangrove Honey",
                title: "Harvesting Mangrove Honey and Batik Craftsmanship",
                date: "May 20, 2025",
                href: "#"
              }
            ].map(({ src, alt, title, date, href }, i) => (
              <motion.div
                key={i}
                className={styles.item}
                variants={itemVariants}
                transition={{ delay: i * 0.15, duration: 0.5, ease: 'easeOut' }}
              >
                <img src={src} alt={alt} />
                <div className={styles.text}>
                  <h4>{title}</h4>
                  <p className={styles.date}>{date}</p>
                  <a href={href}>Read More →</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default News
