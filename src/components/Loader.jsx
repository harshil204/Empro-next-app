import { InfinitySpin } from "react-loader-spinner";
import styles from "../styles/loader.module.css";
const Loader = () => {
  return (
    <div className={styles?.container}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#2b9a72"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
