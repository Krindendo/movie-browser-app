import axios from "axios";

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
        console.log(error.response.data);
        console.log(error.response.headers);
      }
    } else if (error.request) {
      // The request was made but no response was received
      if (isDevEnvironment) {
        console.log(error.request);
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    throw error;
  }
};

export default request;
