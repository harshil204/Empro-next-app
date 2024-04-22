import styles from "../../styles/Dashboard/expenseCard.module.css";
import receipt from "../../../public/img/receipt.png";
import Image from "next/image";
import { statusColor } from "@/lib/globalFunction";
import moment from "moment";
import Nookies from "nookies";

import noImage from "../../../public/img/noImage.jpg";
const ExpenseCard = ({ modal, setModal, data }) => {
  const NookieUser = Nookies.get()?.userData;
  const user = NookieUser && JSON.parse(NookieUser);

  return (
    <div
      className={styles?.container}
      onClick={() => setModal({ ...modal, view: true, data: data })}
    >
      <Image
        className={styles?.image}
        src={
          `${process?.env?.NEXT_PUBLIC_RESOURCE_URL}${data?.receipt_img}` ??
          noImage
        }
        alt="Expense receipt"
        width={100}
        height={100}
      />
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
          style={{ backgroundColor: statusColor(data?.status.toLowerCase()) }}
          className={styles?.statusButton}
        >
          {data?.status?.toUpperCase()}
        </div>

        {data?.reportedBy && (
          <span className={styles?.reportedToText}>
            <b>Reported To</b>:- {data?.reportedBy}
          </span>
        )}
        {user?.role?.toLowerCase() !== "developer" && data?.createdBy && (
          <span className={styles?.reportedToText}>
            <b>Created By</b>:- {data?.createdBy}
          </span>
        )}
      </div>
    </div>
  );
};

export default ExpenseCard;
