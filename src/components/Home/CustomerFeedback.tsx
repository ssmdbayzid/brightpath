import {customerFeedback} from "@/assets/data";
import Image from "next/image";
import styles from './CustomerFeedback.module.scss'
import { BiSolidQuoteAltLeft } from "react-icons/bi";


export default function CustomerFeedback (){
    return (
        <div className=" section">
            <div className={`${styles.heading} `}>
                <h2 className="section-title">What customers say about us.</h2>
                <p className="section-para"> Over 50,000 satisfied customers that have trusted Ghoori Learning since 2020.</p>
            </div>
            <div className={styles.feedbackArea}>
                { customerFeedback && customerFeedback.map((customer:any, index:number) => (
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