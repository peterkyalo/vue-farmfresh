<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6 shadow-lg p-5">
        <h3>Register</h3>
        <form class="mt-2" @submit.prevent="register()">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="name"
              v-model="user.name"
            />
            <span class="text-danger" v-show="formErrors.name">
              {{ formErrorMsgs.name }}
            </span>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Email"
              v-model="user.email"
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
            />
            <span class="text-danger" v-show="formErrors.password">
              {{ formErrorMsgs.password }}
            </span>
          </div>
          <div class="mb-3">
            <div class="mb-3">
              <label for="duration" class="form-label">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Password confirmation"
                v-model="user.password_confirmation"
              />
              <span
                class="text-danger"
                v-show="formErrors.password_confirmation"
              >
                {{ formErrorMsgs.password_confirmation }}
              </span>
            </div>
            <button class="btn btn-primary">Register</button>
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
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      formErrors: {
        name: false,
        email: false,
        password: false,
        password_confirmation: false,
      },
      formErrorMsgs: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    async register() {
      await axios
        .post("http://127.0.0.1:8000/api/register", this.user)
        .then((response) => {
          this.authStore.user = response.data.user;
          this.authStore.token = response.data.token;
          this.user.name = "";
          this.user.email = "";
          this.user.password = "";
          this.user.password_confirmation = "";
          this.$router.replace("/login");
          console.log(this.authStore.user);
          console.log(this.authStore.token);
        })

        .catch((errors) => {
          if (errors.response.data.errors.name) {
            this.formErrors.name = true;
            this.formErrorMsgs.name = errors.response.data.errors.name[0];
          }
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

    // register() {
    //   this.authStore.user = this.user;
    //   this.authStore.register();
    //   this.user.name = "";
    //   this.user.email = "";
    //   this.user.password = "";
    //   this.user.password_confirmation = "";
    //   this.$router.replace("/login");
    //   console.log(this.user);
    // },
  },
};
</script>
<style></style>
