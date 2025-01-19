import Image from "next/image";
import styles from './TeacherBanner.module.scss'
import Link from "next/link";

export default function BecomeATeacher() {
    return (
        <div className="container section">
            <div className={styles.bannerArea}>
                <div className={styles.banner}>
                    <Image
                        src="https://cdn.ghoorilearning.com/uploads/cms/teachers-min-63075ada5fbb1-63077ee47934a.webp"
                        width={500} height={400} className={styles.image} alt="banner"/>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Become a teacher</h1>
                    <p className={styles.para}>Become an instructor and change lives — including your own.</p>
                    <Link href="/become-teacher" className={`btn ${styles.btn}`}>Get Started</Link>
                </div>
            </div>
        </div>
    )
}