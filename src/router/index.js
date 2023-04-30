import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentView from "../views/students/StudentView.vue";
import AddStudentView from "../views/students/AddStudentView.vue";
import UpdateCropView from "../views/students/UpdateCropView.vue";
import CropView from "../views/crops/CropView.vue";
import LoginView from "../views/auth/LoginView.vue";
import RegisterView from "../views/auth/RegisterView.vue";
import CreateStudentView from "../views/student/CreateStudentView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/crops",
      name: "crops",
      component: StudentView,
    },
    {
      path: "/add-crop",
      name: "add-crop",
      component: AddStudentView,
    },
    {
      path: "/crop/:id",
      name: "update-crop",
      component: UpdateCropView,
    },
    {
      path: "/crop",
      name: "crop",
      component: CropView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { requiresAuth: false },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: { requiresAuth: false },
    },
    {
      path: "/student/create",
      name: "student-create",
      component: CreateStudentView,
      meta: {
        meta: { requiresAuth: true },
      },
    },
  ],
});

export default router;
