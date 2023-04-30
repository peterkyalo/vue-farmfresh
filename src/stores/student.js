import axios from "axios";
import { defineStore } from "pinia";
import { axiosAuthApi } from "../utilities/axios";

export const useStudentStore = defineStore("student", {
  state: () => {
    return {
      student: {
        name: "",
        age: "",
      },
    };
  },
  getters: {},

  actions: {
    logout() {
      axiosAuthApi
        .post("logout")
        .then((response) => {
          console.log(response);
          this.user = {};
          alert(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
