<template>
  <div>
    <div class="pt-5">
      <div class="title d-flex justify-content-between align-items-center">
        <h3>Add Product</h3>
      </div>
      <div>
        <div class="form-group my-3">
          <label for="nama">Fruit name</label>
          <input type="text" class="form-control my-2" v-model="queue.nama" />
        </div>
        <div class="form-group my-3">
          <label for="nama">Price</label>
          <input
            type="number"
            class="form-control my-2"
            v-model="queue.price"
          />
        </div>
        <div class="form-group my-3">
          <label for="nama">Fruit Image</label>
          <input
            type="file"
            class="file-upload form-control"
            id="file"
            name="file"
            @change="imgChange"
            multiple
            accept="image/jpg,image/jpeg,/image/png"
          />
        </div>
        <div class="form-group my-3">
          <button type="button" class="main-button" @click="addItems">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";

export default {
  name: "Form",

  computed: {
    ...mapFields("item", ["queue"]),
  },

  created() {
    this.fetchData();
  },

  methods: {
    ...mapActions("item", ["imgChange", "addItems", "fetchData"]),
  },
};
</script>
