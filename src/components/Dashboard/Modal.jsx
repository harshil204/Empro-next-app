import styles from "../../styles/Dashboard/modal.module.css";
import { SlClose } from "react-icons/sl";
import { FaCirclePlus } from "react-icons/fa6";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { useState } from "react";

const Modal = ({ modal, setModal }) => {
  const [image, setImage] = useState(false);
  const initialValues = {
    receipt_img: "",
    title: "",
    description: "",
    amount: "",
    expenseCategory: "",
  };
  const validationSchema = Yup?.object()?.shape({
    receipt_img: Yup?.object()?.required("Receipt image is required"),
    title: Yup?.string()?.required("Title is required"),
    description: Yup?.string()?.required("Description is required"),
    amount: Yup?.number("Amount must be a number")?.required(
      "Amount is required"
    ),
    expenseCategory: Yup?.string()?.required("Expense Category is required"),
  });
  const onSubmit = async (values) => {
    console.log("Form has been submitted successfully ==> ", values);
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
              {console.log("values ==>", values)}
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
                  </div>
                  <div className={styles?.inputFieldsContainer}>
                    <input
                      className={styles?.inputField}
                      type="text"
                      name="Title"
                      id="Title"
                      placeholder="Enter Title"
                      value={values?.title}
                      onChange={(e) => {
                        setFieldValue("title", e?.target?.value);
                      }}
                    />
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
                      onChange={() => {
                        setFieldValue("expenseCategory", "travel");
                      }}
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
                      onChange={() => {
                        setFieldValue("expenseCategory", "food");
                      }}
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
                      onChange={() => {
                        setFieldValue("expenseCategory", "training");
                      }}
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
                      onChange={() => {
                        setFieldValue("expenseCategory", "Accomodation");
                      }}
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
                      onChange={() => {
                        setFieldValue("expenseCategory", "misc");
                      }}
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
                      onChange={() => {
                        setFieldValue("expenseCategory", "software-purchase");
                      }}
                    />
                  </div>
                </div>
                <button className={styles?.submitFormButton}>Submit</button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Modal;
