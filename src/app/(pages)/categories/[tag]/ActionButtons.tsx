'use client'
import {useDispatch} from "react-redux";
import styles from "./FilteredCourse.module.scss";
import {addToCart} from "@/store/features/cartSlice";
import Link from "next/link";
import React from "react";



export default function ActionButtons({course}: {course?: any;}) {
    const dispatch = useDispatch();
    return <div className={styles.actionbtns}>
        <button onClick={() => dispatch(addToCart(course))} className={styles.btn}>Add to card</button>
        <Link href={`/bundles`} className={styles.btn2}>Share & Earn</Link>
    </div>
}