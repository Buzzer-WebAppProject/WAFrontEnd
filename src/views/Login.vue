<template>
  <div class="bg">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <div class="text-box">
            <div>
              <button type="button" @click="goBackFn()" class="backButton">
                Go back
              </button>
            </div>

            <form @submit.prevent="loginFn()">
              <div class="introText">
                <h1 class="main-title">Login</h1>
                <div class="dropdown-divider"></div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  v-model="mail"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <br />
              <br />
              <br />
              <button type="submit" class="button">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.bg {
  background-color: #2d2d2d;
  min-height: 100%;
  width: auto;
  padding-bottom: 0px;
}

.text-box {
  background-color: gold;
  /* position: absolute; */
  margin-top: 10%;
  border-radius: 8px;
  width: 800px;
  height: 600px;
  left: 15%;
  right: 15%;
  text-align: center;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 2px solid #2d2d2d;
}

form {
  width: 400px;
  height: 450px;
  margin: auto;
  position: relative;
}

.goBack {
  float: left;
}
.introText {
  padding-top: 10%;
}

.backButton {
  color: white;
  background-color: #2d2d2d;
  float: left;
  width: 12%;
  border-radius: 10px;
  border-style: none;
  margin-top: 1.75%;
  margin-left: 2%;
}

.button {
  /*the styling for our button*/

  width: 150px;
  border-radius: 10px; /*rounded*/
  padding: 5px;
  background-color: #2d2d2d;
  color: white;
  font-size: 16px;
  text-align: center;

  transition: all 0.5s; /*the transition to span lasts 0.5s*/
  cursor: pointer; /*sets our pointer as cursor to activate hover*/
}
.button:hover {
  /*styiling for a hovered button*/
  background-color: goldenrod; /*we change the colors*/
  color: #2d2d2d;
}
.button span {
  cursor: pointer;
  display: inline-block; /*so it displays inline to our text*/
  position: relative;
  transition: 0.5s;
}
.button:hover span {
  padding-right: 25px; /*how far from the right border of our button*/
}
.button span:after {
  content: "\00bb"; /*those are the two lines that display*/
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>

<script>
import store from "@/store.js";
import Footer from "@/components/Footer.vue";
import { Auth } from "@/services";

export default {
  name: "login",
  data() {
    return {
      auth: Auth.state,
      mail: "",
      password: "",
    };
  },
  components: {
    Footer,
  },
  methods: {
    goBackFn() {
      this.$router.push({ name: "Landing" });
    },
    async loginFn() {
      // funkcija za login
      let success = await Auth.loginFn(this.mail, this.password);

      console.log("loggin in", this.auth.userEmail);
      console.log("with", localStorage.getItem("user"));

      if (success == true) {
        this.$router.push({ name: "MyGrid" });
      }
    },
  },
};
</script>
