'use client'
import styles from '../../styles/components/Layout/Footer.module.scss'
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {IoIosCall} from "react-icons/io";
import Link from "next/link";
import {IoIosArrowDown} from "react-icons/io";
import React, {useState} from "react";

export default function Footer() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openSecondList, setOpenSecondList] = useState(false);

    console.log(openSecondList)
    return (
        <div className={styles.footer}>
            <div className="">
                <div className={`container ${styles.footerArea}`}>
                    <div className={`${openMenu && styles.active} ${styles.content}`}>
                        <div onClick={() => {
                            setOpenMenu(!openMenu);
                        }}
                             className={styles.titleContainer}>
                            <h3 className={styles.title}>Business</h3>
                            <IoIosArrowDown className={styles.icon}/>
                        </div>

                        <ul className={`${openMenu && styles.activeList} ${styles.list}`}>
                            <li><Link href="/">Help and Support</Link></li>
                            <li><Link href="/all-course">Terms</Link></li>
                            <li><Link href="/about">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className={`${openSecondList && styles.active} ${styles.content}`}>
                        <div onClick={() => {
                            setOpenSecondList(!openSecondList);
                        }}
                             className={styles.titleContainer}>
                            <h3 className={styles.title}>Get Social</h3>
                            <IoIosArrowDown className={styles.icon}/>
                        </div>

                        <ul className={`${openSecondList && styles.activeList} ${styles.list}`}>
                            <li><Link href="https://www.facebook.com/">About Ghoori Learning</Link></li>
                            <li><Link href="https://twitter.com/">Contact us</Link></li>
                            <li><Link href="https://www.youtube.com/">Blogs</Link></li>
                        </ul>
                    </div>

                    <div className={styles.content}>
                        <div
                            className={styles.titleContainer}>
                            <h3 className={styles.title}>Dotlines Bangladesh Limited</h3>
                        </div>

                        <ul className={styles.list}>
                            <li><p>Uday Tower (Level 12), 57,57A,
                                Gulshan Avenue, Dhaka 1212</p></li>
                            <li><p className={styles.callIcon}><IoIosCall size={20}/> Contact us</p></li>

                        </ul>
                    </div>
                </div>

                <div className={styles.copyRight}>
                    <div className={`container ${styles.copyRightContent}`}>
                        <p> &copy; Copyright {new Date().getFullYear()}. All rights reserved by Dotlines</p>
                        <ul className={styles.links}>
                            <li><Link href="https://www.facebook.com/"><FaFacebookF size={20}/></Link></li>
                            <li><Link href="https://twitter.com/"><FaTwitter size={20}/></Link></li>
                            <li><Link href="https://www.youtube.com/"><FaYoutube size={20}/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}