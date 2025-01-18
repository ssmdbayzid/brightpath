import { Modal } from 'react-responsive-modal';
import styles from './LoginStyles.module.scss'
import Link from "next/link";
export const Login = ({openLoginModal, setOpenLoginModal, openSignupModal, setOpenSignupModal,}
                      :{openLoginModal:any, setOpenLoginModal:any, openSignupModal:any, setOpenSignupModal:any}) => {
    const onCloseModal = () => {
        setOpenLoginModal(!openLoginModal);
    }

    const handleSwitch = () => {
        setOpenLoginModal(!openLoginModal)
        setOpenSignupModal(!openSignupModal);
    }
    return<Modal  open={openLoginModal} onClose={onCloseModal} center
                 styles={{
                     overlay: {
                         backgroundColor: "rgba(0, 0, 0, 0.8)", // Darker overlay
                     },
                     modal: {
                         background: "#fff", // Custom background color
                         borderRadius: "16px", // Add rounded corners
                         padding: "20px", // Add padding inside the modal
                         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add shadow
                         maxWidth: "550px", // Set max width for the modal
                         width: "90%", // Responsive width
                     },
                 }}
    >
        <h2 className={styles.title}>Sign In</h2>
        <form action="#" className={styles.form}>
            <input type="text" placeholder="Mobile" className={styles.input}/>
            <input type="password" placeholder="Password" className={styles.input}/>
            <Link href="#">Forget Password?</Link>
            <button>Log In</button>
            <Link onClick={()=>{}} href="#" className={styles.link}>Dont have an account? <span onClick={handleSwitch}>Sign up</span></Link>
        </form>
    </Modal>
}