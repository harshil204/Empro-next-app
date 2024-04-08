import styles from "../../styles/Dashboard/modal.module.css";
import { SlClose } from "react-icons/sl";
import { FaCirclePlus } from "react-icons/fa6";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Nookies from "nookies";
import { createFormData } from "@/lib/globalFunction";
import errorMessage from "../errorMessage";

const Modal = ({ modal, setModal, fetchData }) => {
  const token = Nookies.get()?.auth;
  const [image, setImage] = useState(false);
  const initialValues = {
    receipt_img: "",
    title: "",
    description: "",
    amount: "",
    expenseCategory: "",
  };
  const validationSchema = Yup?.object()?.shape({
    receipt_img: Yup?.string()?.required("Receipt image is required"),
    title: Yup?.string()?.required("Title is required"),
    description: Yup?.string()?.required("Description is required"),
    amount: Yup?.number("Amount must be a number")?.required(
      "Amount is required"
    ),
    expenseCategory: Yup?.string()?.required("Expense Category is required"),
  });
  const onSubmit = async (values) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const formData = createFormData(values);
      const res = await axios.post(
        `${process?.env?.NEXT_PUBLIC_BASE_URL}expenses`,
        formData,
        config
      );
      if (res?.status === 200) {
        alert("Expense has been created");
        fetchData();
        setModal(false);
      }
    } catch (error) {
      console.error("Something went wrong");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <div className={`${styles?.innerContainer} `}>
              {console.log("errors ==>", errors)}
              <Form className={styles?.form}>
                <div className={styles?.upperSection}>
                  <div className={styles?.imageUploaderContainer}>
                    {values?.receipt_img ? (
                      <Image
                        className={styles?.imageFrame}
                        src={image}
                        width={100}
                        height={100}
                      />
                    ) : (
                      <div className={styles?.imageFrame}>
                        <input
                          className={styles?.imageInput}
                          type="file"
                          id="img"
                          name="img"
                          accept="image/*"
                          onChange={(e) => {
                            setFieldValue("receipt_img", e?.target?.files[0]);
                            handleImageUpload(e);
                          }}
                        />
                        <FaCirclePlus color="white" size={28} />
                      </div>
                    )}
                    <ErrorMessage name="receipt_img" component={errorMessage} />
                  </div>
                  <div className={styles?.inputFieldsContainer}>
                    <input
                      className={styles?.inputField}
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Enter Title"
                      value={values?.title}
                      onChange={(e) => {
                        setFieldValue("title", e?.target?.value);
                      }}
                    />
                    <ErrorMessage name="title" component={errorMessage} />
                    <input
                      className={styles?.inputField}
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Enter Description"
                      value={values?.description}
                      onChange={(e) => {
                        setFieldValue("description", e?.target?.value);
                      }}
                    />
                    <ErrorMessage name="description" component={errorMessage} />
                    <input
                      className={styles?.inputField}
                      type="text"
                      name="amount"
                      id="amount"
                      placeholder="Enter Amount"
                      value={values?.amount}
                      onChange={(e) => {
                        setFieldValue("amount", e?.target?.value);
                      }}
                    />
                    <ErrorMessage name="amount" component={errorMessage} />
                  </div>
                </div>
                <div className={styles?.checkboxContainer}>
                  <div className={styles?.checkboxGroup}>
                    <label htmlFor="travel">Travel</label>
                    <input
                      className={styles?.checkbox}
                      type="checkbox"
                      name="category"
                      id="travel"
                      value="travel"
                      onChange={() => {
                        setFieldValue("expenseCategory", "travel");
                      }}
                    />
                  </div>
                  <div className={styles?.checkboxGroup}>
                    <label htmlFor="food">Food</label>
                    <input
                      className={styles?.checkbox}
                      type="checkbox"
                      name="category"
                      id="food"
                      value="food"
                      onChange={() => {
                        setFieldValue("expenseCategory", "food");
                      }}
                    />
                  </div>
                  <div className={styles?.checkboxGroup}>
                    <label htmlFor="training">Training</label>
                    <input
                      className={styles?.checkbox}
                      type="checkbox"
                      name="category"
                      id="training"
                      value="training"
                      onChange={() => {
                        setFieldValue("expenseCategory", "training");
                      }}
                    />
                  </div>
                  <div className={styles?.checkboxGroup}>
                    <label htmlFor="accomodation">Accomodation</label>
                    <input
                      className={styles?.checkbox}
                      type="checkbox"
                      name="category"
                      id="accomodation"
                      value="accomodation"
                      onChange={() => {
                        setFieldValue("expenseCategory", "Accomodation");
                      }}
                    />
                  </div>
                  <div className={styles?.checkboxGroup}>
                    <label htmlFor="misc">Misc</label>
                    <input
                      className={styles?.checkbox}
                      type="checkbox"
                      name="category"
                      id="misc"
                      value="misc"
                      onChange={() => {
                        setFieldValue("expenseCategory", "misc");
                      }}
                    />
                  </div>
                  <div className={styles?.checkboxGroup}>
                    <label htmlFor="software purchase">Softwere Purchase</label>
                    <input
                      className={styles?.checkbox}
                      type="checkbox"
                      name="category"
                      id="software purchase"
                      value="software purchase"
                      onChange={() => {
                        setFieldValue("expenseCategory", "software-purchase");
                      }}
                    />
                  </div>
                </div>

                <button type="submit" className={styles?.submitFormButton}>
                  Submit
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Modal;
