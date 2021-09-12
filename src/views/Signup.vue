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
            <form @submit.prevent="signupFn()">
              <div class="introText">
                <h1 class="main-title">Register</h1>
                <div class="dropdown-divider"></div>
              </div>

              <div class="form-group">
                <label for="fnameField">Full Name</label>
                <input
                  type="text"
                  v-model="fullname"
                  class="form-control"
                  id="fnameField"
                  required
                  placeholder="e.g John Doe"
                />
              </div>
              <div class="form-group">
                <label for="emailField">Email address</label>
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  id="emailField"
                  aria-describedby="emailHelp"
                  required
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <div class="form-group">
                <label for="passwordField">Password</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  id="passwordField"
                  required
                  placeholder="Password"
                />
                <div v-if="password.length < 6" class="text-danger">
                  Your password must be at least 6 characters long.
                </div>
              </div>

              <div class="form-group">
                <label for="confirmPasswordField">Confirm Password</label>
                <input
                  type="password"
                  v-model="rPassword"
                  class="form-control"
                  id="confirmPasswordField"
                  required
                  placeholder="Confirm password"
                />
                <div v-if="password != rPassword" class="text-danger">
                  Passwords don't match!
                </div>
              </div>
              <button type="submit" class="button" @click="signupFn()">
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

.introText {
  padding-top: 10%;
}

.backButton {
  color: white;
  background-color: #2d2d2d;
  float: left;
  width: 12%;
  border-style: none;
  border-radius: 10px;
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
  name: "signup",
  data() {
    return {
      auth: Auth.state,
      fullname: "",
      email: "",
      password: "",
      rPassword: "",
    };
  },
  components: {
    Footer,
  },
  methods: {
    onSubmit() {
      store.authenticated = true;
    },
    goBackFn() {
      this.$router.push({ name: "Landing" });
    },
    async signupFn() {
      // funkcija za signup
      let success = await Auth.signupFn(
        this.email,
        this.fullname,
        this.password
      );

      console.log("Registering", this.email);
      console.log("with:", this.fullname, this.password);

      if (success == true) {
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>
