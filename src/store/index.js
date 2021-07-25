import {
  createStore
} from "vuex";

import {
  getField,
  updateField
} from 'vuex-map-fields';

import Item from './module/item';

export default createStore({
  state: {},
  getters: {
    getField
  },
  mutations: {
    updateField
  },
  actions: {},
  modules: {
    item: Item,
  },
});