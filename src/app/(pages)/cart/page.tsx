'use client'

import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import styles from './cart.module.scss'
import Image from "next/image";
import {removeFromCart} from "@/store/features/cartSlice";

export default function  CardPage (){
    const [cart, setCart] = useState([])
    const cartItems = useSelector(state=>state.cart.cart)

    const dispatch = useDispatch()
    useEffect(() => {
        if(cartItems){
            setCart(cartItems)
        }
    }, [cartItems])

    const getTotal = (carts)=>{
        let total = 0;
        carts.forEach((item)=>{
            total += Number(item.price_new.split(' ')[1]);
        })
        return total;
    }

    return <div className="container section">
        {cart.length === 0 ? <h2>Empty Cart Items..</h2> :
            <div>
            <div className={styles.header}>
                <h2>Shopping Cart Page</h2>
                <h4>{cart.length} courses in cart</h4>
            </div>
                <div className={styles.contents}>
                <div className={styles.cartArea}>
                    {cart.map((item, index) =>
                        <div key={index} className={styles.cart}>
                            <div className={styles.content}>
                                <div className={styles.images}>
                                <Image src={item?.thumbnail}  width={500} height={300} className={styles.img}  alt="thumbnail" />
                                </div>
                                <div>
                                    <h3>{item?.title}</h3>
                                    <p><span className={styles.oldPrice}>{item?.price_old}</span> <span className={styles.discount}>{item?.price_discount}</span> {item.price_new}</p>
                                </div>
                            </div>
                            <div className={styles.actions}>
                            <button onClick={()=>dispatch(removeFromCart(item._id))}>Remove</button>
                            <button>Save for later</button>
                            </div>
                        </div> )}
                    <div className={styles.title2}>
                        <h2>Saved for later</h2>
                    </div>
                </div>
                    <div className={styles.cartSummary}>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><span>Sub total</span> <span>{getTotal(cart)}</span></li>
                            <li className={styles.listItem}><span>Learning points</span> <span>0</span></li>
                            <li className={styles.listItem}><span>Coupon</span> <span>0</span></li>
                            <li className={styles.listItem}><span>Referral discount</span> <span>0</span></li>
                            <li className={styles.listItem}><span>Total</span> <span>{getTotal(cart)}</span></li>
                        </ul>
                        <div className={styles.coupon}>
                            <input type="text" placeholder="Enter your coupon code"/>
                            <button>Apply</button>
                        </div>
                        <div className={styles.checkOutCart}>
                            <label htmlFor="bkash" className={styles.checkInput}>
                                <input type="checkbox" id="bkash"/>
                                <Image src="https://ghoorilearning.com/assets/images/bkash.svg" width={80} height={20}
                                       alt="bkash"/>
                            </label>
                            <div className={styles.flexCheckout}>
                                <label htmlFor="nagad" className={styles.checkInput}>
                                    <input type="checkbox" id="nagad"/>
                                    <Image src="https://ghoorilearning.com/assets/images/nagad.svg" width={80}
                                           height={20}
                                           alt="nagad"/>
                                </label>
                                <label htmlFor="upay" className={styles.checkInput}>
                                    <input type="checkbox" id="upay"/>
                                    <Image src="https://ghoorilearning.com/assets/images/upay.svg" width={80}
                                           height={20}
                                           alt="upay"/>
                                </label>
                            </div>
                            <label htmlFor="tap-logo" className={styles.checkInput}>
                                <input type="checkbox" id="tap-logo"/>
                                <Image src="https://ghoorilearning.com/assets/images/tap-logo.svg" width={80}
                                       height={20}
                                       alt="tap-logo"/>
                            </label>
                            <label htmlFor="ok-wallet" className={styles.checkInput}>
                                <input type="checkbox" id="ok-wallet"/>
                                <Image src="https://ghoorilearning.com/assets/images/ok-wallet.svg" width={80}
                                       height={20}
                                       alt="ok-wallet"/>
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        }
    </div>
}