import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./pageStyles.module.css";
import ContactUs from "@/components/ContactUs";

const page = () => {
  return (
    <div className={styles?.backImage}>
      <Header />
      <div className={styles?.bgContainer}>
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default page;
