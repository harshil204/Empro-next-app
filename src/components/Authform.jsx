"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/authForm.module.css";
import * as Yup from "yup";
import { _passwordRegex_ } from "@/lib/regEx";
import { Form, Formik, ErrorMessage } from "formik";
import errorMessage from "./errorMessage";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Authform = () => {
  const router = useRouter()
  const { data: session, update: sessionUpdate } = useSession()
  console.log("Auth Form session --> ", session)
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup?.object()?.shape({
    email: Yup?.string()?.email("Invalid Email")?.required("Email is required"),
    password: Yup?.string()
      ?.matches(
        _passwordRegex_,
        "Password must be 8+ characters with 1 uppercase, 1 lowercase, 1 digit, and 1 special character."
      )
      ?.required("Password is required"),
  });

  const onSubmit = async (values) => {
    console.log("Form has been submitted successfully", values);
    try {
      await signIn('credentials',{
        email: values?.email,
        password: values?.password,
        redirect:false,
      })
    } catch (error) {
      console.error("Something went wrong")
    }
  };
  useEffect(() => {
   if(session){
    router.push("/dashboard")
   }
  }, [session])
  
  return (
    <>
      <div className={styles?.container}>
        <h4 className={styles?.formHeading}>Login</h4>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form className={styles?.form}>
              <div className={styles?.inputWrapper}>
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
              </div>

              <div className={styles?.inputWrapper}>
                <input
                  className={`${styles?.inputField} ${styles?.passwordField}`}
                  type="password"
                  name="password"
                  id="password"
                  value={values?.password}
                  onChange={(e) => {
                    setFieldValue("password", e?.target?.value);
                  }}
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component={errorMessage} />
              </div>
              <button className={styles?.submitFormButton}>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Authform;
