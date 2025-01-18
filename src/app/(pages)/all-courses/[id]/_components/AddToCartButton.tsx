import styles from "@/app/(pages)/all-courses/[id]/CourseDetails.module.scss";
import {addToCart} from "@/store/features/cartSlice";
import {useDispatch} from "react-redux";
import Link from "next/link";
import React from "react";


type AddToCartProps = {
    course?:React.ReactNode;
}

export default function AddToCartButton({course}: AddToCartProps) {
    const dispatch = useDispatch()
    return <div className={styles.actionbtns}>
        <button
            onClick={() => dispatch(addToCart(course))}
            className={styles.btn}
        >
            Add to cart
        </button>
        <Link href={`/bundles`} className={styles.btn2}>
            Share & Earn
        </Link>
    </div>
}