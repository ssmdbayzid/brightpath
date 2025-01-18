'use client'
import {addToCart} from "@/store/features/cartSlice";
import styles from "@/components/Home/MostPopularBundle.module.scss";
import {useDispatch} from "react-redux";
import Link from "next/link";
import React from "react";




export const CartButtons = ({course}:any)=> {
   const dispatch = useDispatch();
    return <div className={styles.actionbtns}>
        <button onClick={() => dispatch(addToCart(course))} className={styles.btn}>Add to card</button>
        <Link href={`/bundles`} className={styles.btn2}>Share & Earn</Link>
    </div>
}