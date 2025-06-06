import React from 'react';
import styles from '@/styles/components/PrimaryBtn.module.css';
import clsx from 'clsx';

const PrimaryBtn = ({
  children = "Click Me",
  type = "default",
  fontSize = "16px",
  width = "200px",
  className = "",
  onClick,
  showArrow = false,
  hoverBg = "", // ✅ tambahan untuk hover background
}) => {
  const buttonClass = clsx(styles.primaryBtn, styles[type], className);

  return (
    <button
      className={buttonClass}
      style={{
        fontSize,
        width,
        ...(hoverBg && { "--hover-bg": hoverBg }) // ✅ inject CSS variable
      }}
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
