import axios from "axios";
import toast from "react-hot-toast";

const isDevEnvironment = process.env.NODE_ENV === "development";

const request = async (url, method, body, withCredentials = false) => {
  try {
    const { data } = await axios({
      url: process.env.REACT_APP_API + url,
      method,
      data: body,
      withCredentials
    });
    if (isDevEnvironment) {
      console.log("Axios data", data);
    }
    return data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      console.log(`Request faild with status ${error.response.status}`);
      if (isDevEnvironment) {
        console.log("error: data", error.response.data);
        console.log("error: headers", error.response.headers);
      }
      if (error.response.data) {
        toast.error(`Something went wrong: ${error.response.data.msg}`);
      } else {
        toast.error(`Something went wrong: ${error.message}`);
      }
    } else if (error.request) {
      // The request was made but no response was received
      if (isDevEnvironment) {
        console.log(error.request);
      }
      toast.error(`Something went wrong: ${error.message}`);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
      toast.error(`Something went wrong: ${error.message}`);
    }
    throw error;
  }
};

export default request;
