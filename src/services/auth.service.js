import axios from "axios";
import jwt_decode from "jwt-decode";

const API_URL = "jwt";
const Port = 5000;
const baseurl = 'http://' + window.location.hostname + ':' + Port + '/' + API_URL;

class AuthService {
  login(email, password) {
    return axios
      .post(baseurl + "/set", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) 
        {
          var decoded = jwt_decode(response.data.accessToken);
          localStorage.setItem("token", JSON.stringify(response.data.accessToken));
          localStorage.setItem("user", JSON.stringify(decoded));
          window.location.reload();
        }
        return response.data;
      })
  }

  logout() {
    localStorage.clear();
  }

  register(username, email, password) {
    return axios.post(baseurl + "/reg", {
      username,
      email,
      password
    });
  }

  getValidToken() {
    const user_data = JSON.parse(localStorage.getItem('user'));
    const user_Time = new Date();
    const user_exp_Time = new Date(user_data.exp * 1000);
    if (user_Time > user_exp_Time || isNaN(user_exp_Time))
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getRoleUser() {
    return JSON.parse(localStorage.getItem('role'));
  }
}

export default new AuthService();
