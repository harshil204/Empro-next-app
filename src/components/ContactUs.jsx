"use client";
import axios from "axios";
import styles from "../styles/contactForm.module.css";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import errorMessage from "./errorMessage";

const ContactUs = () => {
  const initialValues = {
    name: "",
    email: "",
    concern: "",
  };

  const validationSchema = Yup?.object()?.shape({
    name: Yup?.string()?.required("Name is required"),
    email: Yup?.string()?.required("Email is required"),
    concern: Yup?.string()?.required("Concern is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const res = await axios?.post(
        `${process?.env?.NEXT_PUBLIC_BASE_URL}contacts`,
        {
          ...values,
        }
      );
      if (res?.status === 201) {
        alert("Concern has been sent successfully");
        resetForm({ values: "" });
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  return (
    <div className={styles?.container}>
      <h2 className={styles?.formHeading}>Contact Us</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form className={styles?.form}>
            <li className={styles?.list}>
              <input
                className={styles?.inputField}
                type="text"
                name="name"
                id="name"
                value={values?.name}
                onChange={(e) => {
                  setFieldValue("name", e?.target?.value);
                }}
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component={errorMessage} />
            </li>
            <li className={styles?.list}>
              <input
                className={styles?.inputField}
                type="text"
                name="email"
                id="email"
                value={values?.email}
                onChange={(e) => {
                  setFieldValue("email", e?.target?.value);
                }}
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component={errorMessage} />
            </li>
            <li className={styles?.list}>
              <textarea
                className={styles?.textarea}
                type="text"
                name="message"
                id="message"
                value={values?.concern}
                onChange={(e) => {
                  setFieldValue("concern", e?.target?.value);
                }}
                placeholder="Write your concern"
                cols={20}
                rows={4}
              />
              <ErrorMessage name="concern" component={errorMessage} />
            </li>
            <button className={styles?.submitFormButton}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
