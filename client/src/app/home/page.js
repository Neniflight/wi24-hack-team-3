'use client';

import { useState } from 'react';
import styles from './style.module.css'
import Button from '@/components/button-component/button';
import buttonStyle from '@/components/button-component/button.module.css';

import AddPhoto from '@/components/addphoto-component/addphoto'
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

    const [photoAdded, setPhotoAdded] = useState(false);
    const handlePhotoAdded = () => {
        setPhotoAdded(true);
    };

    return (
        <main className={styles.main} >
            <h1 className={styles.date}>{dayOfWeek}, {month} {day}</h1>
            <div className={styles.contentWrapper}>

                {!photoAdded && (
                    <div className={styles.leftContent}>
                        <div className={styles.circle}>
                            <Image width={128} height={128} src={logoUrl}></Image>
                        </div>
                        <h2 className={styles.message}>what are you grateful for today?</h2>
                        <div className={styles.textInput}>
                            {/* Text input box */}
                            <TextInput value={inputValue} onChange={handleInputChange} placeholder="Enter your text" />
                        </div>
                    </div>
                )}

                <div className={styles.rightContent}>
                    {photoAdded ? (
                        <Image width={200} height={200} src="/your-photo-url.jpg" alt="Added Photo" />
                    ) : (
                        <AddPhoto onPhotoAdded={handlePhotoAdded} />
                    )}
                </div>
            </div>
            <Button className={buttonStyle.post}>Post!</Button>
        </main>
    )
}