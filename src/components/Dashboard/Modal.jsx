import styles from "../../styles/Dashboard/modal.module.css";
import { SlClose } from "react-icons/sl";
import { FaCirclePlus } from "react-icons/fa6";

const Modal = ({ modal, setModal }) => {
  return (
    <>
      <div className={styles?.container}>
        <div className={styles?.headerContainer}>
          <h3 className={styles?.modalHeading}>Add New Expense</h3>
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
        <div className={`${styles?.innerContainer} `}>
          <form className={styles?.form}>
            <div className={styles?.upperSection}>
              <div className={styles?.imageUploaderContainer}>
                <div className={styles?.imageFrame}>
                  <input
                    className={styles?.imageInput}
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                  />
                  <FaCirclePlus color="white" size={28} />
                </div>
              </div>
              <div className={styles?.inputFieldsContainer}>
                <input
                  className={styles?.inputField}
                  type="text"
                  name="Title"
                  id="Title"
                  placeholder="Enter Title"
                />
                <input
                  className={styles?.inputField}
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Enter Description"
                />
                <input
                  className={styles?.inputField}
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
            <div className={styles?.checkboxContainer}>
              <div className={styles?.checkboxGroup}>
                <label htmlFor="category">Travel</label>
                <input
                  className={styles?.checkbox}
                  type="checkbox"
                  name="category"
                  id="category"
                  value="travel"
                />
              </div>
              <div className={styles?.checkboxGroup}>
                <label htmlFor="category">Food</label>
                <input
                  className={styles?.checkbox}
                  type="checkbox"
                  name="category"
                  id="category"
                  value="food"
                />
              </div>
              <div className={styles?.checkboxGroup}>
                <label htmlFor="category">Training</label>
                <input
                  className={styles?.checkbox}
                  type="checkbox"
                  name="category"
                  id="category"
                  value="training"
                />
              </div>
              <div className={styles?.checkboxGroup}>
                <label htmlFor="category">Accomodation</label>
                <input
                  className={styles?.checkbox}
                  type="checkbox"
                  name="category"
                  id="category"
                  value="accomodation"
                />
              </div>
              <div className={styles?.checkboxGroup}>
                <label htmlFor="category">Misc</label>
                <input
                  className={styles?.checkbox}
                  type="checkbox"
                  name="category"
                  id="category"
                  value="misc"
                />
              </div>
              <div className={styles?.checkboxGroup}>
                <label htmlFor="category">Softwere Purchase</label>
                <input
                  className={styles?.checkbox}
                  type="checkbox"
                  name="category"
                  id="category"
                  value="software purchase"
                />
              </div>
            </div>
            <button className={styles?.submitFormButton}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
