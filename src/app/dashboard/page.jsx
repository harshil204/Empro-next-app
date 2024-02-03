"use client"
import Header from "@/components/Dashboard/Header";
import styles from "./pageStyles.module.css";
import ExpenseCard from "@/components/Dashboard/ExpenseCard";


const page = () => {
  return (
    <>
      <div className={styles?.main}>
        <Header />
        <div className={styles?.upperBodyContainer}>
          <div className={styles?.headingContainer}>
            <h1 className={styles?.heading}>
              Your Expenses For The Month Of January
            </h1>
          </div>
          <button
            className={styles?.addNewButton}
            onClick={() => {
            }}>Add new expense</button>
        </div>
        <div className={styles?.expensesContainer}>
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
          <ExpenseCard />
        </div>
      </div>

    </>
  );
};

export default page;
