import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/sections/Explore.module.css'
import PrimaryBtn from '../PrimaryBtn'
import NavBtn from '../NavBtn'
import Image from 'next/image'

const exploreData = [
  {
    label: "Interactive GIS-based Map",
    icon: "map-pin-line",
    image: "/images/explore1.png",
    heading: "Explore Mangrove Zones",
    description: "Dive into an interactive, GIS-powered map that highlights Indonesia's mangrove ecosystems. Discover areas of dense mangrove coverage, zones impacted by coastal erosion, and key locations prioritized for restoration and replanting efforts. Ideal for researchers, conservationists, and planners seeking actionable environmental data."
  },
  {
    label: "Education Hub",
    icon: "graduation-cap-line",
    image: "/images/explore2.png",
    heading: "Virtual Learning Center",
    description: "Access an engaging educational portal offering virtual 360° mangrove tours, live webinars, and recorded conferences. Join forums tailored for youth, researchers, and community members to collaborate, share insights, and raise awareness about mangrove conservation through science-backed content."
  },
  {
    label: "Mangrove Adoption & Donation",
    icon: "plant-line",
    image: "/images/explore3.png",
    heading: "Adopt a Mangrove Tree",
    description: "Support coastal restoration by adopting mangrove trees in specific regions. Receive regular photo updates, growth reports, digital certificates, and unique badges as a token of your contribution. Our transparent donor dashboard ensures you can track the real-world impact of every tree you help grow."
  },
  {
    label: "Eco-Educational Tourism",
    icon: "compass-3-line",
    image: "/images/explore4.png",
    heading: "Experience Mangroves Firsthand",
    description: "Embark on immersive mangrove eco-tours guided by certified local Pokdarwis groups. Enjoy canoeing through lush forests, participate in hands-on tree planting, and savor authentic local cuisine. Perfect for families, schools, and researchers seeking meaningful travel with environmental impact."
  }
]

const Explore = () => {
  const [selected, setSelected] = useState(0)

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }

  const imageFadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className={styles.heading}>
            A One-Stop Platform to Learn, Contribute, and Explore Indonesia’s <span className={styles.greens}>Mangrove System.</span>
          </div>

          <div className={styles.cta}>
            <p>From interactive maps and virtual tours to tree adoption and eco-educational tourism—discover how you can learn, contribute, and experience the mangrove ecosystem firsthand. Join our mission to protect, restore, and celebrate our coastal guardians.</p>
            <PrimaryBtn showArrow={true} width=''>Book Your Tour</PrimaryBtn>
          </div>
        </motion.div>

        <div className={styles.explores}>
          <div className={styles.exploreNav}>
            {exploreData.map((item, index) => (
              <NavBtn 
                key={index}
                label={item.label}
                icon={item.icon}
                isActive={selected === index}
                onClick={() => setSelected(index)}
              />
            ))}
          </div>

          <motion.div 
            className={styles.exploreDesc}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            key={selected} // to re-trigger animation on change
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageFadeIn}
              className={styles.imageWrapper}
            >
              <Image 
                src={exploreData[selected].image} 
                alt={exploreData[selected].heading}
                width={400}
                height={300}
                className={styles.exploreImage}
              />
            </motion.div>

            <div className={styles.textContent}>
              <h3>{exploreData[selected].heading}</h3>
              <p>{exploreData[selected].description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Explore
