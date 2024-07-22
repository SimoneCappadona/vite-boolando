<script>
export default {
  props: { card: Object, badges: Array },
  emits: ["onClick"],
};
</script>

<template>
  <div class="card" @click="$emit('onClick', card)">
    <div class="figure">
      <img :src="card.image" alt="" class="frontimg" />
      <img :src="card.imageHover" alt="" class="hoveredimg" />
    </div>
    <div class="card-info">
      <p>{{ card.brand }}</p>
      <h3>{{ card.kind }}</h3>
      <small class="price">{{ card.price }} €</small>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables.scss" as *;
.card-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.figure .hoveredimg {
  display: none;
  object-fit: cover;
  height: 505px;
  cursor: pointer;
}

.figure:hover .frontimg {
  display: none;
}

.figure:hover .hoveredimg {
  opacity: 1;
  display: block;
}

.price {
  color: $price-color;
  font-weight: bold;
}
</style>
