<script>
import AppHeader from './components/appHeader.vue';
import AppMain from './components/appMain.vue';
import AppFooter from './components/appFooter.vue';
export default{
    data(){
        return {

        };
    },
    components : {AppHeader,AppMain,AppFooter }
};

</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
