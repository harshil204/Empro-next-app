import styles from "../styles/contactForm.module.css";

const ContactUs = () => {
  return (
    <div className={styles?.container}>
      <h2 className={styles?.formHeading}>Contact Us</h2>
      <form className={styles?.form}>
        <li className={styles?.list}>
          <input
            className={styles?.inputField}
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </li>
        <li className={styles?.list}>
          <input
            className={styles?.inputField}
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </li>
        <li className={styles?.list}>
          <textarea
            className={styles?.textarea}
            type="text"
            name="message"
            id="message"
            placeholder="Write your concern"
            cols={20}
            rows={4}
          />
        </li>
        <button className={styles?.submitFormButton}>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
