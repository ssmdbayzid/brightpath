import {customerFeedback} from "@/assets/data";
import Image from "next/image";
import styles from './CustomerFeedback.module.scss'
import { BiSolidQuoteAltLeft } from "react-icons/bi";


export default function CustomerFeedback (){
    return (
        <div className="container">
            <div className={styles.feedbackArea}>
                { customerFeedback && customerFeedback.map((customer, index) => (
                    <div key={index} className={styles.feedbackContent}>
                        <Image src={customer.image} width={100} height={60} className={styles.image} alt="customer photo" />
                        <h3 className={styles.name}>{customer.name}</h3>
                        <p className ={styles.designation}>{customer.designation}</p>
                        <p className={styles.feedback}>{customer.feedback}</p>
                        <div className={styles.quoteIcon}>
                            <BiSolidQuoteAltLeft />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}