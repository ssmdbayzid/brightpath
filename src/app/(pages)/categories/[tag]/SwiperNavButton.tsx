
import styles from './Categories.module.scss'
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {useSwiper} from "swiper/react";

export default function SwiperNavButton() {
    const swiper = useSwiper();
    return (
        <div className={styles.navigateButtons}>
        <button onClick={()=>swiper.slidePrev()}><IoIosArrowBack size={20} /></button>
        <button onClick={()=>swiper.slidePrev()}><IoIosArrowForward size={20} /></button>
        </div>
    )
}