<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6 shadow-lg p-5">
        <div class="d-flex justify-content-between">
          <h3>Update Crop</h3>
          <router-link to="/crops" class="btn btn-primary">Back</router-link>
        </div>
        <form class="mt-2">
          <div class="mb-3">
            <label for="name" class="form-label">Crop Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Crop name"
            />
          </div>
          <div class="mb-3">
            <label for="duration" class="form-label">Duration</label>
            <input
              type="number"
              class="form-control"
              id="duration"
              name="duration"
              placeholder="Duration"
            />
          </div>
          <div class="mb-3">
            <label for="acrerange" class="form-label">Acrerange</label>
            <input
              type="number"
              class="form-control"
              id="acrerange"
              name="acrerange"
              placeholder="Acrerange"
            />
          </div>
          <!-- <div class="mb-3">
              <input type="file" class="form-control" id="image" name="image" />
            </div> -->
          <div class="mb-3">
            <label for="note" class="form-label">Note</label>
            <textarea
              class="form-control"
              id="note"
              name="note"
              rows="3"
              placeholder="Farmer's note"
            ></textarea>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary">Update Crop</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
<script>
//   import axios from "axios";
export default {
  // data() {
  //   return {
  //     crop: {
  //       name: "",
  //       user_id: 3,
  //       duration: "",
  //       duration: "",
  //       duration: "",
  //     },
  //   };
  // },
  // methods: {
  //   async addCrop() {
  //     await axios
  //       .post("http://127.0.0.1:8000/api/crops", this.crop)
  //       .then((res) => {
  //         alert(res.data.message);
  //         this.crop = {
  //           name: "",
  //           duration: "",
  //           duration: "",
  //           duration: "",
  //         };
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  // },
};
</script>
<style></style>
