import api from "helper/apiRequest";
import Cookies from "universal-cookie";
const baseUrl = "/api/v1/auth";

const register = async (body) => {
  // name, email, password
  const data = await api(baseUrl + "/register", "POST", body, true);
  if (data?.user) {
    saveUser(data.user);
    return data.user;
  }
  return null;
};
const login = async (body) => {
  // email, password
  const data = await api(baseUrl + "/login", "POST", body, true);
  if (data?.user) {
    saveUser(data.user);
    return data.user;
  }
  return null;
};
const logout = async () => {
  const data = await api(baseUrl + "/logout", "GET", true);
  localStorage.clear();
  new Cookies().remove("local_token");
  if (data?.msg) {
    return data.msg;
  }
  return null;
};

const authService = {
  register,
  login,
  logout
};

export default authService;

const saveUser = (_user) => {
  if (_user) {
    localStorage.setItem("userName", _user.name);
    localStorage.setItem("userId", _user.userId);
    new Cookies().set("local_token", _user.userId, { expires: new Date(Date.now() + 24 * 60 * 60 * 1000) });
  }
};
