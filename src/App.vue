<script>
import AppHeader from "./components/appHeader.vue";
import AppMain from "./components/appMain.vue";
import AppFooter from "./components/appFooter.vue";
import axios from "axios";
export default {
  data() {
    return {
      logo: "src/assets/img/boolean-logo.png",
      brands:[],
    };

  },
  created() {
    axios.get('http://localhost:3000/brands').then(( result )=>{
      this.brands= result.data
    })
  },
  components: {AppHeader, AppMain, AppFooter},
};
</script>

<template>
  <AppHeader />
  <AppMain :brands="brands"></AppMain>
  <AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
