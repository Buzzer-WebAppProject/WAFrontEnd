import axios from "axios";
import router from "@/router";

// vezan uz backend
let Service = axios.create({
  baseURL: "http://localhost:3000", // treba promijeniti kad budemo deployali
  timeout: 10000, // 1000 je 1 sek
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

let bWork = {
  async createBeehives(data) {
    let serverData = {
      mail: data.mail,
      nick: data.nick,
      lastFeedingDate: data.lastFeedingDate,
      InsideTemperature: data.InsideTemperature,
      OutsideTemperature: data.OutsideTemperature,
    };

    await Service.post("/beehives", serverData);
  },
  async getBeehives(mail) {
    let response = await Service.get(`/beehives?mail=${mail}`);

    return response;
  },
  async updateOne(id) {
    let response = await Service.put(`/beehives/${id}`);

    return response;
  },
  state: {
    getBeehives() {
      let user = Auth.getUser().mail;

      return bWork.getBeehives(user);
    },
  },
};

let Auth = {
  async loginFn(mail, password) {
    let response = await Service.post("/auth", {
      mail: mail,
      password: password, // bilo bi dobro hashirat await bcrypt.hash(userData.password, 8),
    });

    let user = response.data;

    localStorage.setItem("user", JSON.stringify(user));

    return true;
  },
  async signupFn(mail, username, password) {
    let response = await Service.post("/users", {
      mail: mail,
      username: username,
      password: password,
    });

    let user = response.data;

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

export { Service, Auth, bWork }; // exportamo Service za ručne pozive
