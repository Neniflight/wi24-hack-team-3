'use client';

import { useState } from 'react';
import styles from './style.module.css'
import Button from '@/components/button-component/button';
import buttonStyle from '@/components/button-component/button.module.css';
import TextInput from '@/components/submission-component/submission';
import React from 'react';
import Image from 'next/image'

export default function Home() {
    const [inputValue, setInputValue] = useState('');

    const logos = [
        '/logos/logo1.png', 
        '/logos/logo2.png', 
    ];

    /* Real time date udpating */
    const currentDate = new Date();
    const day = currentDate.getDate();
    const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' }).toLowerCase();
    const month = currentDate.toLocaleString('default', { month: 'long' }).toLowerCase();

    /* Logo changes day by day */
    const randomIndex = day % logos.length;
    const logoUrl = logos[randomIndex];

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <main className={styles.main} >
            <h1 className={styles.date}>{dayOfWeek}, {month} {day}</h1>
            <div className={styles.circle}>
                <Image width={128} height={128} src={logoUrl}></Image>
            </div>
            <h2 className={styles.message}>what are you grateful for today?</h2>
            <div className={styles.textInput}>
                {/* Text input box */}
                <TextInput value={inputValue} onChange={handleInputChange} placeholder="Enter your text" />
            </div>
            

            <Button className={buttonStyle.addPhoto}>Add Photo</Button>
            <br/>
            <Button className={buttonStyle.post}>Post!</Button>
        </main>
    )
}