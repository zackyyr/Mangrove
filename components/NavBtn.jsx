import React from 'react'
import styles from '@/styles/components/NavBtn.module.css'

const NavBtn = ({ label, icon, isActive, onClick }) => {
  return (
    <button 
      className={`${styles.btn} ${isActive ? styles.active : ''}`} 
      onClick={onClick}
    >
      <i className={`ri-${icon} ${styles.icon}`}></i>
      {label}
    </button>
  )
}

export default NavBtn
