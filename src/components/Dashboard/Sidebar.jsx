import styles from "../../styles/Dashboard/sidebar.module.css"
import plusIcon from "../../../public/icons/plus.png"
import Image from "next/image"
import { SlClose } from "react-icons/sl";

const Sidebar = ({ modal, setModal }) => {
    return (
        <>
            <div className={styles?.container}>
                <div className={styles?.headerContainer}>
                    <h3 className={styles?.modalHeading}>Add New Expense</h3>
                    <div className={styles?.closeIconWrapper}>
                        <SlClose size={20} color={"#ffffff"} onClick={() => {
                            setModal(false)
                        }} />
                    </div>
                </div>
                <div className={styles?.innerContainer}>
                    <form className={styles?.form}>
                        <div className={styles?.upperSection}>
                            <div className={styles?.imageUploaderContainer}>
                                <div className={styles?.imageFrame}>
                                    <input type="file" id="img" name="img" accept="image/*" hidden />
                                    <Image
                                        className={styles?.uploadIconImage}
                                        src={plusIcon}
                                    />
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
                                <input type="checkbox" name="category" id="category" value="travel" />
                            </div>
                            <div className={styles?.checkboxGroup}>
                                <label htmlFor="category">Food</label>
                                <input type="checkbox" name="category" id="category" value="food" />
                            </div>
                            <div className={styles?.checkboxGroup}>
                                <label htmlFor="category">Training</label>
                                <input type="checkbox" name="category" id="category" value="training" />
                            </div>
                            <div className={styles?.checkboxGroup}>
                                <label htmlFor="category">Accomodation</label>
                                <input type="checkbox" name="category" id="category" value="accomodation" />
                            </div>
                            <div className={styles?.checkboxGroup}>
                                <label htmlFor="category">Misc</label>
                                <input type="checkbox" name="category" id="category" value="misc" />
                            </div>
                            <div className={styles?.checkboxGroup}>
                                <label htmlFor="category">Softwere Purchase</label>
                                <input type="checkbox" name="category" id="category" value="software purchase" />
                            </div>
                        </div>
                        <button className={styles?.submitFormButton}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sidebar