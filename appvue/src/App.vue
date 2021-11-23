<template>
  <div class="navbar">
    <Navbar msg="Welcome to Your Vue.js App" />
    
    <router-view />
  
 
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar
  },
};


</script>

<style>
body {
  background-color: black;
}
</style>
