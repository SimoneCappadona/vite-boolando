<script>
import appCard from "./appCard.vue";
import { store } from "./../../store/index.js";
export default {
  components: { appCard },
  props: { brands: Array },
  methods: {
    print(card) {
      let discount = 0;
      card.badges.array.forEach((badge) => {
        if (badge.type == "discount") {
          discount = badge.value;
        }
      });
    },
    displayModal(image, imageHover, brand, kind, price, badges) {
      store.modal.show = true;
      store.modal.image = image;
      store.modal.imageHover= imageHover;
      store.modal.brand = brand;
      store.modal.kind = kind;
      store.modal.price = price;
      store.modal.badges = badges;
    },
  },
};
</script>

<template>
  <div class="main">
    <div class="container">
      <div class="grid">
        <div class="cardapp" v-for="card in brands" @onClick="print">
          <appCard
            :card="card"
            :badges="card.badges"
            @onClick="displayModal(card.image, card.imageHover, card.brand, card.kind, card.price, card.badges)"
          ></appCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables.scss" as *;

.main {
  margin-top: 100px;
  color: black;
  text-align: center;
}

.container {
  max-width: 1080px;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 350px);
}
</style>
