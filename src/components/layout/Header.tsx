"use client";

import styles from "../../styles/components/Layout/Header.module.scss";
import Image from "next/image";

import {MdKeyboardArrowDown} from "react-icons/md";
import {IoSearchOutline} from "react-icons/io5";

import {RiMenuFill} from "react-icons/ri";

import {useState, useEffect} from "react";
import MobileMenu from "@/components/layout/MobileMenu";



import {useSelector} from "react-redux";
import {categoryLinks, categoryMenu} from "@/assets/data";
import {Login} from "@/components/auth/Login";
import {SignUp} from "@/components/auth/SignUp";
import { RiShoppingCartFill } from "react-icons/ri";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {RootState} from "@/store/store";




export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openCategories, setOpenCategories] = useState(false);
    const [cart, setCart] = useState([]);
    const [openOthers, setOpenOthers] = useState(false);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openSignupModal, setOpenSignupModal] = useState(false);
    // Safely access the cart items
    const cartItems = useSelector((state:RootState) => state?.cart?.cart);

    // Optional: Debug the cart items
    useEffect(() => {
        if (cartItems) {
            setCart(cartItems)
        }
    }, [cartItems]);

    const router = useRouter();
    const handleSearchCourse = async (event) => {
        event.preventDefault();

            router.push(`/all-courses?keyword=${event.target.course.value}`);
}

    return (
        <div className="">
            <div className={styles.header}>
                <div className="container">
                    <div className={styles.headerContent}>
                        <div className={styles.menuLogo}>
                            {!openMenu && <RiMenuFill onClick={() => setOpenMenu(!openMenu)} className={styles.icon}/>}
                            <Link href="/"> <Image
                                src="https://cdn.ghoorilearning.com/uploads/images/20220717172448-62d3f180acee3.svg"
                                height={50} width={200} className={styles.logo} alt="logo"/></Link>
                        </div>
                        <div>

                        </div>
                        <div className={styles.links}>
                            <ul>
                                <li onClick={() => setOpenCategories(!openCategories)}
                                    className={styles.dropdown}> Explore Category &nbsp; <MdKeyboardArrowDown/>
                                    {openCategories && <ul className={styles.dropdownLinks}>
                                        {categoryLinks && categoryLinks.map(link => <li key={link.display}><Link
                                            href={link.href}>{link.display}</Link></li>)}
                                    </ul>}
                                </li>
                                <li onClick={() => setOpenOthers(!openOthers)} className={styles.dropdown}>Others &nbsp;
                                    <MdKeyboardArrowDown/>
                                    {openOthers && <ul className={styles.dropdownLinks}>
                                        <li><Link href="/blogs">Blogs</Link></li>
                                        <li><Link href="/all-courses">All Course</Link></li>
                                        <li><Link href="/https://bbcjanala.ghoorilearning.com/">BBC Janala</Link></li>
                                    </ul>}
                                </li>
                            </ul>
                        </div>

                        <div className={styles.searchField}>
                            <form className={styles.searchForm} onSubmit={handleSearchCourse}>
                                <input type="text" name="course" placeholder="What do you want to learn?"
                                       className={styles.searchInput}/>
                               <button ><IoSearchOutline type='submit' className={styles.searchIcon}/></button>

                            </form>
                        </div>

                    <div className={styles.btnContainer}>
                            <button className={styles.lenuageButton}>English</button>
                            <Link href="/cart" className={styles.shopping}>
                                <RiShoppingCartFill className={styles.cartIcon}/>
                                <span>{cart ? cart?.length : 0}</span>
                            </Link>
                            <Link href="#" onClick={() => setOpenLoginModal(!openLoginModal)}
                               className={styles.loginBtn}>Login
                            </Link>
                            <Link href="#" onClick={() => setOpenSignupModal(!openSignupModal)}
                               className={styles.signupBtn}>Sign Up
                            </Link>
                        </div>
                    </div>
                    <div className={styles.mobileSearchField}>
                        <input type="text" placeholder="What do you want to learn?" className={styles.searchInput}/>
                        <IoSearchOutline className={styles.searchIcon}/>
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className={styles.categoryMenu}>
                    {categoryMenu && categoryMenu.map(menu =>
                        <button key={menu} className={styles.category_menu_button}>{menu}</button>)}
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
