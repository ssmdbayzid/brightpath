'use client'
import styles from "../../styles/components/Layout/MenuIcon.module.scss"
import logo from "../../assets/image/logo.png"
import Image from "next/image";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import {useState} from "react";

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


export default function MobileMenu({openMenu, setOpenMenu}) {
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
                <li className={styles.dropdown} onClick={()=>setOpenCategories(!openCategories)}> <a href="#">Explore Categories <IoIosArrowDown className={`${styles.arrow} ${openCategories ? styles.open : ""}`}/></a>
                    {openCategories && <ul>
                        {links && links.map(list => <li key={list.display}><a href={list.href}>{list.display}</a></li>)}
                    </ul>}
                </li>
                <li className={styles.dropdown} onClick={()=>setOpenOthers(!openOthers)}> <a href="#">Others <IoIosArrowDown /></a>
                    {openOthers && <ul>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="/courses">All Course</a></li>
                        <li><a href="/https://bbcjanala.ghoorilearning.com/">BBC Janala</a></li>
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