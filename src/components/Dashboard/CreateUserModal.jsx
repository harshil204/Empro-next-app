import { ToastContainer } from "react-toastify";
import Loader from "../Loader";
import styles from "../../styles/Dashboard/modal.module.css";
import { useState } from "react";
import { SlClose } from "react-icons/sl";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { createFormData, notify } from "@/lib/globalFunction";
import { FaCirclePlus } from "react-icons/fa6";
import errorMessage from "../errorMessage";
import Select from "react-select";
import Image from "next/image";
import axios from "axios";

const CreateUserModal = ({ modal, setModal }) => {
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState(false);

  const options = [
    { label: "Manager", value: "Manager" },
    { label: "Employee", value: "Employee" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: "30px",
      borderRadius: "10px",
      border: "none",
      fontFamily: "quicksand",
      color: "#ffffff",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        fontFamily: "quicksand",
        color: "#000000",
      };
    },
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

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
    profile_img: "",
  };
  const validationSchema = Yup?.object()?.shape({
    firstname: Yup?.string()?.required("Firstname is required"),
    lastname: Yup?.string()?.required("Lastname is required"),
    email: Yup?.string()?.required("Email is required"),
    password: Yup?.string()?.required("Password is required"),
    role: Yup?.string()?.required("Role is required"),
    profile_img: Yup?.string()?.required("Image is required"),
  });
  const onSubmit = async (values) => {
    console.log("Submitted Values ==> ", values);
    try {
      const formData = createFormData(values);
      const res = await axios.post(
        `${process?.env?.NEXT_PUBLIC_BASE_URL}user/register`,
        formData
      );
      if (res?.status === 200) {
        notify(true, "Expense requested successfully", 800);
        setTimeout(() => {
          setModal(false);
        }, 1500);
      }
    } catch (error) {
      notify(true, "Something went wrong");
    }
  };
  return (
    <div className={styles?.container}>
      <ToastContainer />
      {loader && <Loader />}
      <div className={styles?.headerContainer}>
        <h3 className={styles?.modalHeading}>Create User</h3>
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
        {({ values, setFieldValue }) => (
          <div className={`${styles?.createUserInnerContainer} `}>
            <Form className={styles?.createUserForm}>
              <div className={styles?.upperSection}>
                <div className={styles?.imageUploaderContainer}>
                  {values?.profile_img ? (
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
                          setFieldValue("profile_img", e?.target?.files[0]);
                          handleImageUpload(e);
                        }}
                      />
                      <FaCirclePlus color="white" size={28} />
                    </div>
                  )}
                  <ErrorMessage name="profile_img" component={errorMessage} />
                </div>
                <div className={styles?.inputFieldsContainer}>
                  <input
                    className={styles?.createUserInputField}
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Enter firstname"
                    value={values?.firstname}
                    onChange={(e) => {
                      setFieldValue("firstname", e?.target?.value);
                    }}
                  />
                  <ErrorMessage name="firstname" component={errorMessage} />
                  <input
                    className={styles?.createUserInputField}
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter lastname"
                    value={values?.lastname}
                    onChange={(e) => {
                      setFieldValue("lastname", e?.target?.value);
                    }}
                  />
                  <ErrorMessage name="lastname" component={errorMessage} />
                  <Select
                    className={styles?.createUserSelectField}
                    options={options}
                    styles={customStyles}
                    placeholder="Select Role"
                    onChange={(val) => {
                      setFieldValue("role", val?.label);
                    }}
                  />
                  <ErrorMessage name="role" component={errorMessage} />
                </div>
              </div>

              <input
                className={styles?.createUserInputField}
                type="text"
                name="email"
                id="email"
                placeholder="Enter email"
                value={values?.email}
                onChange={(e) => {
                  setFieldValue("email", e?.target?.value);
                }}
              />
              <ErrorMessage name="email" component={errorMessage} />
              <input
                className={styles?.createUserInputField}
                type="text"
                name="password"
                id="password"
                placeholder="Enter password"
                value={values?.password}
                onChange={(e) => {
                  setFieldValue("password", e?.target?.value);
                }}
              />
              <ErrorMessage name="password" component={errorMessage} />

              <button
                type="submit"
                className={styles?.createUserSubmitFormButton}
              >
                Create
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreateUserModal;
