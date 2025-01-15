import styles from './QuizBanner.module.scss'
import Link from "next/link";
export default function QuizBanner(){
    return (
        <div className="light-pink">
        <div className="container ">
            <div className={styles.bannerArea}>
                <h1 className={styles.title}>Not sure where to begin?</h1>
                <p className={styles.para}>No need to worry, our quiz will help you make sense of it all.</p>
                <Link href="/learning-goal" className={`btn ${styles.btn}`}>Take our quiz</Link>
            </div>
            </div>
        </div>
    )
}