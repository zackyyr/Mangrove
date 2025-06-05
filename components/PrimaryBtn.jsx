import React from 'react';
import styles from '@/styles/components/PrimaryBtn.module.css';
import clsx from 'clsx';

const PrimaryBtn = ({
  children = "Click Me",
  type = "default",
  fontSize = "16px",
  width = "200px", // tambahkan width default
  className = "",
  onClick,
  showArrow = false,
}) => {
  const buttonClass = clsx(styles.primaryBtn, styles[type], className);

  return (
    <button
      className={buttonClass}
      style={{ fontSize, width }}
      onClick={onClick}
    >
      {children}
      {showArrow && (
        <span className={styles.arrowBox}>
          <span><i className="ri-arrow-right-line"></i></span>
        </span>
      )}
    </button>
  );
};


export default PrimaryBtn;
