<template>
  <div class="bg">
    <div class="container-fluid">
      <div class="row">
        
        <div class="col-2" />

        <div class="col-8 middle">
          
          <div class="text-box-centered">
            <h1 class="main-title">Buzzer</h1>
            <p class="desc">Welcome to Buzzer, your beekeeping companion application.</p>
            <p class="direct">Click here to continue without login</p>

            
            <div class="Login">
              <router-link to="/Login">
              <button type="button" class="button" @click="LoginFn()">Login</button>
              </router-link>
            </div>

            <div class="Register">
              <router-link to="/Signup">
              <button type="button" class="button" @click="RegisterFn()">Register</button>
              </router-link>
            </div>

            <div class="MainPage">
              <router-link to="/MainPage">
              <button type="button" class="button" @click="RegisterFn()">Go to main page</button>
              </router-link>
            </div>

          </div>

        </div>

        <div class="col-2" />

      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'landing',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

.bg {
  background-color: #2D2D2D;
}

/*no padding on the column/row -- found on stack-overflow*/
/* .no-padding { 
    padding-left: 0;
    padding-right: 0;
} */

/*no margin on the column/row -- found on stack-overflow*/
/* .row.no-gutter {
    margin-left: 0;
    margin-right: 0;
} */

.text-box-centered {
  background-color: gold;
  position: absolute;
  border-radius: 4px;
  width: 1000px;
  height: 600px;
  left: 15%;
  right: 15%;
  text-align: center;    
}

.button { /*the styling for our button*/
    
	width: 150px;
	border-radius: 10px; /*rounded*/
	padding: 5px; 

	background-color: #2D2D2D;
	color: white;

	font-size: 16px;
	text-align: center;
	
	transition: all 0.5s; /*the transition to span lasts 0.5s*/
	cursor: pointer; /*sets our pointer as cursor to activate hover*/
}
.button:hover { /*styiling for a hovered button*/
	background-color: goldenrod; /*we change the colors*/
	color: #2D2D2D; 
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
	content: '\00bb'; /*those are the two lines that display*/
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