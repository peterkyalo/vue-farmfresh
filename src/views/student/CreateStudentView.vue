<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6 shadow-lg p-5">
        <h3>Add Student</h3>
        <form class="mt-2" @submit.prevent="registerStudent()">
          <div class="mb-3">
            <label for="name" class="form-label">Student Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Student name"
              v-model="student.name"
            />
            <span class="text-danger" v-show="formErrors.name">
              {{ formErrorMsgs.name }}
            </span>
          </div>
          <div class="mb-3">
            <label for="duration" class="form-label">Age</label>
            <input
              type="number"
              class="form-control"
              id="duration"
              name="duration"
              placeholder="Student age"
              v-model="student.age"
            />
            <span class="text-danger" v-show="formErrors.age">
              {{ formErrorMsgs.age }}
            </span>
          </div>

          <div class="mb-3">
            <button class="btn btn-primary">Add Student</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import { useStudentStore } from "../../stores/student";
import { axiosAuthApi } from "../../utilities/axios";
export default {
  setup() {
    let studentStore = useStudentStore();
    return {
      studentStore,
    };
  },
  data() {
    return {
      student: {
        name: "",
        age: "",
      },
      formErrors: {
        name: false,
        age: false,
      },
      formErrorMsgs: {
        name: "",
        age: "",
      },
    };
  },
  methods: {
    async registerStudent() {
      axiosAuthApi
        .post("students", this.student)
        .then((response) => {
          this.studentStore.student = response.data.student;
          this.student.name = "";
          this.student.age = "";
          this.$router.replace("/crops");
          console.log(this.studentStore.student);
        })
        .catch((errors) => {
          if (errors.response.data.errors.name) {
            this.formErrors.name = true;
            this.formErrorMsgs.name = errors.response.data.errors.name[0];
          }
          if (errors.response.data.errors.age) {
            this.formErrors.age = true;
            this.formErrorMsgs.age = errors.response.data.errors.age[0];
          }
          console.log(errors);
        });
    },
  },
};
</script>
<style></style>
