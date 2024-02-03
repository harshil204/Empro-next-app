import Authform from "@/components/Authform"
import Header from "../components/Header"
import styles from "../styles/bg.module.css"
import homeStyles from "../styles/home.module.css"
import Footer from "@/components/Footer"

const page = () => {
  return (
    <>
      <div className={styles?.backImage}>
        <Header />

        <h2 className={homeStyles?.tagLine}>Simplified Expense Management For Businesses</h2>
        <Authform />

        <Footer />
      </div>
    </>
  )
}

export default page