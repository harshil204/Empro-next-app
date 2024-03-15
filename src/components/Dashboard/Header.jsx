import styles from "../../styles/Dashboard/header.module.css";
import logo from "../../../public/img/logo.png";
import settingsIcon from "../../../public/icons/settings.png";
import DeppDp from "../../../public/img/deppDp.jpg";
import Image from "next/image";
import { signOut } from "next-auth/react";

const Header = () => {
  return (
    <div className={styles?.container}>
      <Image className={styles?.logo} src={logo} />
      <div className={styles?.contentContainer}>
        <Image className={styles?.settingsIcon} src={settingsIcon} onClick={() => signOut()} />
        <div className={styles?.empDetailContainer}>
          <div>
            <h4 className={`${styles?.fontWeight100} ${styles?.h4}`}>
              Harshil Chauhan
            </h4>
            <h4 className={`${styles?.fontWeight100} ${styles?.h5}`}>
              Emp Id: #211639
            </h4>
          </div>
          <div className={styles?.empRole}>Employee</div>
        </div>
        <Image className={styles?.dp} src={DeppDp} />
      </div>
    </div>
  );
};

export default Header;
