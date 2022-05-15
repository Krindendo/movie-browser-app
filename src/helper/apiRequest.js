import axios from "axios";

const api = async (url, method, body, withCredentials = false) => {
  try {
    const { data } = await axios({
      url: process.env.REACT_APP_API + url,
      method,
      data: body,
      withCredentials
    });
    if (process.env.NODE_ENV === "development") {
      console.log("Axios data", data);
    }
    return data;
  } catch (error) {
    console.log("error", error.response);
    return null;
  }
};

export default api;
