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
    ],
    cart: [],
    subsTotal: 0,
    tax: 2500,
    total: 0,
    priceArr: [],
    totalItem: [],
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    SET_PRICE_DATA(state, data) {
      state.priceArr.push(data);
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
        state.subsTotal += pertam;
        state.total = state.subsTotal + state.tax;
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

    updateCart({ state, dispatch }, data, price, updateType) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === data.id) {
          if (updateType === "minus") {
            if (state.cart[i].count > 1) {
              state.cart[i].count--;
              state.subsTotal -= price;
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
              // state.subsTotal += price;
              // state.total = state.subsTotal + state.tax;
              console.log(price);
            }
          }
          break;
        }
        // console.log(data.id);
      }
    },

    deleteAll({ state }) {
      state.cart = [];
      state.priceArr = [];
      state.subsTotal = 0;
      state.total = 0;
      for (let x = 0; x < state.fruit.length; x++) {
        console.log(x);
      }
    },
  },
};
