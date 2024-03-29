import React from 'react';
import styles from './popup.module.css';

const PopUp = ({ text }) => {
    return (
      <div className={styles.dividerContainer}>
        <hr className={styles.divider}/>
        <span className={styles.text}>{text}</span>
        <hr className={styles.divider}/>
      </div>
    );
  }
  
  export default PopUp;