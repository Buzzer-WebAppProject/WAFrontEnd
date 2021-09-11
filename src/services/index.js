import axios from "axios";
import router from "@/router";

let Service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

//interceptori za backend
// Service.interceptors.request.use((request) => {
//   let token = Auth.getToken();

//   if (!token) {
//     router.go();
//     return;
//   } else {
//     request.headers["Authorization"] = "Bearer" + token;
//   }
//   return request;
// });

// Service.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status == 401 || error.response.status == 403) {
//       Auth.logoutFn();
//       $router.go();
//     }
//   }
// );

let Auth = {
  async loginFn(mail, password) {
    let response = await Service.post("/auth", {
      mail: mail,
      password: password, // bilo bi dobro hashirat
    });

    let user = response.data;

    localStorage.setItem("user", JSON.stringify(user));

    return true;
  },
  logoutFn() {
    localStorage.removeItem("user");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  getToken() {
    let user = Auth.getUser();

    if (user && user.token) {
      return user.token;
    } else return false;
  },
  authenticated() {
    let user = Auth.getUser();
    if (user && user.token) {
      return true;
    }
    return false;
  },
  state: {
    get authenticated() {
      return Auth.authenticated();
    },
    get userEmail() {
      return Auth.getUser().mail;
    },
  },
};

export { Service, Auth }; // exportamo Service za ručne pozive
