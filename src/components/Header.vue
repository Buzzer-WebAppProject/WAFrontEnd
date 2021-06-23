<template>
  <div class="backgrnd">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 logo">
          <img class="resize" :src="require('@/assets/bee.png')" />
        </div>

        <div class="col-3 MyGrid text-bottom">
          <div class="dropdown">
            <button class="button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">My Grid</button>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
             <li><a class="dropdown-item" href="#">My Grid</a></li>
             <li><a class="dropdown-item" href="#">Task Manager</a></li>
            </ul>
          </div>
        </div>

        <div class="col-3 About">
         <div class="dropdown">
            <button class="button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">About</button>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
             <li><a class="dropdown-item" href="#">Pests and Parasite Treatment</a></li>
             <li><a class="dropdown-item" href="#">News regarding Apiculture</a></li>
            </ul>
          </div>
        </div>

        <div class="col-3 Introduction">
          <div class="dropdown">
            <button class="button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Introduction</button>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
             <li><a class="dropdown-item" href="#">Apiculture through the ages</a></li>
             <li><a class="dropdown-item" href="#">Getting started with Beekeeping</a></li>
            </ul>
          </div>
        </div>

        <div class="col-1 empty" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.backgrnd {
  background-color: gold;
}
.logo {
  border: 1px solid #2d2d2d;
  padding-top: 1%;
}

.resize {
  padding-top: 0;
  height: 70px;
  width: 70px;
}

.MyGrid {
  border: 1px solid #2d2d2d;
  text-decoration: none;
  text-align: center;
  margin-top: auto;
}
.MyGridText {
  text-align: center;
  /* padding-bottom: 1%; */
}
.About {
  border: 1px solid #2d2d2d;
  text-decoration: none;
  text-align: center;
  margin-top: auto;
}
.Introduction {
  border: 1px solid #2d2d2d;
  text-decoration: none;
  text-align: center;
  margin-top: auto;
}
.empty {
  border: 1px solid #2d2d2d;
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
  border: 2px solid #2d2d2d;
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

.button { /*the styling for our button*/
	width: 469px;
	padding: 5px; 
	background-color: gold;
	color: black;
	font-size: 16px;
	text-align: center;
	transition: all 0.5s; /*the transition to span lasts 0.5s*/
	cursor: pointer; /*sets our pointer as cursor to activate hover*/
}
.button:hover { /*styiling for a hovered button*/
	background-color: goldenrod; /*we change the colors*/
	color: #2D2D2D; 
}
</style>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    openMyGridDpd() {
      // method used to show more options related to MyGrid
    },
    openAboutDpd() {
      // method used to show more options related to About
    },
    openIntroDpd() {
      // method used to show more options related to Introduction
    },
  },
};
</script>

