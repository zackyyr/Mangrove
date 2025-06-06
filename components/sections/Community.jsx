import React from 'react'
import styles from '@/styles/sections/Community.module.css'
import PrimaryBtn from '../PrimaryBtn'

const Community = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textSection}>
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
        </div>

        <div className={styles.imageSection}>
          <img src="/images/collab.svg" alt="Community collaboration" />
        </div>
      </div>
    </div>
  )
}

export default Community
