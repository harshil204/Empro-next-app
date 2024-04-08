import Nookies from "nookies";

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
