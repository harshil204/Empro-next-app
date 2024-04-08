import styles from "../../styles/Dashboard/expenseCard.module.css";
import receipt from "../../../public/img/receipt.png";
import Image from "next/image";
import { statusColor } from "@/lib/globalFunction";
import moment from "moment";

const ExpenseCard = ({ modal, setModal, data }) => {
  return (
    <div
      className={styles?.container}
      onClick={() => setModal({ ...modal, view: true, data: data })}
    >
      <Image className={styles?.image} src={receipt} alt="Expense receipt" />

      <div className={styles?.verticalLine}></div>

      <div className={styles?.rightContent}>
        <p className={styles?.dateText}>
          {moment(data?.createdAt).format("DD-MM-YYYY")}
        </p>
        <h4 className={styles?.expenseSubject}>{data?.title}</h4>
        <span className={styles?.expenseDesc}>
          {" "}
          <b>₹ </b>
          {data?.amount}
        </span>
        <div
          style={{ backgroundColor: statusColor(data?.status) }}
          className={styles?.statusButton}
        >
          {data?.status?.toUpperCase()}
        </div>
        <span className={styles?.reportedToText}>
          <b>Reported To</b>:- Vinesh Sharma (HR)
        </span>
      </div>
    </div>
  );
};

export default ExpenseCard;
