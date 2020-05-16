import Vue from 'vue';
import { filters } from './filters'
filters.forEach(filter => {
  for (let key in filter) {
    Vue.filter(key, filter[key])
  }
})