"use client";
import Loader from "@/components/Loader";
import { InfinitySpin } from "react-loader-spinner";

const loading = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          opacity: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InfinitySpin
          visible={true}
          width="200"
          color="#2b9a72"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    </>
  );
};

export default loading;
