<template>
  <div class="backgrnd">
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-2" />

        <div class="col-6 mid">
          <h1>News</h1>

          <p class="intro">
            Like every other animal or insect, honeybees are affected by pests
            and parasites. Perhaps the most common enemy of the honeybee is the
            varroa mite.
          </p>
          <p class="intro">
            Manufacturers have developed a variety of products to treat and get
            rid of these pests and parasites. Read our reviews to find the best
            product for your bees.
          </p>

          <br />

          <div class="paragraph">
            <div class="dropdown-divider" />

            <h2 class="ArtTitle">
              Beekeeping Barrier Management System for Pest and Disease Control
            </h2>

            <img
              class="image"
              alt="image"
              src="@/assets/PostImages/PnP-first.jpg"
            />
            <p class="text">
              A structured approach in barrier management gives you the best
              results in pest and disease control. It allows you unique insights
              into the barriers you establish and their effectiveness. You are
              also able to follow up and monitor performance of the barriers
              with ease. The barrier management system for pest and disease
              control in your beekeeping operation makes the operation safe,
              with your better understanding of risks.
            </p>

            <br />
          </div>

          <div class="paragraph">
            <div class="dropdown-divider" />

            <h2 class="ArtTitle">
              Beekeeping Barrier Management System for Pest and Disease Control
            </h2>

            <img
              class="image"
              alt="image"
              src="@/assets/PostImages/PnP-first.jpg"
            />
            <p class="text">
              A structured approach in barrier management gives you the best
              results in pest and disease control. It allows you unique insights
              into the barriers you establish and their effectiveness. You are
              also able to follow up and monitor performance of the barriers
              with ease. The barrier management system for pest and disease
              control in your beekeeping operation makes the operation safe,
              with your better understanding of risks.
            </p>

            <br />
          </div>

          <div class="paragraph">
            <div class="dropdown-divider" />

            <h2 class="ArtTitle">
              Beekeeping Barrier Management System for Pest and Disease Control
            </h2>

            <img
              class="image"
              alt="image"
              src="@/assets/PostImages/PnP-first.jpg"
            />
            <p class="text">
              A structured approach in barrier management gives you the best
              results in pest and disease control. It allows you unique insights
              into the barriers you establish and their effectiveness. You are
              also able to follow up and monitor performance of the barriers
              with ease. The barrier management system for pest and disease
              control in your beekeeping operation makes the operation safe,
              with your better understanding of risks.
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
  color: white;
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
  name: "News",
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
