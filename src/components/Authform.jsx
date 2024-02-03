import React from "react";
import styles from "../styles/authForm.module.css";

const Authform = () => {
  return (
    <div className={styles?.container}>
      <h4 className={styles?.formHeading}>Login</h4>
      <form className={styles?.form}>
        <input
          className={styles?.inputField}
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <input
          className={`${styles?.inputField} ${styles?.passwordField}`}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <button className={styles?.submitFormButton}>Submit</button>
      </form>
    </div>
  );
};

export default Authform;
