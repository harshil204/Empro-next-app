import { SlClose } from "react-icons/sl";
import receipt from "../../../public/img/receipt.png";
import Image from "next/image";
import styles from "@/styles/Dashboard/viewExpenseModal.module.css";

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
              <Image className={styles?.image} src={receipt} alt="Expense receipt" />
              <div className={styles?.verticalLine}></div>
            </div>
            <div className={styles?.rightContent}>
              <p className={styles?.dateText}>12/01/2024</p>
              <h2 className={styles?.expenseSubject}>Good Trip</h2>
              <div className={styles?.statusButton}>Aprooved</div>
              <span className={styles?.reportedToText}>
                <b>Reported To</b>:- Vinesh Sharma (HR)
              </span>
            </div>
          </div>

          <div className={styles?.lowerContainer}>
            <span className={styles?.expenseDesc}>Trip Description: </span>
            <div className={styles?.descContainer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel
              saepe officia accusamus voluptatibus hic repudiandae beatae dolor
              maiores dolore eum sequi harum, aspernatur facere, exercitationem
              adipisci consequuntur unde aliquam? Perspiciatis vitae rem facere
              ipsum quos porro ipsam sint dicta molestias deserunt a fugit neque
              in explicabo, modi corrupti temporibus tempora saepe nulla
              accusamus dolores iure. Culpa similique et vero.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewExpenseModal;
