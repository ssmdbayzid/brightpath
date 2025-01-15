import styles from "./Loader.module.scss";
import Image from "next/image";
import loader from "@/assets/image/loader-ghoori.svg";

export default function Loader(){
    return (
        <div>
            <div className={styles.imageBackground}></div>
            <div className={styles.loader}>
                <Image src={loader} alt="loader" className={styles.loaderImg}/>
            </div>
        </div>
    )
}