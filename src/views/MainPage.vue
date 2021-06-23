<template>
  <div class="backgrnd">
    <Header />

    <div class="container-fluid">
      <div class="row">
        <div class="col-4 WelcomeBox">
          <h2 class="welcomeText">
            <strong>Welcome {{ this.userName }} {{ this.userSurname }}!</strong>
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

      <div class="row">
        <div class="col-4">
          <p><strong> Today's date is </strong> {{ currentDate }}</p>
          <b-calendar
            v-model="datum"
            :date-format-options="{
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }"
            selected-variant="warning"
            today-variant="warning"
            nav-button-variant="warning"
            class="border rounded p-2 bg-dark"
          >
            <div class="d-flex" dir="ltr">
              <b-button
                size="sm"
                variant="outline-danger"
                v-if="datum"
                @click="clearDate"
              >
                Clear
              </b-button>
              <b-button
                size="sm"
                variant="outline-warning"
                class="ml-auto"
                @click="setToday"
              >
                Set Today
              </b-button>
              <b-button
                size="sm"
                variant="outline-success"
                v-if="datum"
                @click="clearDate"
              >
                View selected
              </b-button>
            </div>
          </b-calendar>
        </div>

        <div class="col-8 contentBox">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active"></div>

              <div class="carousel-item">
                <div class="contentText" alt="Second Slide">
                  <div
                    v-for="bHive in beehives"
                    :key="bHive.bId"
                    :bHive="bHive"
                    class="contentText"
                    alt="First Slide"
                  >
                    <p><strong>Beehive ID:</strong> {{ bHive.bId }}</p>
                    <br />
                    <p><strong>Fed today:</strong> {{ bHive.fedToday }}</p>
                    <br />
                    <p><strong>Last fed:</strong> {{ bHive.bLastFed }}</p>
                    <br />
                    <p>
                      <strong>Temperature inside beehive:</strong>
                      {{ bHive.bInsTemp }}
                    </p>
                    <br />
                    <p>
                      <strong>Temperature outside beehive:</strong>
                      {{ bHive.bOutTemp }}
                    </p>
                    <div class="dropdown-divider" />
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
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
    return {
      store,
      userMail: "",
      userName: "",
      userSurname: "",
      bCount: "",
      bId: "",
      bLastFed: "",
      bInsTemp: "",
      bOutTemp: "",
      currentDate: "",
      fedToday: "",
      beehives: [],
      datum: null,
    };
  },
  mounted() {
    this.getInfo();
    // this.getInsideTemperature();
    // this.getOutsideTemperature();
  },
  methods: {
    createBeehive() {},
    deleteBeehive() {},
    setFeedingDate() {},
    getLastFeedingDate() {},
    getInsideTemperature() {},
    getOutsideTemperature() {},
    getInfo() {
      var proxyUser = store.user;
      this.userMail = proxyUser.email;
      this.userName = proxyUser.name;
      this.userSurname = proxyUser.surname;
      this.bCount = proxyUser.beehiveCount;

      for (var i = 0; i < this.bCount; i++) {
        // this loop will get data for every beehive a person has
        var date = new Date();
        var tDate =
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate();

        this.currentDate = tDate;
        this.bId = proxyUser.beehive[i].beehiveId;
        this.bLastFed = proxyUser.beehive[i].lastFeedingDate;
        this.bInsTemp = proxyUser.beehive[i].insideTemp;
        this.bOutTemp = proxyUser.beehive[i].outsideTemp;
        this.fedToday;

        if (this.currentDate != this.bLastFed) {
          this.fedToday = "No";
        } else this.fedToday = "Yes";

        this.beehives.push({
          // we push beehive data into our beehive array
          bId: this.bId,
          bLastFed: this.bLastFed,
          bInsTemp: this.bInsTemp,
          bOutTemp: this.bOutTemp,
          fedToday: this.fedToday,
        });
      }
      console.log(this.beehives);
    },
    setToday() {
      this.datum = this.currentDate;
    },
    clearDate() {
      this.datum = "";
    },
  },
  components: {
    Header,
  },
};
</script>
