import styles from './CommunicativeBlog.module.scss'
import {addToCart} from "@/store/features/cartSlice";
import React from "react";
import {useDispatch} from "react-redux";
import Link from "next/link";

type Props = {
    course?: React.ReactNode ;
}

export default function BlogCartButtonComponent ({course}:Props){
    const dispatch = useDispatch();
    return (
            <div className={styles.actionbtns}>
                <button onClick={() => dispatch(addToCart(course))} className={styles.btn}>Add to
                    card
                </button>
                <Link href={`/bundles`} className={styles.btn2}>Share & Earn</Link>
            </div>
    )
}