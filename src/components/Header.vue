<template>
  <div class="backgrnd">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 logo">
          <router-link to="/MainPage">
            <img class="resize" :src="require('@/assets/bee.png')" />
          </router-link>
        </div>

        <div class="col-3 MyGrid text-bottom">
          <div class="dropdown">
            <button
              class="button"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              My Grid
            </button>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <router-link to="/MyGrid" class="dropdown-item"
                  >My Grid</router-link
                >
              </li>
              <li>
                <router-link to="TaskManager" class="dropdown-item"
                  >Task Manager</router-link
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="col-3 About">
          <div class="dropdown">
            <button
              class="button"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About
            </button>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <router-link to="/PnP" class="dropdown-item"
                  >Pests and Parasite Treatment</router-link
                >
              </li>
              <li>
                <router-link to="/News" class="dropdown-item"
                  >News regarding Apiculture</router-link
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="col-3 Introduction">
          <div class="dropdown">
            <button
              class="button"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Introduction
            </button>
            <ul
              class="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <router-link to="/ThruAges" class="dropdown-item"
                  >Apiculture through the ages</router-link
                >
              </li>
              <li>
                <router-link to="/GettingStarted" class="dropdown-item"
                  >Getting started with Beekeeping</router-link
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="col-1 empty">
          <button
            v-if="auth.authenticated"
            type="button"
            class="logoutBtn"
            @click="logoutFn()"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backgrnd {
  background-color: goldenrod;
}

.logo {
  padding-top: 1%;
}

.resize {
  padding-top: 0;
  height: 70px;
  width: 70px;
}

.MyGrid {
  text-decoration: none;
  text-align: center;
  margin-top: auto;
}
.MyGridText {
  text-align: center;
  /* padding-bottom: 1%; */
}
.About {
  text-decoration: none;
  text-align: center;
  margin-top: auto;
}
.Introduction {
  text-decoration: none;
  text-align: center;
  margin-top: auto;
}

.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  border: 1px solid #2d2d2d;
  right: 0;
  /* margin-top: 20px; */
  display: none;
  position: absolute;
  height: 150px;
  width: 300px;
  /* border: 2px solid #2d2d2d; */
  border-radius: 15px;
  background-color: white;
  /* box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); */
  z-index: 2;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.show {
  display: block;
}

.logoutBtn {
  color: white;
  background-color: #2d2d2d;
  margin-top: 31%;
  border-radius: 10px;
  border-style: ridge;
  height: 50%;
  width: 80%;
  float: inline-end;
  text-align: center;
}

.button {
  /*the styling for our button*/
  width: 469px;
  padding: 5px;
  background-color: gold;
  color: black;
  border-radius: 10px;
  border-style: ridge;
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
</style>

<script>
import { Auth } from "@/services";

export default {
  name: "Header",
  data() {
    return {
      auth: Auth.state,
    };
  },
  methods: {
    logoutFn() {
      Auth.logoutFn();
      this.$router.go();
    },
  },
};
</script>
