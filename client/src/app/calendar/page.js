"use client";

import Image from 'next/image'
import Layout from "../layout.js"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import styles from './style.module.css'

export default function Home() {
  const [value, onChange] = useState(new Date());

  return (
      <main className={styles.main} >

      <div className={styles.calendarContainer}>
            <Calendar 
                calendarType='gregory'
                onChange={onChange}
                value={value}
            />
        </div>
    </main>
  )
}