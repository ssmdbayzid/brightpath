'use client'
import {useDispatch} from "react-redux";
import styles from "./FilteredCourse.module.scss";
import {addToCart} from "@/store/features/cartSlice";
import Link from "next/link";

export default function ActionButtons({course}) {
    const dispatch = useDispatch();
    return <div className={styles.actionbtns}>
        <button onClick={() => dispatch(addToCart(course))} className={styles.btn}>Add to card</button>
        <Link href={`/bundles`} className={styles.btn2}>Share & Earn</Link>
    </div>
}