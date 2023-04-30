<template>
  <student-component :crops="crops" :status="status"></student-component>
</template>
<script>
import StudentComponent from "../../components/farmfresh/StudentComponent.vue";
import axios from "axios";
export default {
  components: { StudentComponent },
  data() {
    return {
      crops: [],
      status: "Loading...",
    };
  },
  created() {
    this.getStudents();
  },
  methods: {
    async getStudents() {
      this.status;
      console.log(this.status);
      await axios.get("http://127.0.0.1:8000/api/crops").then((res) => {
        this.crops = res.data;
        this.status = "";
        console.log(this.status);
        console.log(res.data);
      });
    },
  },
};
</script>
<style></style>
