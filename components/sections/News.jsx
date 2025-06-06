import React from 'react'
import styles from '@/styles/sections/News.module.css'

const News = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Our Insightful <span>Blog</span></h1>
          <p>Discover stories, research, and innovations from the heart of the community and nature-based solutions.</p>
        </div>

        <div className={styles.news}>
          <div className={styles.highlighted}>
            <img src="/images/explore-bg.svg" alt="Stories from the Field" />
            <div className={styles.overlay}>
              <h3>Stories from the Field</h3>
              <p className={styles.date}>May 30, 2025</p>
              <p>Real-life experiences from coastal communities who protect and live in harmony with mangrove ecosystems.</p>
            </div>
          </div>

          <div className={styles.listed}>
            <div className={styles.item}>
              <img src="/images/explore1.png" alt="Research Initiatives" />
              <div className={styles.text}>
                <h4>Research and Community Initiatives</h4>
                <p className={styles.date}>May 28, 2025</p>
                <a href="#">Read More →</a>
              </div>
            </div>

            <div className={styles.item}>
              <img src="/images/explore2.png" alt="Mangrove Products" />
              <div className={styles.text}>
                <h4>Features on Sustainable Mangrove-based Products</h4>
                <p className={styles.date}>May 25, 2025</p>
                <a href="#">Read More →</a>
              </div>
            </div>

            <div className={styles.item}>
              <img src="/images/explore3.png" alt="Mangrove Honey" />
              <div className={styles.text}>
                <h4>Harvesting Mangrove Honey and Batik Craftsmanship</h4>
                <p className={styles.date}>May 20, 2025</p>
                <a href="#">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
