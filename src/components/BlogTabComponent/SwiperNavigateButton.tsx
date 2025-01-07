import styles from './CommunicativeBlog.module.scss'
import {useSwiper} from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {useEffect, useState} from "react";



export default function SwiperNavigateButton() {
   const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true); // Disable 'prev' initially
    const [isEnd, setIsEnd] = useState(false); // Enable 'next' initially

    useEffect(() => {
        // Listen for Swiper events to update button states
        const updateButtonStates = () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        };
        // Attach event listeners
        swiper.on("slideChange", updateButtonStates);
        swiper.on("reachBeginning", () => setIsBeginning(true));
        swiper.on("reachEnd", () => setIsEnd(true));
        swiper.on("fromEdge", updateButtonStates);

        // Cleanup listeners on unmount
        return () => {
            swiper.off("slideChange", updateButtonStates);
            swiper.off("reachBeginning");
            swiper.off("reachEnd");
            swiper.off("fromEdge");
        };
    }, [swiper]);

    return (
        <div className={styles.swiperNavButton}>
        <button
        className={`${styles.prevButton} ${isBeginning && "swiper-button-disabled"}`} disabled={isBeginning}
        onClick={()=>swiper.slidePrev()}><IoIosArrowBack /></button>
        <button
            className={`${styles.nextButton} ${isEnd && "swiper-button-disabled"}`}   disabled={isEnd}
        onClick={()=>swiper.slideNext()}><IoIosArrowForward /></button>
    </div>
    )}