<script>
import AppHeader from './components/appHeader.vue';
import AppMain from './components/appMain.vue';
import AppFooter from './components/appFooter.vue';
import card from './components/card.vue'
export default{
    data(){
        return {

        };
    },
    components : {AppHeader,AppMain,AppFooter}
};

</script>

<template>
  <AppHeader></AppHeader>
  <AppMain>
    <card></card>
  </AppMain>
  <AppFooter></AppFooter>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
