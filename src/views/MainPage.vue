<template>
    <div class="backgrnd">
        <Header />

        <div class="container-fluid">
            <div class="row">
                <div class="col-4 WelcomeBox">
                    <h2 class="welcomeText"><strong>Welcome {{ store.user.email }}!</strong></h2>
                </div>
            </div>

            <div class="row">
                <div class="col-4">
                    <p class="beehiveInfo" v-if="bCount == 1">You have {{ store.user.beehiveCount }} beehive</p>
                    <p class="beehiveInfo" v-if="bCount != 1">You have {{ store.user.beehiveCount }} beehives</p>
                </div>

                <div class="col-8 contentBox">
                    <div class="contentText">
                        <p><strong>Date:</strong> {{ this.currentDate }}</p>
                        <br>
                        <p><strong>Fed today:</strong> {{ this.fedToday }}</p>
                        <br>
                        <p><strong>Last fed:</strong> {{ this.bLastFed }}</p>
                        <br>
                        <p><strong>Temperature inside beehive:</strong> {{ this.bInsTemp }}</p>
                        <br>
                        <p><strong>Temperature outside beehive:</strong> {{ this.currentDate }}</p>
                    </div>

                    <button class="button" type="button">Add new beehive</button>
                    <button class="button delBtn" type="button">Delete beehive</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.WelcomeBox {
    padding-top: 2%;
    padding-left: 0;
    border: 1px solid #2d2d2d;
}

.contentBox {
    border: 1px solid #2d2d2d;
}
.contentText {
    text-align: left;
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
.delBtn {
    margin-left: 1%;
}
.button:hover { /*styiling for a hovered button*/
	background-color: gold; /*we change the colors*/
	color: #2D2D2D; 
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
import Header from '../components/Header.vue';
import store from '@/store.js';

var date = new Date();
var currentDate = date.getDate() + '.'+ (date.getMonth()+1) + '.' + date.getFullYear();

export default {
    name: 'MainPage',
    data() {
        return {
            store,
            userMail: '',
            bCount: '',
            bId: '',
            bLastFed: '',
            bInsTemp: '',
            bOutTemp: '',
            currentDate: '',
            fedToday: ''
        }
    },
    mounted(){
        this.getInfo();
        // this.getInsideTemperature();
        // this.getOutsideTemperature();
    },
    methods: {

        createBeehive() {

        },
        deleteBeehive() {

        },
        setFeedingDate() {

        },
        getLastFeedingDate() {

        },
        getInsideTemperature() {
        },
        getOutsideTemperature() {
        },
        getInfo() {
            var userMail = store.user.email;
            var bCount = store.user.beehiveCount;
            var date = new Date();
            var currentDate = date.getDate() + '.'+ (date.getMonth()+1) + '.' + date.getFullYear();

            for(var i = 0; i < bCount; i++) {
                var userName = store.user.name;
                var userSurname = store.user.surname;
                var bId = store.user.beehive[i].beehiveId;
                var bLastFed = store.user.beehive[i].lastFeedingDate;
                var bInsTemp = store.user.beehive[i].insideTemp;
                var bOutTemp = store.user.beehive[i].outsideTemp;
                var fedToday;

                if(currentDate != bLastFed) {
                    fedToday = false;
                }
                else fedToday = true;
                
                console.log(
                "\ntodays date", currentDate,
                "\nid", bId,
                "\nmail", userMail,
                "\nname",userName,
                "\nsurname", userSurname,
                "\nfed today", fedToday,
                "\nlast fed", bLastFed,
                "\nins temp", bInsTemp,
                "\nout temp", bOutTemp);
            }
            

            return bCount, userMail, userName, userSurname, bId, fedToday, bLastFed, bInsTemp, bOutTemp, currentDate;
        },
    },
    components: {
        Header,
    }
};
</script>