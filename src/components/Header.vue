<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="/">Resturant</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add">Add-resturant</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/update">Update-Resturant</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Log-in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signUp">Sign-up</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click="logout" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
    name:"HeaderCom",
    methods: {
      logout(){
        localStorage.clear();
        this.$router.push({name:"loginPage"})
      }
    },
};
</script>
<style>
.navbar{
  background: #be1d2d !important;
  color: #fff !important;
}
.navbar-brand,.nav-link{
  color: #fff !important;
  font-weight: 500;
}
</style>
