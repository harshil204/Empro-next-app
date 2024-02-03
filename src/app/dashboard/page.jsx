import Header from "@/components/Dashboard/Header";
import styles from "./pageStyles.module.css";

const page = () => {
  return (
    <div className={styles?.main}>
      <Header />
      <div className={styles?.headingContainer}>
        <h1 className={styles?.heading}>
          Your Expenses For The Month Of January
        </h1>
      </div>
    </div>
  );
};

export default page;
