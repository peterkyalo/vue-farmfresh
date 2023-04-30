<template>
  <!-- Services Start -->
  <h2 class="d-flex justify-content-center" style="background-color: #ff9933">
    {{ status }}
  </h2>
  <div class="container-fluid py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4 col-md-6" v-for="crop in crops" :key="crop.id">
          <div class="service-item bg-light text-center p-5">
            <i class="fa fa-carrot display-1 text-primary mb-3"></i>
            <!-- <img
              class="img-responsive rounded"
              :src="crop.image"
              height="70px"
              width="70px"
              :alt="crop.name"
            /> -->
            <h4>Name: {{ crop.name }}</h4>
            <p class="mb-0">Duration: {{ crop.duration }}</p>
            <p class="mb-0">Acre Range: {{ crop.acrerange }}</p>
            <p class="mb-0">Farmer's Note: {{ crop.note }}</p>
            <div class="mt-3">
              <button class="btn btn-success btn-sm">Sow</button>
              <router-link
                :to="'/crop/' + crop.id"
                class="btn btn-info btn-sm ms-2"
                @click="updateCrop(crop.id)"
              >
                Edit
              </router-link>
              <button
                class="btn btn-danger btn-sm ms-2"
                @click="deleteCrop(crop.id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Services End -->
</template>
<script>
import axios from "axios";
export default {
  props: ["crops", "status"],

  methods: {
    deleteCrop(id) {
      if (confirm("Are you sure you want to delete?")) {
        // console.log(id);
        axios
          .delete(`http://127.0.0.1:8000/api/crop/${id}/delete`)
          .then((res) => {
            alert(res.data.message);
            console.log(res.data.message);
            // refresh crops table
          })
          .catch((error) => {
            if (error.response) {
              if (error.response.status == 404) {
                alert(error.response.data.message);
              }
            }
          });
      }
    },
  },
};
</script>
<style></style>
