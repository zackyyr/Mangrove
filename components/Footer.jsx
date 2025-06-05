import React from 'react';
import styles from '@/styles/components/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Contact */}
        <div className={`${styles.footerSection} ${styles.contacts}`}>
          <h4>Contact</h4>
          <p><i className="ri-map-pin-line"></i> XX, Street, Locations</p>
          <p><i className="ri-phone-line"></i>+62 XXX XXX XX</p>
          <p><i className="ri-mail-line"></i> info@mangrovecoastguard.org</p>
        </div>

        {/* Explore */}
        <div className={`${styles.footerSection} ${styles.links}`}>
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </div>

        {/* Our Mission */}
        <div className={styles.footerSection}>
          <h4>Our Mission</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/map">Map</a></li>
          </ul>
        </div>

        {/* Programs */}
        <div className={styles.footerSection}>
          <h4>Programs</h4>
          <ul>
            <li><a href="/guardians">Guardians</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/adopt-donate">Adopt & Donate</a></li>
            <li><a href="/eco-tourism">Eco-tourism</a></li>
          </ul>
        </div>

        {/* Community */}
        <div className={styles.footerSection}>
          <h4>Community</h4>
          <ul>
            <li><a href="/news">News</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/get-involved">Get Involved</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={`${styles.footerSection} ${styles.newsletter}`}>
          <h4>Join Our Newsletter for Exclusive Updates</h4>
          <p>Subscribe to Our Exclusive Newsletter for the Latest Updates</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="your@email.com" />
            <button type="submit">Subscribe</button>
          </form>
          <div className={styles.socialIcons}>
            <a href="#"><i className="ri-instagram-line"></i></a>
            <a href="#"><i className="ri-facebook-fill"></i></a>
            <a href="#"><i className="ri-linkedin-fill"></i></a>
          </div>
        </div>
      </div>
      <p className={styles.footerBottom}>&copy; {new Date().getFullYear()} Mangrove Guardians. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
