import { Modal } from 'react-responsive-modal';
import styles from './SignUp.module.scss'
import Link from "next/link";

export const SignUp = ({openSignupModal, setOpenSignupModal, openLoginModal, setOpenLoginModal}
: {openSignupModal:any, setOpenSignupModal:any, openLoginModal:any, setOpenLoginModal:any}) => {
    const onCloseModal = () => {
        setOpenSignupModal(!openSignupModal);
    }
    const handleSwitch = () => {
        setOpenSignupModal(!openSignupModal);
        setOpenLoginModal(!openLoginModal)
    }
    return<Modal  open={openSignupModal} onClose={onCloseModal} center
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
        <h2 className={styles.title}>Sign Up</h2>
        <p className={styles.dialog}>Join a new World of Knowledge</p>
        <form action="#" className={styles.form}>
            <input type="text" placeholder="Mobile" className={styles.input}/>
            <button>Sign Up</button>
            <Link href="#" className={styles.link}>Already a member? <span onClick={handleSwitch}>Log In</span></Link>
        </form>
    </Modal>
}