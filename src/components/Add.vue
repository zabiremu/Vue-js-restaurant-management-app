<template>
    <div class="container">
        <div class="card col-lg-6 mx-auto">
            <h2>Add Resturant</h2>
            <div class="card-body">
                <form>
                    <input class="form-control my-3" type="text" placeholder="Add Name" v-model="restaurant.name">
                    <input class="form-control my-3" type="text" placeholder="Add Contact" v-model="restaurant.contact">
                    <input class="form-control my-3" type="text" placeholder="Add address" v-model="restaurant.address">
                    <button class="btn btn-primary" @click="update">Add Resturant</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:"addResturant",
    data() {
        return {
            restaurant:{
                name:"",
                contact:"",
                address:"",
            },
        }
    },
    methods: {
        async update(e){
            e.preventDefault();
            let result = await axios.post("http://localhost:3000/resturant",{
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address
            })
            console.log(result);
            if(result){
                this.$router.push({name:"Home"})
            }
        }
    },
}
</script>
<style>
h2{
    font-size: 24px;
    padding-top: 2rem;
    padding-left: 1rem;
}
</style>