import styles from './HeroSection.module.scss';
import Image from "next/image";
import heroImg from '../../assets/image/hero-image.png';

export default function HeroSection() {
    return (
        <div className="container">
            <div className={styles.banner}>
            <div className={styles.sectionArea}>
                <div className={styles.heroContent}>
                    <h1>What do you want to learn?</h1>
                    <p>Over 200+ affordable courses to empower your future</p>
                    <div className={styles.btnContainer}>
                        <a href="/apply" className={styles.btn1}> Subscription</a>
                        <a href="/about" className={styles.btn2}> Refer And Earn</a>
                    </div>
                </div>
            </div>
            </div>
            </div>
    );
}
