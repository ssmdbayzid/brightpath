import styles from '../../styles/components/Layout/Footer.module.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <div className={styles.footer}>
           <div className="container">
               <div className={styles.footerArea}>
                   <div className={styles.content}>
                       <h2 className={styles.title}>Title</h2>
                       <ul className={styles.list}>
                           <li><a href="/">Home</a></li>
                           <li><a href="/all-course">All Course</a></li>
                           <li><a href="/about">About</a></li>
                           <li><a href="/login">Log In</a></li>
                           <li><a href="/signup">Sign Up</a></li>
                       </ul>
                   </div>
                   <div className={styles.content}>
                       <h2 className={styles.title}>Get Social</h2>
                       <div className={styles.icons}>
                       <a href="https://www.facebook.com/"><FaFacebookF /></a>
                       <a href="https://twitter.com/"><FaTwitter /></a>
                       <a href="https://www.youtube.com/"><FaYoutube /></a>
                       </div>
                   </div>
                   <div className={styles.content}>
                       <h2 className={styles.title}>Stay Connected</h2>
                       <form action="/">
                           <input type="text" name="name" placeholder="Your Name" className={styles.input}/>
                           <input type="email" name="email" placeholder="Your Email" className={styles.input}/>
                           <button>Subscribe</button>
                       </form>
                   </div>
               </div>
           <div className={styles.copyRight}>
               <p> &copy; Copyright {new Date().getFullYear()}. All rights reserved by <span>Brightpath Institute</span> </p>
           </div>
           </div>
        </div>
    );
}