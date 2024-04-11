"use client";

import MyCalendar from '@/components/calendar-component/calendar'
import Image from 'next/image'
import Layout from "../layout.js"
import React, { useState } from 'react';
import styles from './style.module.css'


export default function Home() {
  const [value, onChange] = useState(new Date());

  return (
      <main className={styles.main} >
        <MyCalendar />
    </main>
  )
}