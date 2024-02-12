<script>
import appCard from './appCard.vue'

export default {
    components:{ appCard },
      props: {brands: Array}
    }
</script>


<template>
     <div class="main">
        <div class="container">
            <div class="grid">
                <appCard v-for = 'card in brands' :card = 'card'></appCard>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;

.main{
    margin-top: 100px;
    color: black;
    text-align: center;
}

.container {
    max-width: 1080px;
    margin: 0 auto;
  }

  .grid{
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 350px)
  }
</style>