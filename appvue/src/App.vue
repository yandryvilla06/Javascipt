<template>
  <div class="navbar">
    <Navbar msg="Welcome to Your Vue.js App" />
    
    <router-view />
    <Footer/>
 
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,Footer
  },
};


</script>

<style>
body {
  background-color: black;
}
</style>
