<template>
    <div class="container">
        <div class="card col-lg-6 mx-auto">
            <h2>Update Resturant</h2>
            <div class="card-body">
                <form>
                    <input class="form-control my-3" type="text" placeholder="Update Name" v-model="restaurant.name">
                    <input class="form-control my-3" type="text" placeholder="update Contact" v-model="restaurant.contact">
                    <input class="form-control my-3" type="text" placeholder="update address" v-model="restaurant.address">
                    <button class="btn btn-primary" @click="update">update Resturant</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"updateRest",
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
            let updateData = await axios.put("http://localhost:3000/resturant/"+this.$route.params.id,{
                name : this.restaurant.name,
                contact : this.restaurant.contact,
                address : this.restaurant.address,
            })
            if(updateData){
                this.$router.push({name : "Home"})
            }
        }
    },
    async mounted() {
        let result = await axios.get("http://localhost:3000/resturant/"+this.$route.params.id);
        this.restaurant = result.data;
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