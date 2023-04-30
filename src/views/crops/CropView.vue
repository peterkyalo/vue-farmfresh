<template>
  <p>crops</p>
  <crop-component></crop-component>
</template>

<script>
import CropComponent from "../../components/crops/CropComponent.vue";
import { useCropStore } from "../../stores/crop";
export default {
  components: { CropComponent },

  setup() {
    console.log("testing");

    let cropStore = useCropStore();
    return {
      cropStore,
    };
  },
};
</script>

<style></style>
