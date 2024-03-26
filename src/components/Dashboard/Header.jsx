import styles from "../../styles/Dashboard/header.module.css";
import logo from "../../../public/img/logo.png";
import settingsIcon from "../../../public/icons/settings.png";
import DeppDp from "../../../public/img/deppDp.jpg";
import Image from "next/image";
import Nookies from "nookies";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Header = () => {
  const userCookie = Nookies.get("userData")?.userData;
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (userCookie) {
      setUser(JSON?.parse(userCookie));
    }
  }, [userCookie]);

  return (
    <div className={styles?.container}>
      <Image className={styles?.logo} src={logo} alt="Logo" />
      <div className={styles?.contentContainer}>
        <Image
          className={styles?.settingsIcon}
          src={settingsIcon}
          onClick={() => console.log("sign out call")}
          alt="Settings icon"
        />
        {user ? (
          <div className={styles?.empDetailContainer}>
            <div>
              <h4 className={`${styles?.fontWeight100} ${styles?.h4}`}>
                {user?.name}
              </h4>

              <h4 className={`${styles?.fontWeight200} ${styles?.h5}`}>
                Emp Id: {user?.id}
              </h4>
            </div>

            <div className={styles?.empRole}>{user?.role}</div>
          </div>
        ) : (
          <Skeleton
            width={175}
            height={75}
            baseColor="#c7c7c740"
            highlightColor="#cfcfcf80"
          />
        )}

        {user ? (
          <Image
            className={styles?.dp}
            src={`${process?.env?.NEXT_PUBLIC_RESOURCE_URL}${user?.profile_img}`}
            width={100}
            height={100}
            alt="Display picture"
          />
        ) : (
          <Skeleton
            className={styles?.dp}
            baseColor="#c7c7c740"
            highlightColor="#cfcfcf80"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
