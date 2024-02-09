<script>
import AppHeader from './components/appHeader.vue';
import AppMain from './components/appMain.vue';
import AppFooter from './components/appFooter.vue';
import appCard from './components/appCard.vue';
export default{
    data(){
        return {

        };
    },
    components : {AppHeader,AppMain,AppFooter,appCard}
};

</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use './style/general.scss';
</style>
