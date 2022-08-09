<template>
<div class="from vh-100">
    <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center">
            <div class="card col-lg-6 mx-auto">
                <img src="../assets/logo.png" class="w-50 mx-auto" alt="logo" />
                <p class="card-header">Please Sign Up</p>
                <div class="card-body">
                    <form>
                        <input class="from-control my-3 py-2" type="text" placeholder="Please enter your Name" v-model="form.name" />
                        <span v-if="error.name" class="text-danger">
                            {{error.name}}
                        </span>
                        <input class="from-control my-3 py-2" type="text" placeholder="Please enter your email address" v-model="form.email" />
                        <span v-if="error.email" class="text-danger">
                            {{error.email}}
                        </span>
                        <input class="from-control my-3 py-2" type="password" placeholder="Please enter your password" v-model="form.password" />
                        <span v-if="error.password" class="text-danger">
                            {{error.password}}
                        </span>
                        <button class="btn d-block w-100 my-3" v-on:click="getData">
                            Sign-Up
                        </button>
                        <router-link to="./log-in" class="btn btn-primary d-block">Login</router-link>
                        <router-view />
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "SignUp",
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
            },
            error: [],
        };
    },
    methods: {
        async getData(e) {
            e.preventDefault()
            this.error = [];
            if(this.form.name === ""){
                this.error.name = "please enter your name"
            }
            if(this.form.email === ""){
                this.error.email = "please enter your email"
            }
            if(this.form.password === ""){
                this.error.password = "please enter your password"
            }
            console.log(this.error)
            let result = await axios.post("http://localhost:3000/posts", {
                name: this.form.name,
                email: this.form.email,
                password: this.form.password
            });
            if (result.status == 201) {
                localStorage.setItem("user-details",JSON.stringify(result.data))
                this.$router.push({name:'Home'});
            }  
            
        },

    },
    mounted() {
       let user =localStorage.getItem("user-details");
       if(user){
        this.$router.push({name:'Home'});
       }     
    },
};
</script>

<style scoped>
.card {
    --bs-card-border-width: 0px !important;
    text-align: center;
}

.card-header {
    font-size: 24px;
    color: #be1d2d;
    background: #fff !important;
    font-weight: 700;
}

.btn {
    font-size: 20px;
    color: #fff;
    background: #eb4253 !important;
    font-weight: 700;
}

.from-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

:focus {
    color: #be1d2d;
    outline: 1px solid #be1d2d;
    outline-offset: 1px;
}
</style>
