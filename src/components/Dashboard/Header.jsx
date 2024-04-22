import styles from "../../styles/Dashboard/header.module.css";
import logo from "../../../public/img/logo.png";
import settingsIcon from "../../../public/icons/settings.png";
import DeppDp from "../../../public/img/deppDp.jpg";
import Image from "next/image";
import Nookies, { destroyCookie } from "nookies";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import defaultUser from "../../../public/img/defaultUser.png";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "@/lib/globalFunction";
import Loader from "../Loader";

const Header = () => {
  const router = useRouter();
  const userCookie = Nookies.get("userData")?.userData;
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(false);
  const [settings, setSettings] = useState(false);
  useEffect(() => {
    if (userCookie) {
      setUser(JSON?.parse(userCookie));
    }
  }, [userCookie]);

  return (
    <>
      {loader && <Loader />}
      <div className={styles?.container}>
        <Image className={styles?.logo} src={logo} alt="Logo" />
        <div className={styles?.contentContainer}>
          <ToastContainer />
          <div className={styles?.settingContainer}>
            <Image
              className={`${styles?.settingsIcon} ${
                settings && styles?.rotate45
              }`}
              src={settingsIcon}
              onClick={() => {
                setSettings(!settings);
              }}
              alt="Settings icon"
            />

            <ul className={`${styles?.none} ${settings && styles?.dropdown}`}>
              <li
                className={`${styles?.noneli} ${
                  settings && styles?.dropdownLi
                }`}
                onClick={() => {
                  setLoader(true);
                  notify(true, "logged-out successfully");
                  destroyCookie(null, "auth");
                  destroyCookie(null, "userData");
                  setTimeout(() => {
                    router.push("/");
                  }, 1000);
                }}
              >
                Logout
              </li>
            </ul>
          </div>
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
              src={
                user?.profile_img
                  ? process?.env?.NEXT_PUBLIC_RESOURCE_URL + user?.profile_img
                  : defaultUser
              }
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
    </>
  );
};

export default Header;
