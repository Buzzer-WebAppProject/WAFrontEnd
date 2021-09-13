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
                      <div class="beehiveSum">
                        Welcome user!
                        <br />
                        you have xxx beehives
                        <br />
                        you can add/remove them with these buttons below
                        <br />
                        or swipe right to view them
                      </div>
                      <div class="pdp" id="PopUp">
                        <div class="form-popup">
                          <div class="popup-container">
                            <div class="sgp-form">
                              <label for="nickname"
                                >Give the beehive a nickname to remember it
                                easier</label
                              >
                              <input
                                type="text"
                                style="text"
                                class="form-control"
                                required
                                placeholder="queen Amber"
                              />

                              <br />

                              <label for="lastFeedingDate"
                                >Last Feeding Date</label
                              >
                              <input
                                type="date"
                                style="text"
                                class="form-control"
                              />

                              <br />

                              <label for="OutsideTemperature"
                                >Temperature outside of the beehive</label
                              >
                              <input
                                type="text"
                                style="text"
                                class="form-control"
                                required
                                placeholder="e.g 34 C"
                              />

                              <br />

                              <label for="InsideTemperature"
                                >Temperature inside of the beehive</label
                              >
                              <input
                                type="text"
                                style="text"
                                class="form-control"
                                required
                                placeholder="e.g 34 C"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button class="button" @click="openPopUp()" type="button">
                      Add new beehive
                    </button>
                    <button class="button delBtn" type="button">
                      Delete beehive
                    </button>
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
.beehiveSum {
  width: 40%;
  border: 2px solid white;
  float: left;
}
.PopUp {
  border: 2px solid white;
  float: right;
}
.pdp {
  margin-top: 50px;
  float: right;

  border: 2px solid white;
  border-radius: 10px;
  /* The popup form - hidden by default */
  display: none;
  bottom: 0;
  right: 15px;
  border: 3px solid #2d2d2d;
  z-index: 9;
}
.sgp-form {
  width: 70%;
}

.contentBox {
  border: 1px solid #2d2d2d;
  color: white;
}
.contentText {
  text-align: left;
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
  margin-top: 2%;

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
import { Auth, bWork } from "@/services";

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
      auth: Auth.state,
      datum: null,
      beehives: [],
    };
  },
  mounted() {
    this.getInfo();
    // this.getInsideTemperature();
    // this.getOutsideTemperature();
  },
  methods: {
    openPopUp() {
      document.getElementById("PopUp").style.display = "block";
    },
    createBeehive() {},
    deleteBeehive() {},
    setFeedingDate() {},
    getLastFeedingDate() {},
    getInsideTemperature() {},
    getOutsideTemperature() {},
    getInfo() {
      var date = new Date();
      var tDate =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

      let currentUser = this.auth.userEmail;
      console.log("current user", currentUser);

      bWork.getBeehives(currentUser).then((response) => {
        let data = response.data;
        console.log("podaci s bekenda", data);
        // data lokalno: userMail, userName, userSurname, bCount, bId, bLastFed, fedToday, bInsTemp, bOutTemp, datum, beehives []
        // data backend: mail, id, fullname, beehiveCount, beehives.id, .lastFeedingDate, .InsideTemperature, .OutsideTemperature

        // data.map(element => sta napraviti s njim)

        var data2 = data.map((element) => {
          return {
            beehives: element.beehives,
          };
        });

        for (let i = 0; i < data.length; i++) {
          console.log("i", i);
        }
        console.log("data2", data2);
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
