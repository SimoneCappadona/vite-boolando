<script>
import AppHeader from "./components/appHeader.vue";

import AppMain from "./components/appMain.vue";

import AppFooter from "./components/appFooter.vue";

import appModal from "./components/appModal.vue";

import {store} from "./../store/index.js";

import axios from "axios";

export default {
  data() {
    return {
      logo: "src/assets/img/boolean-logo.png",
      brands:[],
      store
    };

  },
  created() {
    axios.get('http://localhost:3000/brands').then(( result )=>{
      this.brands= result.data
    })
  },
  components: {AppHeader, AppMain, AppFooter,appModal},
};
</script>

<template>
  <AppHeader />
  <AppMain :brands="brands"></AppMain>
  <appModal v-if="store.modal.show"/>
  <AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
