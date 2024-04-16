import { SlClose } from "react-icons/sl";
import receipt from "../../../public/img/receipt.png";
import Image from "next/image";
import styles from "@/styles/Dashboard/viewExpenseModal.module.css";
import moment from "moment";
import { createFormData, statusColor } from "@/lib/globalFunction";
import Select from "react-select";
import axios from "axios";
import Nookies from "nookies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "@/lib/globalFunction";
import { useState } from "react";
import Loader from "../Loader";

const ViewExpenseModal = ({ modal, setModal, fetchData }) => {
  const [loader, setLoader] = useState(false);
  const token = Nookies.get()?.auth;
  const NookieUser = Nookies.get()?.userData;
  const user = NookieUser && JSON.parse(NookieUser);

  const options = [
    { label: "Aprooved", value: "Aprooved" },
    { label: "Rejected", value: "Rejected" },
    { label: "Pending", value: "Pending" },
  ];
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "150px",
      height: "30px",
      borderRadius: "10px",
      backgroundColor: statusColor(modal?.data?.status.toLowerCase()),
      border: "none",
    }),
  };

  const statusUpdate = async (status) => {
    setLoader(true);
    const config = {
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const data = {
      ...modal?.data,
      status: status,
    };
    delete data?._id;
    delete data?.__v;
    delete data?.createdAt;
    delete data?.updatedAt;
    const formData = createFormData(data);
    try {
      const res = await axios?.put(
        `${process?.env?.NEXT_PUBLIC_BASE_URL}expenses/${modal?.data?._id}`,
        formData,
        config
      );
      if (res?.status === 200) {
        notify(true, "Status updated successfully", 800);
        fetchData();
        setTimeout(() => {
          setLoader(false);
          setModal(false);
        }, 1500);
      }
    } catch (error) {
      setLoader(false);
      notify(true, "Something went wrong");
    }
  };

  return (
    <>
      <div className={styles?.container}>
        <ToastContainer />
        {loader && <Loader />}
        <div className={styles?.headerContainer}>
          <h3 className={styles?.modalHeading}>View Expense</h3>
          <div className={styles?.closeIconWrapper}>
            <SlClose
              size={20}
              color={"#ffffff"}
              onClick={() => {
                setModal({
                  create: false,
                  view: false,
                });
              }}
            />
          </div>
        </div>
        <div className={styles?.innerContainer}>
          <div className={styles?.upperContainer}>
            <div className={styles?.leftContainer}>
              <Image
                className={styles?.image}
                src={receipt}
                alt="Expense receipt"
              />
              <div className={styles?.verticalLine}></div>
            </div>
            <div className={styles?.rightContent}>
              <p className={styles?.dateText}>
                {" "}
                {moment(modal?.data?.createdAt).format("DD-MM-YYYY")}
              </p>
              <h2 className={styles?.expenseSubject}>{modal?.data?.title}</h2>

              {/* status Label */}
              {user?.role?.toLowerCase() === "developer" ? (
                <div
                  className={styles?.statusButton}
                  style={{ backgroundColor: statusColor(modal?.data?.status) }}
                >
                  {" "}
                  {modal?.data?.status?.toUpperCase()}
                </div>
              ) : (
                <Select
                  options={options}
                  styles={customStyles}
                  value={options?.find(
                    (item) =>
                      item?.label.toLowerCase() ===
                      modal?.data?.status?.toLowerCase()
                  )}
                  onChange={(val) => {
                    statusUpdate(val?.value);
                  }}
                />
              )}

              {modal?.data?.reportedBy && (
                <span className={styles?.reportedToText}>
                  <b>Reported To</b>:- {modal?.data?.reportedBy}
                </span>
              )}
            </div>
          </div>

          <div className={styles?.lowerContainer}>
            <span className={styles?.expenseDesc}>Trip Description: </span>
            <div className={styles?.descContainer}>
              {modal?.data?.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewExpenseModal;
