import styles from './QuizBanner.module.scss'
export default function QuizBanner(){
    return (
        <div className="container light-pink">
            <div className={styles.bannerArea}>
                <h1 className={styles.title}>Not sure where to begin?</h1>
                <p className={styles.para}>No need to worry, our quiz will help you make sense of it all.</p>
                <a href="/learning-goal" className={styles.btn}>Take our quiz</a>
            </div>
            </div>
    )
}