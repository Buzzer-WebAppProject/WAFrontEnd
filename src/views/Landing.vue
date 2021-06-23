<template>
  <div class="bg">
    <div class="container">
      <div class="row">
        <div class="col-sm" />

        <div class="col-sm">
          <div class="text-box">
            <div class="introText">
              <h1 class="main-title">Buzzer</h1>
              <hr />
              <p class="desc">
                Welcome to Buzzer, your beekeeping companion application.
              </p>
              <!-- <p class="direct">Click here to continue without login</p> -->
            </div>

            <br />
            <div class="Login">
              <router-link to="/Login">
                <button type="button" class="button" @click="LoginFn()">
                  Login
                </button>
              </router-link>
            </div>
            <br />
            <div class="Register">
              <router-link to="/Signup">
                <button type="button" class="button" @click="RegisterFn()">
                  Register
                </button>
              </router-link>
            </div>
            <br />
            <div class="MainPage">
              <router-link to="/MainPage">
                <button type="button" class="button">Go to main page</button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-sm" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "landing",
  components: {
    Footer,
  },
  methods: {
    LoginFn() {},
    RegisterFn() {},
  },
};
</script>

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

hr {
  height: 1px;
  width: 400px;
  color: #2d2d2d;
  background-color: #2d2d2d;
  border: none;
}

.introText {
  padding-top: 10%;
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
