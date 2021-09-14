<template>
  <div class="backgrnd">
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-1" />
        <div class="col-3">
          <p style="color:white">
            <strong> Today's date is </strong> {{ this.currentDate }}
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

        <div class="col-8 contentBox">
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
                    <div class="col-12">
                      <div class="beehiveSum">
                        <h2>Welcome {{ auth.userEmail }}!</h2>

                        <br />

                        <div class="SumText">
                          <div class="beehives">
                            <p v-if="this.beehiveCount == 0" class="SumText">
                              You don't have any beehives at the moment, how
                              about you insert some.
                            </p>

                            <p v-if="this.beehiveCount == 1" class="SumText">
                              You have {{ this.beehiveCount }} beehive.
                            </p>

                            <p v-if="this.beehiveCount >= 1" class="SumText">
                              You have {{ this.beehiveCount }} beehives.
                            </p>
                          </div>

                          <br />

                          <ul
                            class="list"
                            v-for="item in beehives"
                            :key="item.nick"
                            :item="item"
                          >
                            <li>{{ item.nick }}<br /></li>
                          </ul>

                          <br />

                          <p class="SumText">
                            You can add/remove them with these buttons below
                          </p>

                          <br />

                          <p class="SumText">
                            Or swipe right to view them
                          </p>
                        </div>
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
                                v-model="nick"
                                style="text"
                                class="form-control"
                                required
                                placeholder="e.g queen Amber"
                              />

                              <br />

                              <label for="lastFeedingDate"
                                >Last Feeding Date</label
                              >
                              <input
                                type="date"
                                v-model="lastFeedingDate"
                                style="text"
                                class="form-control"
                              />

                              <br />

                              <label for="OutsideTemperature"
                                >Temperature outside of the beehive</label
                              >
                              <input
                                type="number"
                                v-model="OutsideTemperature"
                                style="text"
                                class="form-control"
                                required
                                placeholder="e.g 34 C"
                              />
                              <p class="text-muted" style="color: gold;">
                                Please insert just a numerical value
                              </p>

                              <br />

                              <label for="InsideTemperature"
                                >Temperature inside of the beehive</label
                              >
                              <input
                                type="number"
                                v-model="InsideTemperature"
                                style="text"
                                class="form-control"
                                required
                                placeholder="e.g 34 C"
                              />
                              <p class="text-muted" style="color: gold;">
                                Please insert just a numerical value
                              </p>

                              <button
                                type="button"
                                @click="createBeehive()"
                                class="button addButton"
                              >
                                Create Beehive
                              </button>

                              <button
                                @click="closePopUp()"
                                type="button"
                                class="button delBtn"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <div class="pdp" id="PopUp2">
                        <div class="form-popup">
                          <div class="popup-container">
                            <div class="sgp-form">
                              <label for="nickname"
                                >Which beehive would you like to edit?</label
                              >
                              
                              <select class="drop" v-model="id">
                                <option
                                  :value="item.id"
                                  v-for="item in beehives"
                                  :key="item._id"
                                  :item="item"
                                >
                                  {{ item.nick }}</option
                                >
                              </select>
                              
                              <input
                                type="text"
                                v-model="newNick"
                                style="text"
                                class="form-control"
                                required
                                placeholder="insert a new nickname"
                              />

                              <br />

                              <label for="lastFeedingDate"
                                >Last Feeding Date</label
                              >
                              <input
                                type="date"
                                v-model="newlastFeedingDate"
                                style="text"
                                class="form-control"
                              />
                              <p class="text-muted">
                                Please select a date
                              </p>

                              <br />

                              <label for="OutsideTemperature"
                                >Temperature outside of the beehive</label
                              >
                              <input
                                type="number"
                                v-model="newOutsideTemperature"
                                style="text"
                                class="form-control"
                                required
                                placeholder="e.g 34 C"
                              />
                              <p class="text-muted">
                                Please insert just a numerical value
                              </p>

                              <br />

                              <label for="InsideTemperature"
                                >Temperature inside of the beehive</label
                              >
                              <input
                                type="number"
                                v-model="newInsideTemperature"
                                style="text"
                                class="form-control"
                                required
                                placeholder="e.g 34 C"
                              />
                              <p class="text-muted">
                                Please insert just a numerical value
                              </p>

                              <button
                                type="button"
                                @click="updateBeehive()"
                                class="button addButton"
                              >
                                Save Changes
                              </button>

                              <button
                                @click="closePopUp2()"
                                type="button"
                                class="button delBtn"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div> -->
                    </div>
                    <button class="button" @click="openPopUp()" type="button">
                      Add new beehive
                    </button>
                    <button class="button" @click="openPopUp2()" type="button">
                      Edit existing beehive
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
                          v-for="item in beehives"
                          :key="item.nick"
                          :item="item"
                          class="contentText"
                          alt="First Slide"
                        >
                          <p>
                            <strong>Beehive nickname:</strong> {{ item.nick }}
                          </p>
                          <br />
                          <!-- <p>
                            <strong>Fed today:</strong> {{ item.fedToday }}
                          </p>
                          <br /> -->
                          <p>
                            <strong>Last fed:</strong>
                            {{ item.lastFeedingDate }}
                          </p>
                          <br />
                          <p>
                            <strong>Temperature inside beehive:</strong>
                            {{ item.InsideTemperature }}
                          </p>
                          <br />
                          <p>
                            <strong>Temperature outside beehive:</strong>
                            {{ item.OutsideTemperature }}
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
.list {
  width: 50%;
  text-align: left;
}
.SumText {
  float: left;
}
.nicknames {
  float: left;
}
.drop {
  margin-right: 5%;
}

.PopUp {
  border: 2px solid white;
  float: right;
}
.pdp {
  margin-top: 50px;
  width: 60%;
  float: right;

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
  width: 30%;
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
.addButton:hover {
  background-color: olivedrab;
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
      bwork: bWork.state,
      nick: "",
      newNick: "",
      lastFeedingDate: "",
      newlastFeedingDate: "",
      OutsideTemperature: "",
      newOutsideTemperature: "",
      InsideTemperature: "",
      newInsideTemperature: "",
      beehiveCount: "",
      datum: "",
      id: "",
      currentDate: "",
      beehives: [],
    };
  },
  mounted() {
    this.getInfo();
    this.setCurrentDate();
  },
  methods: {
    openPopUp() {
      document.getElementById("PopUp").style.display = "block";
    },
    closePopUp() {
      document.getElementById("PopUp").style.display = "none";
    },
    openPopUp2() {
      document.getElementById("PopUp2").style.display = "block";
    },
    closePopUp2() {
      document.getElementById("PopUp2").style.display = "none";
    },
    updateBeehive() {
      console.log(
        "id",
        this.id,
        "mail",
        this.auth.userEmail,
        "nick",
        this.newNick,
        "lastfed",
        this.newlastFeedingDate,
        "out",
        this.newOutsideTemperature,
        "ins",
        this.newInsideTemperature
      );

      // bWork.updateOne(this.id);
      // this.$router.go();
    },
    createBeehive() {
      let beehiveData = {
        mail: this.auth.userEmail,
        nick: this.nick,
        id: this.id,
        lastFeedingDate: this.lastFeedingDate,
        InsideTemperature: this.InsideTemperature,
        OutsideTemperature: this.OutsideTemperature,
      };

      bWork.createBeehives(beehiveData);

      alert("Beehive created successfully");

      this.nick = "";
      this.lastFeedingDate = "";
      this.InsideTemperature = "";
      this.OutsideTemperature = "";
    },
    deleteBeehive() {},
    getInfo() {
      let currentUser = this.auth.userEmail;

      bWork.getBeehives(currentUser).then((response) => {
        let data = response.data;
        this.beehives = data.map((doc) => {
          return {
            id: doc._id,
            nick: doc.nick,
            lastFeedingDate: doc.lastFeedingDate,
            InsideTemperature: doc.InsideTemperature,
            OutsideTemperature: doc.OutsideTemperature,
          };
        });

        let bCount = 0;
        for (let i = 0; i < this.beehives.length; i++) {
          bCount++;
        }
        this.beehiveCount = bCount;
      });
    },
    setCurrentDate() {
      var date = new Date();
      var tDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      this.currentDate = tDate;
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
