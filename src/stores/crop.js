import axios from "axios";
import { defineStore } from "pinia";

export const useCropStore = defineStore("crops", {
  state: () => {
    return {
      crops: [],
    };
  },
  getters: {},

  actions: {
    async fetchCrops() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/crops");
      this.crops = data;
      console.log(this.crops);
      return this.crops;
    },
    created() {
      console.log(data);
    },
  },
});
