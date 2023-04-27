import BaseURL from "../API/BaseURL";

const UseDeleteData = async (url, parmas) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await BaseURL.delete(url, config, parmas);
  return res.data;
};

export default UseDeleteData;
