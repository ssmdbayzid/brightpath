'use client'
import {addToCart} from "@/store/features/cartSlice";
import styles from "@/components/Home/MostPopularBundle.module.scss";
import {useDispatch} from "react-redux";

export const CartButtons = ({course})=> {
   const dispatch = useDispatch();
    return <div className={styles.actionbtns}>
        <button onClick={() => dispatch(addToCart(course))} className={styles.btn}>Add to card</button>
        <a href={`/bundles`} className={styles.btn2}>Share & Earn</a>
    </div>
}