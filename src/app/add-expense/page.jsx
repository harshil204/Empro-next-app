import styles from "../add-expense/pageStyles.module.css"
import plusIcon from "../../../public/icons/plus.png"

const page = () => {
    return (
        <div className={styles?.container}>

            <form className={styles?.form}>
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
    )
}

export default page