import Link from 'next/link'
import styles from '@/app/page.module.css'
export default function NotFound() {
    return (
        <div className={styles.notFoundArea}>
            <h2 className={styles.notFoundTitle}>Not Found</h2>
            <Link href="/" className={styles.returnButton}>Return Home</Link>
        </div>
    )
}