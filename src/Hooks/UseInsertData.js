import BaseURL from "../API/BaseURL";

export const UseInsertData = async (url, parmas) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await BaseURL.post(url, parmas, config);

  return res;
};

export const UseInsertDataImage = async (url, parmas) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await BaseURL.post(url, parmas, config);
  return res;
};
