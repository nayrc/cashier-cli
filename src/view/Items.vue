<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <Header title="Items" />

          <div class="item">
            <div class="row">
              <Item :fruits="fruit" configCheckbox="off" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

import Header from "../components/Header";
import Item from "../components/Item";
import Form from "../components/Form";

export default {
  name: "Items",
  components: { Header, Item, Form },
  computed: {
    ...mapFields("item", ["fruit"]),
  },
};
</script>

<style lang="scss"></style>
