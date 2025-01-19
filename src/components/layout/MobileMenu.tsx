'use client'
import styles from "../../styles/components/Layout/MenuIcon.module.scss"
import logo from "../../assets/image/logo.png"
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import {useState} from "react";
import Link from "next/link";

const links = [
    { "href": "/categories/creative-skill", "display": "Creativity & Design" },
    { "href": "/categories/freelance-marketplace", "display": "Freelance Marketplace" },
    { "href": "/categories/teaching-and-academic", "display": "Teaching & Academic" },
    { "href": "/categories/technology", "display": "Technology" },
    { "href": "/categories/development", "display": "Development" },
    { "href": "/categories/business", "display": "Business" },
    { "href": "/categories/sales-and-marketing", "display": "Sales & Marketing" },
    { "href": "/categories/professional-development", "display": "Professional Development" },
    { "href": "/categories/personal-development", "display": "Personal Development" },
    { "href": "/categories/language-learning", "display": "Language Learning" },
    { "href": "/categories/free-course", "display": "Free course" },
    { "href": "/categories/live-workshop", "display": "Workshop & Live Class" }
]


export default function MobileMenu({openMenu, setOpenMenu}:{openMenu:any, setOpenMenu:any}) {
const [openCategories, setOpenCategories] = useState(false)
const [openOthers, setOpenOthers] = useState(false)
    console.log(openCategories)
    return (
        <div className={styles.menu}>
            <div className={styles.header}>
                <Image src={logo} alt="logo" width={50} height={40}/>
                <RxCross2 onClick={() => setOpenMenu(!openMenu)} className={styles.icon}/>
            </div>
            <ul>
                <li className={styles.dropdown} onClick={()=>setOpenCategories(!openCategories)}> <Link href="#">Explore Categories <IoIosArrowDown className={`${styles.arrow} ${openCategories ? styles.open : ""}`}/></Link>
                    {openCategories && <ul>
                        {links && links.map(list => <li key={list.display}><Link href={list.href}>{list.display}</Link></li>)}
                    </ul>}
                </li>
                <li className={styles.dropdown} onClick={()=>setOpenOthers(!openOthers)}> <Link href="#">Others <IoIosArrowDown /></Link>
                    {openOthers && <ul>
                        <li><Link href="/blogs">Blogs</Link></li>
                        <li><Link href="/all-courses">All Course</Link></li>
                        <li><Link href="/https://bbcjanala.ghoorilearning.com/">BBC Janala</Link></li>
                    </ul>}
                </li>
            </ul>

            <div className={styles.btnWrap}>
                <button className={styles.btn}>Login</button>
                <button className={styles.btn}>Sign up</button>
            </div>

        </div>
    );
}