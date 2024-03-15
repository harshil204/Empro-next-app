"use client";
import Header from "@/components/Dashboard/Header";
import styles from "./pageStyles.module.css";
import ExpenseCard from "@/components/Dashboard/ExpenseCard";
import { useState } from "react";
import Modal from "@/components/Dashboard/Modal";
import Footer from "@/components/Footer";
import ViewExpenseModal from "@/components/Dashboard/ViewExpenseModal";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session, update: sessionUpdate } = useSession()
  const [modal, setModal] = useState({
    create: false,
    view: false,
  });
  console.log("data => ", session)
  return (
    <>
      <div className={styles?.main}>
        {modal?.view && <ViewExpenseModal modal={modal} setModal={setModal} />}
        {modal?.create && <Modal modal={modal} setModal={setModal} />}
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
              setModal({
                ...modal,
                create: true,
              });
            }}
          >
            Add new expense
          </button>
        </div>
        <div className={styles?.expensesContainer}>
          <ExpenseCard modal={modal} setModal={setModal} />
          <ExpenseCard modal={modal} setModal={setModal} />
          <ExpenseCard modal={modal} setModal={setModal} />
          <ExpenseCard modal={modal} setModal={setModal} />
          <ExpenseCard modal={modal} setModal={setModal} />
          <ExpenseCard modal={modal} setModal={setModal} />
          <ExpenseCard modal={modal} setModal={setModal} />
          <ExpenseCard modal={modal} setModal={setModal} />
          <ExpenseCard modal={modal} setModal={setModal} />
          <ExpenseCard modal={modal} setModal={setModal} />
          <ExpenseCard modal={modal} setModal={setModal} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
