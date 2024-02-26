import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image'

const NavBar = () => {
    return (
        // Next uses Link component for prefetching and client-side navigation
        // which extends the <a> element
        <div className={styles.navbar}>
            <div className={styles.title}>
                <Link href="/home">cultivate</Link>
            </div>
            {/* <div className={styles.nav_buttons}>
                <Link href="/home">Play Game</Link>
                <Link href="/calendar"> History </Link>
            </div> */}
        </div>
    )
}

export default NavBar;