import React from 'react';
import styles from './divider.module.css';

const Divider = ({ text }) => {
    return (
      <div className={styles.dividerContainer}>
        <hr className={styles.divider}/>
        <span className={styles.text}>{text}</span>
        <hr className={styles.divider}/>
      </div>
    );
  }
  
  export default Divider;
