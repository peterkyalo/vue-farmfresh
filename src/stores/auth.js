import axios from "axios";
import { defineStore } from "pinia";
import { axiosAuthApi } from "../utilities/axios";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: {
        email: "",
        password: "",
        name: null,
        created_at: null,
      },
      token: "",
    };
  },
  getters: {},

  actions: {
    // async login() {
    //   await axios
    //     .post("http://127.0.0.1:8000/api/login", this.user)
    //     .then((response) => {
    //       this.user = response.data.user;
    //       this.token = response.data.token;

    //       console.log(this.user);
    //       console.log(this.token);
    //     })
    //     .catch((errors) => {
    //       console.log(errors);
    //     });
    // },
    // async register() {
    //   await axios
    //     .post("http://127.0.0.1:8000/api/register", this.user)
    //     .then((response) => {
    //       this.user = response.data.user;
    //       this.token = response.data.token;
    //       console.log(this.user);
    //       console.log(this.token);
    //     })
    //     .catch((errors) => {
    //       console.log(errors);
    //     });
    // },
    async logout() {
      await axiosAuthApi
        .post("logout")
        .then((response) => {
          console.log(response);
          this.user = {};
          alert(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
      // axios
      //   .post("http://127.0.0.1:8000/api/logout")
      //   .then((response) => {
      //     console.log(response.data.message);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },
});
