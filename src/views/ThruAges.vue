<template>
  <div class="backgrnd">
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-2" />

        <div class="col-6 mid">
          <h1>History of apiculture through the ages</h1>

          <p class="intro">
            The history of bees and flowers is a fascinating one. So, too, is the history of beekeeping.
          </p>

          <br />

          <div class="paragraph">
            <div class="dropdown-divider" />

            <h2 class="ArtTitle">
              Beekeeping Throughout the Ages
            </h2>
            <img
              class="image"
              alt="image"
              src="@/assets/PostImages/beeage1.png"
            />
            <p class="text">
              Beekeeping is an old practice with depictions of it found in art and artifacts from 10,000 years ago. Early beekeepers 
              of that age used pottery vessels to house honey bee colonies. They developed on to making simple hives and smoke in beekeeping. 
              Later, the storage of honey in jars came about
              In the 18th century, Europeans took a lot of interest in beekeeping. They studied the life cycle and biology of honey bees with 
              the intent to understand honey bee colony organization. Improved understanding led to the discovery and exploitation of ‘bee space’. 
              It gave rise to movable frames in beehives, and the artificial beehives commonly used in beekeeping to date.
              Throughout history, beekeeping has been practiced using skeps, pottery vessels, log hives, top bar hives, Warré hives, and the 
              Langstroth beehive. Of these, the Warré, Langstroth and Top Bar hives are the most popular to date. We’ll take a quick look at these 
              later on in this article.
            </p>
            <h2 class="ArtTitle">
              Modern Advancements in Beekeeping
            </h2>
            <p class="text">
              In recent years, a modification of the Langstroth beehive has been made and is marketed as a Flow hive. Flow hives use proprietary 
              technologies that allow for harvesting of honey without removing beehive frames from the beehive. The frames are specially made for the 
              Flow hive. With Flow hives, there is little possibility of harvesting some of the other beehive products available to other beekeepers. 
              Most notably, using a purely Flow hive setup will see you have very little beeswax to harvest at the end of each year of beekeeping. 
              On the other hand, Flow hives give you very clean honey with little or no impurities, and save the beekeeper a lot of time. The costs 
              of buying a honey extractor are also avoided.
              Until recently, smoke has been used by beekeepers to keep honey bees from stinging the beekeeper on hive visits. Before the rise of 
              the beekeeping veil, beekeeping was a rather hands-off practice with beehive visits mainly aimed at finding out if the bees have stored 
              honey, how much it is, and harvesting it. Modern beekeeping requires more frequent monitoring and management of the honey bee colony, and 
              the beehive in which the colony is housed.
            </p>
            <h2 class="ArtTitle">
              Advancements in Beehives
            </h2>
            <img
              class="image"
              alt="image"
              src="@/assets/PostImages/beeage2.jpg"
            />
            <p class="text">
              Beekeeping today is mainly done using beehives. These beehives have come a long way over time and seen some evolution into what they are today.
              Modern beehives also employ concepts that make production easy, and allow for targeting of some beehive products over others. This progress in
              the structure used to house honey bees is good and enables continuity of the honey bee colony even after beehive products are harvested.
              Previous beehives, as recent as the log hive, made continuous survival of the honey bee colony difficult because harvesting honey would ruin a 
              lot of the brood comb which is usually near the entrance of the beehive. Today, the major beehives used in beekeeping are the Langstroth beehive, 
              Top Bar hive, the Warré hive, the British standard hive. Others which may not be as popular but still have decent utilization are the Layens hive 
              and the Dadant hive. The suitability of these beehives varies depending on the preferences of individual beekeepers, and whether the beehive has a 
              vertical or horizontal orientation.
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
  name: "ThruAges",
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
