"use client";

import styles from "../../styles/components/Layout/Header.module.scss";
import Image from "next/image";
import logo from "../../assets/image/logo.png";
import {MdKeyboardArrowDown} from "react-icons/md";
import {IoSearchOutline} from "react-icons/io5";
import {MdOutlineShoppingCart} from "react-icons/md";
import {RiMenuFill} from "react-icons/ri";
import {RxCross2} from "react-icons/rx";
import {useState, useEffect} from "react";
import MobileMenu from "@/components/layout/MobileMenu";
import {Modal} from 'react-responsive-modal';


import {useSelector} from "react-redux";
import {categoryLinks} from "@/assets/data";
import {Login} from "@/components/auth/Login";
import {SignUp} from "@/components/auth/SignUp";

const categoryMenu = [
    "Graphics Design",
    "Language Courses",
    "Web Design",
    "Photography",
    "Data Entry",
    "English Learning",
    "IELTS",
    "Digital Marketing"
]

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openCategories, setOpenCategories] = useState(false);
    const [cart, setCart] = useState([]);
    const [openOthers, setOpenOthers] = useState(false);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openSignupModal, setOpenSignupModal] = useState(false);
    // Safely access the cart items
    const cartItems = useSelector((state: any) => state.cart.cart);

    // Optional: Debug the cart items
    useEffect(() => {
        if (cartItems) {
            setCart(cartItems)
        }
    }, [cartItems]);

    return (
        <div className="">
            <div className={styles.header}>
                <div className="container">
                    <div className={styles.headerContent}>
                        <div className={styles.menuLogo}>
                            {!openMenu && <RiMenuFill onClick={() => setOpenMenu(!openMenu)} className={styles.icon}/>}
                            <a href="/"> <Image
                                src="https://cdn.ghoorilearning.com/uploads/images/20220717172448-62d3f180acee3.svg"
                                height={100} width={150} className={styles.logo} alt="logo"/></a>
                        </div>
                        <div>

                        </div>
                        <div className={styles.links}>
                            <ul>
                                <li onClick={() => setOpenCategories(!openCategories)}
                                    className={styles.dropdown}> Explore Category &nbsp; <MdKeyboardArrowDown/>
                                    {openCategories && <ul className={styles.dropdownLinks}>
                                        {categoryLinks && categoryLinks.map(link => <li key={link.display}><a
                                            href={link.href}>{link.display}</a></li>)}
                                    </ul>}
                                </li>
                                <li onClick={() => setOpenOthers(!openOthers)} className={styles.dropdown}>Others &nbsp;
                                    <MdKeyboardArrowDown/>
                                    {openOthers && <ul className={styles.dropdownLinks}>
                                        <li><a href="/blogs">Blogs</a></li>
                                        <li><a href="/all-courses">All Course</a></li>
                                        <li><a href="/https://bbcjanala.ghoorilearning.com/">BBC Janala</a></li>
                                    </ul>}
                                </li>
                            </ul>
                        </div>
                        <div className={styles.searchField}>
                            <input type="text" placeholder="What do you want to learn?" className={styles.searchInput}/>
                            <IoSearchOutline className={styles.searchIcon}/>
                        </div>
                        <div className={styles.btnContainer}>
                            <button onClick={() => setOpenLoginModal(!openLoginModal)}
                                    className={styles.loginBtn}>Login
                            </button>
                            <a href="/cart" className={styles.shopping}>
                                <MdOutlineShoppingCart className={styles.cartIcon}/>
                                <span>{cart ? cart?.length : 0}</span>
                            </a>
                        </div>
                    </div>
                    <div className={styles.mobileSearchField}>
                        <input type="text" placeholder="What do you want to learn?" className={styles.searchInput}/>
                        <IoSearchOutline className={styles.searchIcon}/>
                    </div>
                    {/*----------- Category Menu -----------*/}
                    <div className={styles.categoryMenu}>
                        {categoryMenu && categoryMenu.map(menu => <button key={menu} className={styles.category_menu_button}>{menu}</button>)}
                    </div>
                </div>

            </div>


            {openMenu &&
                <div className={styles.MenuContiner}><MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/></div>}
            {openLoginModal &&
                <Login openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal}
                       openSignupModal={openSignupModal} setOpenSignupModal={setOpenSignupModal}/>}
            {openSignupModal && <SignUp openSignupModal={openSignupModal} setOpenSignupModal={setOpenSignupModal}
                                        openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal}/>}
        </div>
    );
}
