import Image from 'next/image'
import styles from './style.module.css'
import Layout from "../layout.js"
import logo from 'public/images/logo.png';
import Button from '@/components/button-component/button';
import buttonStyle from '@/components/button-component/button.module.css';

export default function Home() {
  return (
      <main className={styles.main} >
        <h1 className={styles.date}>day, date</h1>
        <h2 className={styles.message}>what are you grateful for today?</h2>
        <Button className={buttonStyle.addPhoto}>Add Photo</Button>
        <br/>
        <Button className={buttonStyle.post}>Post!</Button>
      </main>
  )
}