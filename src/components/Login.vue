<template>
<div class="Login vh-100 col-lg-5 mx-auto">
    <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center">
            <div class="card">
                <div class="card-header">
                    <h2>Please Login</h2>
                </div>
                <div class="card-body">
                    <form>
                        <input type="text" placeholder="Please enter your email" class="form-control my-3 py-2" v-model="form.email" />
                        <span v-if="error.email" class="text-danger d-block"> {{error.email}}</span>
                        <input type="text" placeholder="Please enter your password" class="form-control my-3 py-2" v-model="form.password" />
                        <span v-if="error.password" class="text-danger d-block">{{error.password}}</span>
                        <button class="btn btn-primary w-100 d-block" @click="getData">Login</button>
                        <br>
                        <router-link to="./sign-up" class="btn btn-primary w-100 d-block">sign Up</router-link>
                        <router-view />
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
export default {
    name: "loginPage",
    data() {
        return {
            form:{
            email: "",
            password: "",
            },
            error: [],
        }
    },
    methods: {
        async getData(e) {
            e.preventDefault();
            this.error = [];
            if (this.form.email == "") {
                this.error.email = "Please enter the email";
            }
            if (this.form.password == "") {
                this.error.password = "Please enter the password";
            }
            let result = await axios.get(
                `http://localhost:3000/posts?email=${this.form.email}&password=${this.form.password}`
            )
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-details",JSON.stringify(result.data[0]))
                this.$router.push({
                    name: "Home"
                })
            }
        }

    },
    mounted() {
        let user = localStorage.getItem("user-details");
        if(user){
            this.$router.push({ name: "Home"})
        }
    },
}
</script>

<style>
.card {
    border-width: 0px !important;
}

.card-header {
    background: transparent !important;
}

.card-header h2 {
    font-size: 24px !important;
    font-weight: 700 !important;
    color: #eb4253;
}

.btn {
    background: #eb4253 !important;
    border-color: #eb4253;
}

input {
    border: 1px solid #be1d2d !important;
}
</style>
