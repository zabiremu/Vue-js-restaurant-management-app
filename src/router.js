import HomeCom from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import loginPage from "./components/Login.vue"
import addResturant from "./components/Add.vue";
import updateRest from "./components/update.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "Home",
        path: "/",
        component: HomeCom
    },
    {
        name: "SignUp",
        path: "/signUp",
        component: SignUp,
    },
    {
        name: "loginPage",
        path: "/login",
        component: loginPage,
    },
    {
        name: "addResturant",
        path: "/add",
        component: addResturant,
    },
    {
        name: "updateRest",
        path: '/update/:id',
        component: updateRest,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;