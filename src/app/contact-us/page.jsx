import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./pageStyles.module.css";
import ContactUs from "@/components/ContactUs";

const page = () => {
  return (
    <div className={styles?.backImage}>
      <Header />

      <ContactUs />
      <Footer />
    </div>
  );
};

export default page;
