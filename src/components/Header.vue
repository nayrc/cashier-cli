<template>
  <div>
    <div class="header d-flex justify-content-between py-5 align-items-center">
      <h5 class="fw-bold">{{ title }}</h5>
      <div>
        <p>{{ date }}</p>
        <p>
          Made by <a href="https://github.com/nayrc/cashier-cli.git">Cryan</a>
        </p>
      </div>
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
