"use client";
import React, { useState } from "react";
import styles from "@/styles/header.module.css";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import Link from "next/link";
import { Divide, Divide as Hamburger } from "hamburger-react";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <div className={styles?.container}>
        <div className={styles?.headerContainer}>
          <div className={styles?.wrapperContainer}>
            {/* Logo */}
            <div className={styles?.logoContainer}>
              <Link href={"/"}>
                <Image className={styles?.logo} src={logo} width={180} alt="logo" />
              </Link>
            </div>

            {/* navigation tabs */}
            <div className={styles?.navigationTabContainer}>
              <ul>
                <li>
                  <Link href={"/about-us"}>About</Link>
                </li>
                <li>
                  <Link href={"/our-team"}>Our Team</Link>
                </li>
                <li>
                  <Link href={"/contact-us"}>Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* <div className={styles?.burger}>
              <Divide
                color="white"
                onClick={() => {
                  setSideBar(!sideBar);
                }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
