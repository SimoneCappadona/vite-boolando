<script>
import { store } from "./../../store/index.js";
export default {
  props: { card: Object },
  methods: {
    ClosedCard() {
      store.modal.show = false;
    },
    created() {},
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="jumbo">
    <div class="card">
      <div class="imageModal">
        <img :src="store.modal.image" class="card-img-top" alt="" />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ store.modal.brand }}</h5>
        <p class="card-text">{{ store.modal.kind }}</p>
        <p class="fw-bold text-red">{{ store.modal.price }} €</p>
        <button class="btn btn-warning" @click="ClosedCard()">Close</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: 480px;
}

.imageModal {
  display: flex;
}


.jumbo {
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
