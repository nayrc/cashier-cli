<template>
  <div>
    <div class="cart p-5">
      <div class="title d-flex justify-content-between align-items-center">
        <h3>Cart</h3>
        <div class="p-3 deleteAll" @click="deleteAll">
          <i class="ri-close-line"></i>
        </div>
      </div>
      <div
        class="item-list d-flex my-4 py-2 px-3 justify-content-between"
        v-for="data in cart"
        :key="data.id"
      >
        <div class="left d-flex">
          <div class="img-left">
            <img :src="data.img" alt="" />
          </div>
          <div class="name">
            <p class="fw-bold">{{ data.nama }}</p>
            <span>Rp {{ data.price }}</span>
          </div>
        </div>
        <div class="quantity d-flex align-items-center justify-content-end">
          <div
            class="decrease p-3"
            @click="updateCart(data, data.price, 'minus')"
          >
            <i class="ri-subtract-line"></i>
          </div>
          <div class="number-quantity">
            <p>{{ data.count }}Kg</p>
          </div>
          <div
            class="increase p-3"
            @click="updateCart(data, data.price, 'plus')"
          >
            <i class="ri-add-line"></i>
          </div>
        </div>
      </div>
      <div class="total mt-5">
        <div class="substotal d-flex justify-content-between">
          <p class="fw-bold">Subs Total</p>
          <p class="fw-bold">Rp {{ subsTotal }}</p>
        </div>
        <div class="tax d-flex justify-content-between">
          <p class="fw-bold">Tax</p>
          <p class="fw-bold">Rp {{ tax }}</p>
        </div>
      </div>
      <div class="fix_total">
        <div class="price_total d-flex justify-content-between">
          <p class="fw-bold">Total</p>
          <p class="fw-bold">Rp {{ total }}</p>
        </div>
        <div class="action">
          <div class="d-flex">
            <button class="main-button mb-3 mr-5" @click="totalCount">
              Total Count
            </button>
          </div>
          <button class="main-button">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";

export default {
  name: "Cart",
  computed: {
    ...mapFields("item", ["cart", "subsTotal", "tax", "total", "priceArr"]),
  },

  methods: {
    ...mapActions("item", ["totalCount", "updateCart", "deleteAll"]),
  },
};
</script>
<style></style>
