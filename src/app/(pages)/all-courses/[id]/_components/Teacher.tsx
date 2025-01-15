import Image from "next/image";
import styles from './CourseFeatures.module.scss'

export default async function Teacher() {
    const str =  `Md. Nazmul Hasan Rokib-এর রয়েছে দীর্ঘ ৬ বছর ধরে 2D Animator এবং 3D Animator হিসেবে বিভিন্ন local
এবং freelance মার্কেটপ্লেসে কাজ করার অভিজ্ঞতা। এছাড়া বিভিন্ন জনপ্রিয় ম্যাগাজিন যেমনঃ উন্মাদ,
সমকাল বা সকালের খবরে কার্টুনিস্ট বা অ্যানিমেটর হিসেবে কাজ করারও অভিজ্ঞতা রয়েছে তার। তাছাড়া তার
আরও রয়েছে বাংলাদেশের সবচেয়ে বিখ্যাত 2D Animation ফার্ম "Dreamer Donkey"-তেও অ্যানিমেটর হিসেবে
কাজের অভিজ্ঞতা।

2D & 3D Animator at Local & Freelance Marketplace
`;

    return (
        <div className="section">
            <h1 className="common-heading">Meet Your Teacher</h1>
            <div className={styles.teacherContainer}>
                <div className={styles.imgContain}>
                    <Image src="https://api.ghoorilearning.com/uploads/images/Md-Toriqul-Mowla-Sujan-630600e8136f5.png"
                           width={500} height={700} className={styles.img} alt="teacher-banner"/>
                </div>
                <div className={styles.teacherContent}>
                    <h1 className={styles.teacher}>Md. Nazmul Hasan Rokib</h1>
                    <p>{str}</p>
                </div>
            </div>
        </div>
    )
}