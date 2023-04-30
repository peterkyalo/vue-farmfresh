<template>
  <!-- Topbar Start -->
  <div class="container-fluid px-5 d-none d-lg-block">
    <div class="row gx-5 py-3 align-items-center">
      <div class="col-lg-3">
        <div class="d-flex align-items-center justify-content-start">
          <i class="bi bi-phone-vibrate fs-1 text-primary me-2"></i>
          <h2 class="mb-0">+012 345 6789</h2>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="d-flex align-items-center justify-content-center">
          <a href="index.html" class="navbar-brand ms-lg-5">
            <h1 class="m-0 display-4 text-primary">
              <span class="text-secondary">Farm</span>Fresh
            </h1>
          </a>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="d-flex align-items-center justify-content-end">
          <div v-if="userStore.token">Welcome {{ userStore.user.name }}</div>
          <!-- <a class="btn btn-primary btn-square rounded-circle me-2" href="#"
            ><i class="fab fa-twitter"></i
          ></a>
          <a class="btn btn-primary btn-square rounded-circle me-2" href="#"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a class="btn btn-primary btn-square rounded-circle me-2" href="#"
            ><i class="fab fa-linkedin-in"></i
          ></a>
          <a class="btn btn-primary btn-square rounded-circle" href="#"
            ><i class="fab fa-instagram"></i
          ></a> -->
        </div>
      </div>
    </div>
  </div>
  <!-- Topbar End -->

  <!-- Navbar Start -->
  <nav
    class="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5"
  >
    <a href="index.html" class="navbar-brand d-flex d-lg-none">
      <h1 class="m-0 display-4 text-secondary">
        <span class="text-white">Farm</span>Fresh
      </h1>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav mx-auto py-0">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/crops" class="nav-item nav-link">Crops</router-link>
        <router-link to="/crop" class="nav-item nav-link">Crop</router-link>
        <router-link to="/add-crop" class="nav-item nav-link"
          >Add Crop</router-link
        >
        <router-link to="/student/create" class="nav-item nav-link"
          >Add Student</router-link
        >
        <router-link to="about" class="nav-item nav-link">About</router-link>
        <a href="service.html" class="nav-item nav-link">Service</a>
        <a href="product.html" class="nav-item nav-link">Product</a>
        <a href="contact.html" class="nav-item nav-link">Contact</a>
        <router-link
          to="/login"
          v-if="!userStore.token"
          class="nav-item nav-link"
          >Login</router-link
        >
        <router-link
          to="/register"
          v-if="!userStore.token"
          class="nav-item nav-link"
          >Register</router-link
        >
        <button
          @click="logOut()"
          v-if="userStore.token"
          class="nav-item nav-link"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
  <router-view></router-view>
  <!-- Navbar End -->
</template>
<script>
import { useAuthStore } from "../../stores/auth";
export default {
  setup() {
    let userStore = useAuthStore();
    return {
      userStore,
    };
  },
  methods: {
    logOut() {
      this.userStore.logout();
      console.log(this.userStore.logout());
    },
  },
};
</script>
<style></style>
