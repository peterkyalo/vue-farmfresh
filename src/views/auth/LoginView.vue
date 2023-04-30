<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6 shadow-lg p-5">
        <h3>Login</h3>
        <form class="mt-2" @submit.prevent="login()">
          <div class="mb-3">
            <label for="name" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Email"
              v-model="user.email"
              autofocus
            />
            <span class="text-danger" v-show="formErrors.email">
              {{ formErrorMsgs.email }}
            </span>
          </div>
          <div class="mb-3">
            <label for="duration" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              placeholder="Password"
              v-model="user.password"
              autofocus
            />
            <span class="text-danger" v-show="formErrors.password">
              {{ formErrorMsgs.password }}
            </span>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { useAuthStore } from "../../stores/auth";
export default {
  setup() {
    let authStore = useAuthStore();
    return {
      authStore,
    };
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      formErrors: {
        email: false,
        password: false,
      },
      formErrorMsgs: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      await axios
        .post("http://127.0.0.1:8000/api/login", this.user)
        .then((response) => {
          this.authStore.user = response.data.user;
          this.authStore.token = response.data.token;
          this.user.email = "";
          this.user.password = "";
          this.$router.replace("/crops");
          console.log(this.authStore.user);
          console.log(this.authStore.token);
        })
        .catch((errors) => {
          if (errors.response.data.errors.email) {
            this.formErrors.email = true;
            this.formErrorMsgs.email = errors.response.data.errors.email[0];
          }
          if (errors.response.data.errors.password) {
            this.formErrors.password = true;
            this.formErrorMsgs.password =
              errors.response.data.errors.password[0];
          }
          console.log(errors);
        });
    },
    // login() {
    //   this.authStore.user = this.user;
    //   this.authStore.login();
    //   this.user.email = "";
    //   this.user.password = "";
    //   this.$router.replace("/crops");
    //   console.log(this.user);
    // },
  },
};
</script>
<style></style>
