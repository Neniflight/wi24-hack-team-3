"use client";
import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';
import logo from 'public/images/logo.png';
import Button from '@/components/button-component/button';
import buttonStyle from '@/components/button-component/button.module.css';
import popUpStyle from '@/components/popup-component/popup.module.css';
import Divider from '@/components/divider-component/divider';
import Popup from 'reactjs-popup';
import Link from 'next/link';
import { useState } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.leftColumn}>
            <h1 className={styles.welcome}>welcome to <span style={{ color: '#2B7E59' }}>cultivate!</span></h1>
            <p className={styles.message}><em>cultivate</em> is designed to help make your happiness a habit. 
            write down a happy memory and grow your garden!</p>
            <br></br>
    
        {/* <div className={popUpStyle.flexContainer}> */}
            <Popup trigger={<button className={popUpStyle.signup}> Sign up </button>} modal nested>
                {
                    close => (
                        <div className={popUpStyle.modal}>
                            <div>
                                <button className={popUpStyle.close} onClick=
                                    {() => close()}>
                                        x
                                </button>
                            </div>
                            <Image src={logo} className={popUpStyle.logo}></Image>
                            <div className={popUpStyle.sign}>
                                create an account
                               
                            </div>
                                    <div className={popUpStyle.input}>
                                    <input type="firstName" id={popUpStyle.field} placeholder="First Name"/>
                                    <input type="lastName" id={popUpStyle.field} placeholder="Last Name"/>
                                    <input type="email" id={popUpStyle.field} placeholder="Email"/>
                                    <input type="phoneNumber" id={popUpStyle.field} placeholder="Phone Number"/>
                                    <input type="password" id={popUpStyle.field} placeholder="Password"/>
                                    <input type="confirmPassword" id={popUpStyle.field} placeholder="Confirm Password"/>
                            </div>
                            <Link href="/home">
                                <Button className={popUpStyle.submit}>Sign Up</Button>
                            </Link>
                        </div>
                    )
                }
            </Popup>
        {/* </div> */}
        <Divider text="already have an account?"/>
        <div className={popUpStyle.flexContainer}>
            <Popup trigger=
                {<button className={popUpStyle.logIn}> Log In </button>} 
                modal nested>
                {
                    close => (
                        <div className={popUpStyle.modal}>
                            <div>
                                <button className={popUpStyle.close} onClick=
                                    {() => close()}>
                                        x
                                </button>
                            </div>
                            <Image src={logo} className={popUpStyle.logo}></Image>
                            <div className={popUpStyle.sign}>
                                log in
                                
                            </div>
                                <div className={popUpStyle.input}>
                                    <input type="email" id={popUpStyle.field} placeholder="Email"/>
                                    <input type="password" id={popUpStyle.field} placeholder="Password"/>
                                </div>
                            <div className="submit">
                                
                            </div>

                            <Link href='/home'>
                                <Button className={popUpStyle.submit} >log in</Button>
                            </Link>
                        </div>
                    )
                }
            </Popup>
        </div>

        </div>
        <div className={styles.rightColumn}>
            <Image src={logo} className={styles.logo}></Image>
            <div className={styles.quoteContainer}>
                <p><strong>"cultivate your garden"</strong></p>
                <p className={styles.author}>- Voltaire, Candide</p>
            </div>
        </div>
    </main>
  )
}