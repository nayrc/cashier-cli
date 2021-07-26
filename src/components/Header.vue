<template>
  <div>
    <div class="header d-flex justify-content-between py-5 align-items-center">
      <h5 class="fw-bold">{{ title }}</h5>
      <p>{{ date }}</p>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "Header",
  props: ["title"],
  data() {
    return {
      date: moment().format("dddd, MMMM Do YYYY"),
    };
  },
};
</script>
<style></style>
