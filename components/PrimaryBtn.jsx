import React from 'react';
import styles from '@/styles/components/PrimaryBtn.module.css';
import clsx from 'clsx';

const PrimaryBtn = ({
  children = "Click Me",
  type = "default", // bisa: "default", "dark", "custom" (untuk fleksibilitas nanti)
  fontSize = "16px",
  className = "",
  onClick,
}) => {
  const buttonClass = clsx(styles.primaryBtn, styles[type], className);

  return (
    <button
      className={buttonClass}
      style={{ fontSize }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
