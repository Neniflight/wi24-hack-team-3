import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';

import cal from '/images/cal.png';
import hand from '/images/logo.png';

const NavBar = () => {
    return (
        // Next uses Link component for prefetching and client-side navigation
        // which extends the <a> element
        <div className={styles.navbar}>
            <div className={styles.title}>
                <Link href="/home">cultivate</Link>
            </div>

            <div className={styles.nav_buttons}>
                <div>
                    <a href = "/calendar">
                    <div>
                        <Image src={cal} className={styles.calendar}></Image>   
                        {/* <img src={'/images/cal.png'} className={styles.calendar}></img>    */}
                    </div>
                </a>
                </div>

                <div>
                    <a href = "/home">
                        <div>
                            {/* <img src={hand} className={styles.logo}></img> */}
                            <Image src={'/images/logo.png'} className={styles.logo}></Image>
                        </div>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar;