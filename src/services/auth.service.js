import axios from "axios";

const API_URL = "jwt";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "/set", {
        email,
        password
      })
      .then(response => {
        //console.log(response.data.accessToken)
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data.accessToken));
          window.location.reload();
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "/reg", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
