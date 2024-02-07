"use client";
import Header from "@/components/Dashboard/Header";
import styles from "./pageStyles.module.css";
import ExpenseCard from "@/components/Dashboard/ExpenseCard";
import { useState } from "react";
import Sidebar from "@/components/Dashboard/Modal";
import Footer from "@/components/Footer";

const page = () => {
  const [modal, setModal] = useState(false);
  console.log("modal Status", modal);
  return (
    <>
      <div className={styles?.main}>
        {modal && <Sidebar modal={modal} setModal={setModal} />}
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
              setModal(!modal);
            }}
          >
            Add new expense
          </button>
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
      <Footer />
    </>
  );
};

export default page;
