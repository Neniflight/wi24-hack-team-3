import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';

import cal from 'public/images/cal.png';
import hand from 'public/images/logo.png';

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
                    </div>
                </a>
                </div>

                <div>
                    <a href = "/home">
                        <div>
                            <Image src={hand} className={styles.logo}></Image>
                            {/* <img src={'/images/logo.png'} className={styles.logo}></img> */}
                        </div>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar;