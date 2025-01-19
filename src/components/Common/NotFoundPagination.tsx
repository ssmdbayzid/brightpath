import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import styles from "@/app/page.module.css"
import Link from "next/link";

export default function NotFoundPagination({currentPage, totalPage = 5}: { currentPage: number, totalPage?: number }) {
    return (
        <div className={styles.paginationArea}>
            <Link href={`/category/?page=${currentPage - 1}`}>
                <button disabled={currentPage === 1} className={styles.btn}><FaArrowLeft/></button>
            </Link>
            {[...Array(totalPage)].map((_: any, index: number) => (
                <Link href={`/category/?page=${index + 1}`} key={index}>
                    <button
                        className={`${currentPage === index + 1 && styles.active} ${styles.btn}`}>{index + 1}</button>
                </Link>))}
            <Link href={`/category/?page=${currentPage + 1}`}>
                <button disabled={currentPage === totalPage} className={styles.btn}><FaArrowRight/></button>
            </Link>
        </div>
    )
}