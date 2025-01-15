'use client'
import {useEffect, useState} from "react";
import styles from './GoToTop.module.scss'
import { IoMdArrowUp } from "react-icons/io";


export default  function GoToButton(){
    const [showToTop, setShowToTop] = useState(false);

    const handleVisibleButton = ()=>{
        setShowToTop(window.pageYOffset > 50);
    }

    const handleScrollUp = () =>{
        window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton);
    }, []);
    return (
            <button  className={`${showToTop ? styles.scrollIcon : styles.hide}`} onClick={handleScrollUp}>
                <IoMdArrowUp size={20} color="#FFFFFF"  className={styles.scrollButton}/>
            </button>
    )
}