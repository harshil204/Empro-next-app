import { SlClose } from "react-icons/sl";
import receipt from "../../../public/img/receipt.png";
import Image from "next/image";
import styles from "@/styles/Dashboard/viewExpenseModal.module.css";
import moment from "moment";
import { statusColor } from "@/lib/globalFunction";

const ViewExpenseModal = ({ modal, setModal }) => {
  return (
    <>
      <div className={styles?.container}>
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
              <div
                className={styles?.statusButton}
                style={{ backgroundColor: statusColor(modal?.data?.status) }}
              >
                {" "}
                {modal?.data?.status?.toUpperCase()}
              </div>
              <span className={styles?.reportedToText}>
                <b>Reported To</b>:- Vinesh Sharma (HR)
              </span>
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
