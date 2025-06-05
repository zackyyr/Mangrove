
import React, { useState, useEffect } from 'react'
import styles from '@/styles/components/Navbar.module.css'
import PrimaryBtn from './PrimaryBtn'
import Image from 'next/image'


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className={`${styles.container} ${isSticky ? styles.sticky : ''}`}>
      <div className={`${styles.navbar} ${isSticky ? styles.stickyNavbar : ''}`}>
        <div className={styles.logo}>
           <a href=""><Image 
              src={isSticky ? "/LogoPrimary.svg" : "/LogoWhite.svg"} 
              alt="Mangrove Logo" 
              width={140} 
              height={40} 
            />
            </a>
        </div>

        <div className={`${styles.links} ${isMobileMenuOpen ? styles.showMenu : ''}`}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#guardians">Guardians</a></li>
            <li><a href="#map">Map</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#eco">Eco-Tourism</a></li>
            <li><a href="#news">News</a></li>
          </ul>
        </div>

        <div className={styles.cta}>
           <PrimaryBtn fontSize='15px' width='160px'>Adopt & Donate</PrimaryBtn>
            {/* Hamburger Icon */}
            <div
              className={styles.hamburger}
              onClick={toggleMenu}
              style={{ color: isSticky ? 'white' : 'black' }} // ⬅️ Tambahkan ini
            >
              <i className="ri-menu-line"></i>
            </div>

        </div>


      </div>
    </div>
  )
}
export default Navbar