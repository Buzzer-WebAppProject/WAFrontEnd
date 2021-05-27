<template>
  <div class="bg">
    <div class="container">
      <div class="row">
        <div class="col-sm">
        </div>
        <div class="col-sm">
          <div class="text-box">
           <form @submit.prevent="onSubmit">
             <div class="introText">
              <h1 class="main-title">Login</h1>
              <hr>
             </div>
             <div class="form-group">
               <label for="exampleInputEmail1">Email address</label>
               <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
               <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
             </div>
             <div class="form-group">
               <label for="exampleInputPassword1">Password</label>
               <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
             </div>
             <br>
             <br>
             <br>
             <button type="button" class="button">Submit</button>
           </form>
          </div>
        </div>
        <div class="col-sm">
        </div>
      </div>
    </div>
    <Footer />
 </div>  
</template>

<style scoped>
.bg {
  background-color: #2D2D2D;
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
    color: #2D2D2D;
    background-color: #2D2D2D;
    border: none;
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

<script>
import store from '@/store.js'
import Footer from '@/components/Footer.vue';


export default {
  name: 'login',
   components: {
       Footer
   },
  methods: {
    onSubmit () {
      store.authenticated = true
    }
  }
}
</script>
