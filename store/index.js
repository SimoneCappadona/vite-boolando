import { reactive } from "vue";
export const store = reactive({
  modal: { show: false, image:"", imageHover:"", brand: "", kind: "", price: "", badges: "" },
});
