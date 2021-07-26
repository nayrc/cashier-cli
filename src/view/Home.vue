<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <Header title="Cashier" />

          <div class="item">
            <div class="row">
              <Item
                :fruits="fruit"
                configCheckbox="on"
                v-if="subsTotal === 0"
              />
              <Item :fruits="fruit" configCheckbox="off" v-else />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <Cart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

import Header from "../components/Header.vue";
import Item from "../components/Item.vue";
import Cart from "../components/Cart.vue";

export default {
  name: "App",
  components: {
    Header,
    Item,
    Cart,
  },

  computed: {
    ...mapFields("item", ["fruit", "subsTotal"]),
  },
};
</script>

<style lang="scss"></style>
