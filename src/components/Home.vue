<template>
  <div class="container">
    <h2 class="text-center py-5 pe-5">Welcome to our resturant {{ name }}</h2>
    <table class="col-lg-7 mx-auto">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Actions</th>
        <th>Delete</th>
      </tr>
      <tr v-for="items in resturant" :key="items">
        <td>{{ items.id }}</td>
        <td>{{ items.name }}</td>
        <td>{{ items.contact }}</td>
        <td>{{ items.address }}</td>
        <td>
          <router-link class="btn btn-primary my-2" :to="'/update/' + items.id"
            >Update</router-link
          >
        </td>
        <button class="btn btn-primary my-2" @click="Delete(items.id)">
          Delete
        </button>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HomeCom",
  data() {
    return {
      resturant: [],
    };
  },
  methods: {
    async Delete(id) {
      let delData = await axios.delete("http://localhost:3000/resturant/" + id);
      console.log(delData);
      if (delData.status == 200) {
       this.loadData();
      }
    },
    async loadData(){
       let user = localStorage.getItem("user-details");
        this.name = JSON.parse(user).name;
        if (!user) {
          this.$router.push({ name: "loginPage" });
        }
        let result = await axios.get("http://localhost:3000/resturant");
        this.resturant = result.data;
    }
  },
  async mounted() {
    this.loadData();
  },
};
</script>
<style></style>
