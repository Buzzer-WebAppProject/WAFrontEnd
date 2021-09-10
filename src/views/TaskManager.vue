<template>
  <div class="backgrnd">
    <Header />
    <div class="container">
      <h1>Task Manager</h1>
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid red;
}
</style>

<script>
import Header from "../components/Header.vue";
import store from "@/store.js";

export default {
  name: "TaskManager",
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
