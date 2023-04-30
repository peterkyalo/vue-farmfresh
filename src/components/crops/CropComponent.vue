<template>
  <!-- Services Start -->
  <h2 class="d-flex justify-content-center" style="background-color: #ff9933">
    status...
  </h2>
  <div class="container-fluid py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4 col-md-6">
          <div class="service-item bg-light text-center p-5">
            <i class="fa fa-carrot display-1 text-primary mb-3"></i>
            <h4>Name:</h4>
            <p class="mb-0">Duration:</p>
            <p class="mb-0">Acre Range:</p>
            <p class="mb-0">Farmer's Note:</p>
            <div class="mt-3">
              <button class="btn btn-success btn-sm">Show</button>
              <router-link to="/" class="btn btn-info btn-sm ms-2">
                Edit
              </router-link>
              <button class="btn btn-danger btn-sm ms-2">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Services End -->
</template>
<script>
export default {};
</script>
<style></style>
