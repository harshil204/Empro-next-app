import Nookies from "nookies";
import { toast } from "react-toastify";

export const createFormData = (values) => {
  const formData = new FormData();
  Object.keys(values).forEach((key) => {
    formData.append(key, values[key]);
  });
  return formData;
};

export const getConfig = () => {
  const token = Nookies.get()?.auth;
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const statusColor = (status) => {
  switch (status) {
    case "pending":
      return "#c7b604";
      break;
    case "rejected":
      return "#F32013";
      break;
    case "aprooved":
      return "#2b9a72";
      break;
  }
};

export const notify = (status = false, message, time = 1500) => {
  if (status) {
    toast.success(message, {
      position: "top-center",
      autoClose: time,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    toast.error(message, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
