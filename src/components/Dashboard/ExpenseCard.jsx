import styles from "../../styles/Dashboard/expenseCard.module.css";
import receipt from "../../../public/img/receipt.png";
import Image from "next/image";

const ExpenseCard = ({ modal, setModal }) => {
  return (
    <div
      className={styles?.container}
      onClick={() => setModal({ ...modal, view: true })}
    >
      <Image className={styles?.image} src={receipt} alt="Expense receipt" />

      <div className={styles?.verticalLine}></div>

      <div className={styles?.rightContent}>
        <p className={styles?.dateText}>12/01/2024</p>
        <h4 className={styles?.expenseSubject}>Good Trip</h4>
        <span className={styles?.expenseDesc}>Trip Description</span>
        <div className={styles?.statusButton}>Aprooved</div>
        <span className={styles?.reportedToText}>
          <b>Reported To</b>:- Vinesh Sharma (HR)
        </span>
      </div>
    </div>
  );
};

export default ExpenseCard;
