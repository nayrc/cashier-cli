<template>
  <div class="col-md-3 my-3" v-for="data in fruits" :key="data.id">
    <div class="card">
      <div class="center">
        <label class="label">
          <input
            type="checkbox"
            v-model="cart"
            :value="data"
            class="label__checkbox"
            @click="checked"
          />
          <span class="label__text">
            <span class="label__check">
              <i class="fa fa-check icon"></i>
            </span>
          </span>
        </label>
      </div>
      <div class="top d-flex justify-content-center align-items-center">
        <img :src="data.img" alt="" />
      </div>
      <div class="bottom m-4">
        <p class="fw-bold">{{ data.nama }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "Item",
  props: ["fruits"],

  computed: {
    ...mapFields("item", ["cart"]),
  },

  updated() {
    console.log(this.cart);
  },

  methods: {},
};
</script>
<style></style>
