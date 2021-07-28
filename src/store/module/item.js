import { getField, updateField } from "vuex-map-fields";

export default {
  namespaced: true,
  state: {
    fruit: [
      {
        id: 1,
        nama: "Grape",
        price: 75000,
        img: require("@/assets/img/grape.jpg"),
        count: 1,
      },
      {
        id: 2,
        nama: "Cherry",
        price: 40000,
        img: require("@/assets/img/cherry.jpg"),
        count: 1,
      },
      {
        id: 3,
        nama: "Avocado",
        price: 42500,
        img: require("@/assets/img/avocado.jpg"),
        count: 1,
      },
      {
        id: 4,
        nama: "Apple",
        price: 10000,
        img: require("@/assets/img/apple.jpg"),
        count: 1,
      },
      {
        id: 5,
        nama: "Kiwi",
        price: 55000,
        img: require("@/assets/img/kiwi.jpg"),
        count: 1,
      },
      {
        id: 6,
        nama: "Watermelon",
        price: 65000,
        img: require("@/assets/img/semangka.jpg"),
        count: 1,
      },
    ],
    cart: [],
    subsTotal: 0,
    tax: 2500,
    total: 0,
    priceArr: [],
    totalItem: [],
    // Add Product
    queue: {
      id: null,
      nama: null,
      price: null,
      img: null,
      count: 1,
    },
    // Cart Quantity
    priceCart: null,
    dataCart: null,
    statusUpdate: null,
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    SET_PRICE_DATA(state, data) {
      state.priceArr.push(data);
    },
    SET_SUBTOTAL_AND_TOTAL(state, data) {
      state.subsTotal += data;
      state.total = state.subsTotal + state.tax;
    },
    CLEAR_QUEUE(state) {
      state.queue = {
        id: null,
        nama: null,
        price: null,
        img: null,
        count: 1,
      };
    },
    CLEAR_CART(state) {
      state.cart = [];
      state.priceArr = [];
      state.subsTotal = 0;
      state.total = 0;
    },
  },

  actions: {
    totalCount({ state, commit }) {
      state.cart.forEach((e) => {
        commit("SET_PRICE_DATA", e["price"]);
      });

      if (state.priceArr.length > 1) {
        const pertam = state.priceArr
          .map((a) => {
            return a;
          })
          .reduce((acc, curr) => {
            return acc + curr;
          });
        commit("SET_SUBTOTAL_AND_TOTAL", pertam);
      } else if (state.priceArr.length == 1) {
        state.priceArr.forEach((e) => {
          state.subsTotal = e;
        });
        state.total = state.subsTotal + state.tax;
      } else if (state.priceArr.length === 0) {
        state.subsTotal = 0;
        state.total = 0;
      }
    },

    updateCart({ state, dispatch }) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === state.dataCart.id) {
          if (state.statusUpdate === "minus") {
            if (state.cart[i].count > 1) {
              state.cart[i].count--;
              state.subsTotal -= state.priceCart;
              state.total = state.subsTotal + state.tax;
            } else {
              alert("Minimal satu");
              state.count = 1;
            }
          } else {
            if (state.subsTotal === 0) {
              dispatch("totalCount");
            } else {
              state.cart[i].count++;
              state.subsTotal += state.priceCart;
              state.total = state.subsTotal + state.tax;
            }
          }
          break;
        }
      }
      // console.log(state.priceCart, state.statusUpdate, state.dataCart);
    },

    deleteAll({ commit }) {
      commit("CLEAR_CART");
    },
    imgChange({ state }, e) {
      state.queue.img = e.target.files[0].name;
    },

    addItems({ state, dispatch, commit }) {
      if (state.queue.nama !== null && state.queue.price !== null) {
        state.fruit.push(state.queue);
        commit("CLEAR_QUEUE");
        dispatch("fetchData");
        console.log(state.fruit);
      } else {
        alert("Masukkan item");
      }
    },

    fetchData({ state }) {
      state.queue.id = state.fruit[state.fruit.length - 1].id + 1;
    },
  },
};
