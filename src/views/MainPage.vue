<template>
  <div class="backgrnd">
    <Header />

    <div class="container">
      <div class="row">
        <div class="col-4 WelcomeBox">
          <h2 class="welcomeText">
            <strong>Welcome {{ this.userName }}!</strong>
          </h2>
        </div>
        <div class="col-4 userInfo">
          <p class="d-inline beehiveInfo" v-if="this.bCount == 1">
            You have {{ this.bCount }} beehive
          </p>
          <p class="d-inline beehiveInfo" v-if="bCount != 1">
            You have {{ this.bCount }} beehives
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.WelcomeBox {
  padding-top: 2%;
  margin-left: 1.5%;
  padding-left: 0;
  border: 1px solid #2d2d2d;
}

.contentBox {
  border: 1px solid #2d2d2d;
  background-color: #2d2d2d;
  color: white;
}
.contentText {
  text-align: left;
}
.userInfo {
  border: 1px solid red;
}
.beehiveInfo {
  float: left;
  bottom: 0;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 2px solid gold;
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
.delBtn {
  margin-left: 1%;
}
.button:hover {
  /*styiling for a hovered button*/
  background-color: gold; /*we change the colors*/
  color: #2d2d2d;
}
.delBtn:hover {
  background-color: red;
  color: white;
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
import Header from "../components/Header.vue";
import store from "@/store.js";

$(".carousel").carousel({
  // this should be the interval after which the carousel rotates by itself
  // if false it shouldn't rotate but it doesnt work
  interval: false,
});

export default {
  name: "MainPage",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    Header,
  },
};
</script>
