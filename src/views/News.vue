<template>
  <div class="backgrnd">
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-2" />

        <div class="col-6 mid">
          <h1>Bees in the News</h1>

          <p class="intro">
            Welcome to the latest news about honeybees and everything related to them!
          </p>

          <br />

          <div class="paragraph">
            <div class="dropdown-divider" />

            <h2 class="ArtTitle">
              Bees Needs Week
            </h2>

            <img
              class="image"
              alt="image"
              src="@/assets/PostImages/news1.jpg"
            />
            <p class="text">
              What is Bees Needs Week?
              Bees Needs Week is an annual event coordinated by Defra, working alongside charities, businesses, conservation groups and academic institutions to raise awareness of bees and other pollinators, This year due to Covid19 it will again be an online event by sharing stories and videos through social media. So there won’t be a pop-up shop in Carnaby this year given the restrictions.
              Raising awareness of bees and other pollinators
              Bees’ and other pollinators are vital for growing lots of our favourite foods and for plants to flourish in our fields and gardens

 
            </p>

            <br />
          </div>

          <div class="paragraph">
            <div class="dropdown-divider" />

            <h2 class="ArtTitle">
              Reporting illegal medicines 
            </h2>

            <img
              class="image"
              alt="image"
              src="@/assets/PostImages/news2.jpg"
            />
            <p class="text">
              The Veterinary Medicine Directorate’s (VMD) have become aware of a number of unauthorised veterinary medicines/treatments 
              being advertised and sold for a variety of honey bee issues including:- Varroa, Nosema disease (nosemosis) and Tracheal mites (acarapisosis).
              We advise members to always use authorised products and also to submit a complaint if they see unauthorised veterinary medicine or products being advertise
            </p>

            <br />
          </div>

          <div class="paragraph">
            <div class="dropdown-divider" />

            <h2 class="ArtTitle">
              Starvation & Foulbrood Warning
            </h2>

            <img
              class="image"
              alt="image"
              src="@/assets/PostImages/news3.jpg"
            />
            <p class="text">
              The BBKA is issuing a warning to beekeepers to check their bees for starvation and European Foulbrood during this cold snap. 
              Emergency feeding may be needed. It would be advisable to check the food levels by opening the hive and making a very quick 
              observation of their store levels.
              It is also important to check that hives have small entrances as Foulbrood is about in some areas and small colonies or those 
              suffering disease may not be able to defend themselves from infected intruders if they have a large opening to defend. 
              Strong colonies may try to rob weaker ones and thus contract the infections. It is probably not possible to inspect the colonies 
              as it is still too cold, but the best defence is to ensure they all have food. You can make a careful inspection of their brood to 
              check for infections when it is warm enough. 
            </p>

            <br />
          </div>
          <div class="paragraph">
            <div class="dropdown-divider" />

            <h2 class="ArtTitle">
              Petition to stop importing honeybees
            </h2>

            <img
              class="image"
              alt="image"
              src="@/assets/PostImages/news4.jpg"
            />
            <p class="text">
              The problem is that at least one beekeeping business has said that they want to import bees to the UK through Northern Ireland. 
              The bees they are sourcing come from southern Italy where a serious invasive species and parasite of bees, the Small Hive Beetle 
              is established. The inspections on bees are extremely limited and we are fearful that a small, clubbed antenna, beetle will be able 
              to evade their scrutiny and be imported to the mainland. 


            </p>

            <br />
          </div>
        </div>

        <div class="col-4 side" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  background-color: #2d2d2d;
}

h1 {
  color: goldenrod;
}

.dropdown-divider {
  height: 0;
  width: 30%;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 2px solid goldenrod;
}
.ArtTitle {
  font-size: 24px;
  color: goldenrod;
  text-align: left;
}
.image {
  width: 50%;
  float: left;
  margin-right: 5%;
  margin-bottom: 2%;
}
.paragraph {
  width: 70%;
  color: white;
}
.intro {
  font-size: 16px;
  float: left;
  text-align: left;
  color: white;
}
.text {
  text-align: left;
  font-size: 16px;
  color: white;
}
</style>

<script>
import Header from "../components/Header.vue";
import store from "@/store.js";

export default {
  name: "PnP",
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
