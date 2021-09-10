<template>
  <div class="backgrnd">
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-2" />
        <div class="col-3">
          <p style="color:white">
            <strong> Today's date is </strong> {{ currentDate }}
          </p>
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

        <div class="col-6 contentBox">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <!-- <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
            </ol> -->

            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="row">
                    <div class="col-11">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc sed rhoncus massa. Etiam feugiat enim quis nulla
                        accumsan, ut venenatis tellus facilisis. Nulla iaculis
                        ante a dolor auctor, sed iaculis sem consectetur. Donec
                        sit amet cursus erat, nec facilisis leo. Sed sed
                        eleifend mauris. Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices posuere cubilia curae;
                        Pellentesque fringilla libero ut varius semper. Fusce
                        porta sem massa, eu imperdiet ante molestie vitae. Cras
                        viverra sapien est, sit amet venenatis metus bibendum
                        non. Pellentesque leo eros, molestie sit amet massa nec,
                        dignissim commodo magna. Nulla consequat felis eros, a
                        ornare risus condimentum nec. Fusce ut lacus non augue
                        ullamcorper tristique. Morbi efficitur elit erat, at
                        pharetra mauris aliquam vel. Duis in nisi nec diam
                        rutrum pellentesque. Maecenas diam orci, vestibulum quis
                        velit venenatis, tempor hendrerit massa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div class="contentText" alt="Second Slide">
                  <div class="container">
                    <div class="row">
                      <div class="col-11">
                        <div
                          v-for="bHive in beehives"
                          :key="bHive.bId"
                          :bHive="bHive"
                          class="contentText"
                          alt="First Slide"
                        >
                          <p><strong>Beehive ID:</strong> {{ bHive.bId }}</p>
                          <br />
                          <p>
                            <strong>Fed today:</strong> {{ bHive.fedToday }}
                          </p>
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
                      <button class="button" type="button">
                        Add new beehive
                      </button>
                      <button class="button delBtn" type="button">
                        Delete beehive
                      </button>
                    </div>
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
        </div>

        <div class="col-1" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  margin-top: 2%;
  background-color: #2d2d2d;
}
.WelcomeBox {
  padding-top: 2%;
  padding-left: 0;
  border: 1px solid #2d2d2d;
}

.contentBox {
  border: 1px solid #2d2d2d;

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
  width: 40%;
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
  // if false it shouldn't rotate
  interval: false,
});

export default {
  name: "MainPage",
  data() {
    return {
      store,
      userMail: "",
      userName: "",
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
      // var proxyUser = store.user;
      // this.userMail = proxyUser.email;
      // this.userName = proxyUser.name;
      // this.userSurname = proxyUser.surname;
      // this.bCount = proxyUser.beehiveCount;
      // for (var i = 0; i < this.bCount; i++) {
      //   // this loop will get data for every beehive a person has
      //   var date = new Date();
      //   var tDate =
      //     date.getFullYear() +
      //     "-" +
      //     (date.getMonth() + 1) +
      //     "-" +
      //     date.getDate();
      //   this.currentDate = tDate;
      //   this.bId = proxyUser.beehive[i].beehiveId;
      //   this.bLastFed = proxyUser.beehive[i].lastFeedingDate;
      //   this.bInsTemp = proxyUser.beehive[i].insideTemp;
      //   this.bOutTemp = proxyUser.beehive[i].outsideTemp;
      //   this.fedToday;
      //   if (this.currentDate != this.bLastFed) {
      //     this.fedToday = "No";
      //   } else this.fedToday = "Yes";
      //   this.beehives.push({
      //     // we push beehive data into our beehive array
      //     bId: this.bId,
      //     bLastFed: this.bLastFed,
      //     bInsTemp: this.bInsTemp,
      //     bOutTemp: this.bOutTemp,
      //     fedToday: this.fedToday,
      //   });
      // }
      console.log(this.beehives);
      var date = new Date();
      var tDate =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

      fetch("http://localhost:3000/beehives")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("podaci s bekenda", data);
          // data lokalno: userMail, userName, userSurname, bCount, bId, bLastFed, fedToday, bInsTemp, bOutTemp, datum, beehives []
          // data backend: mail, id, fullname, beehiveCount, beehives.id, .lastFeedingDate, .InsideTemperature, .OutsideTemperature

          // data.map(element => sta napraviti s njim)
          let data2 = data.map((element) => {
            return {
              userMail: element.mail,
              userName: element.fullname,
              userId: element.UID,
              beehives: element.beehives,
            };
          });
          console.log(data2);
          this.beehives = data2;
        });
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
