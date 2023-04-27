import BaseURL from "../API/BaseURL";

export const UseGetData = async (url, parmas) => {
  const res = await BaseURL.get(url, parmas);
  return res.data;
};

export const useGetDataToken = async (url, parmas) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await BaseURL.get(url, config);
  return res.data;
};
