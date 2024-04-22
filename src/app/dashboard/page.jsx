"use client";
import Header from "@/components/Dashboard/Header";
import styles from "./pageStyles.module.css";
import ExpenseCard from "@/components/Dashboard/ExpenseCard";
import { useEffect, useState } from "react";
import Modal from "@/components/Dashboard/Modal";
import Footer from "@/components/Footer";
import ViewExpenseModal from "@/components/Dashboard/ViewExpenseModal";
import axios from "axios";
import { getConfig } from "@/lib/globalFunction";
import CreateUserModal from "@/components/Dashboard/CreateUserModal";

const page = () => {
  const [modal, setModal] = useState({
    createUser: false,
    create: false,
    view: false,
  });
  const [data, setData] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process?.env?.NEXT_PUBLIC_BASE_URL}expenses`,
        getConfig()
      );
      if (res?.status === 200) {
        setData(res?.data);
      } else {
        throw error;
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={styles?.main}>
        {modal?.view && (
          <ViewExpenseModal
            modal={modal}
            setModal={setModal}
            fetchData={fetchData}
          />
        )}
        {modal?.create && (
          <Modal modal={modal} setModal={setModal} fetchData={fetchData} />
        )}

        {modal?.createUser && (
          <CreateUserModal modal={modal} setModal={setModal} />
        )}

        <Header />

        <div className={styles?.upperBodyContainer}>
          <div className={styles?.headingContainer}>
            <h1 className={styles?.heading}>
              Your Expenses For The Month Of January
            </h1>
          </div>
          <div className={styles?.buttonContainer}>
            <button
              className={styles?.addNewButton}
              onClick={() => {
                setModal({
                  ...modal,
                  createUser: true,
                });
              }}
            >
              Create User
            </button>
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
        </div>
        <div className={styles?.expensesContainer}>
          {data?.data?.length > 0 &&
            data?.data?.map((expense, index) => (
              <ExpenseCard
                key={index}
                modal={modal}
                setModal={setModal}
                data={expense}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
