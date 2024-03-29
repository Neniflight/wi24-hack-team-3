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
import { useState } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.leftColumn}>
            <h1 className={styles.welcome}>welcome to <span style={{ color: '#2B7E59' }}>cultivate!</span></h1>
            <p className={styles.message}><em>cultivate</em> is designed to help make your happiness a habit. 
            write down a happy memory and grow your garden!</p>
            {/* <div className={styles.buttonContainer}>
                <Button className={buttonStyle.signUp}>Sign Up</Button>
                <Divider text="already have an account?"/>
                <Button className={buttonStyle.logIn}>Log In</Button>
            </div>  */}
            <br></br>
        <div className={popUpStyle.flexContainer}>
                <Popup trigger=
                    {<button className={popUpStyle.signup}> Sign up </button>} 
                    modal nested>
                    {
                        close => (
                            <div className={popUpStyle.modal}>
                                <Image src={logo} className={popUpStyle.logo}></Image>
                                <div className={popUpStyle.sign}>
                                
                                    create an account
                                </div>
                                <div>
                                    <button className={popUpStyle.createAcc} onClick=
                                        {() => close()}>
                                            create account
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </Popup>
        </div>
        <Divider text="already have an account?"/>
        <div className={popUpStyle.flexContainer}>
            
                <Popup trigger=
                    {<button className={popUpStyle.logIn}> Log In </button>} 
                    modal nested>
                    {
                        close => (
                            <div className={popUpStyle.modal}>
                                <Image src={logo} className={popUpStyle.logo}></Image>
                                <div className={popUpStyle.sign}>
                                    
                                    Log into account
                                </div>
                                <div>
                                    <button className={popUpStyle.logInAcc} onClick=
                                        {() => close()}>
                                            log in
                                    </button>
                                </div>
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