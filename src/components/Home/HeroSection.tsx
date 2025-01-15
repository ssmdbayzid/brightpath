import styles from './HeroSection.module.scss';
import Link from "next/link";


export default function HeroSection() {
    return (
        <div className="container">
            {/*----------- Category Menu -----------*/}

            <div className={styles.banner}>
                <div className={styles.sectionArea}>
                    <div className={styles.heroContent}>
                        <h1>What do you want to learn?</h1>
                        <p>Over 200+ affordable courses to empower your future</p>
                        <div className={styles.btnContainer}>
                            <Link href="/apply" className={`btn ${styles.btn1}`}> Subscription</Link>
                            <Link href="/about" className={`btn ${styles.btn2}`}> Refer And Earn</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
