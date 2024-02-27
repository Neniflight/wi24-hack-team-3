import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';

//import MySVGCalendar from 'client/public/cal.png'
//console.log(MySVGCalendar);
//import calendar from 'next.svg'; 

const NavBar = () => {
    return (
        // Next uses Link component for prefetching and client-side navigation
        // which extends the <a> element
        <div className={styles.navbar}>
            <div className={styles.title}>
                <Link href="/home">cultivate</Link>
            </div>

            <div>
                <a href = "/calendar">
                <div>
                    <img src={'/images/cal.png'} className={styles.calendar}></img>   
                </div>
            </a>
            </div>

            <div>
                <a href = "/home">
                    <div>
                        <img src={'/images/logo.png'} className={styles.logo}></img>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default NavBar;