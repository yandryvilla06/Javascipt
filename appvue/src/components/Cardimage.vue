<template>
  <div class="grid grid-cols-3  justify-items-center content-center items-center mt-6 ">
    <div class="w-10/12 sm:w-6/12 py-5"  v-for="item in image " v-bind:key="item.id" id="card"  >

        <img
        class="w-8/12 "
        :src="item.name"
        alt="Sunset in the mountains"
      />
     
      </div>
    
  </div>
  

</template>

<script>
export default {
  el: "#card",

  data() {
    return {
      image: [ {name:require("@/assets/icons/html.svg")},{name:require("@/assets/icons/mysql.png")}, {name:require("@/assets/icons/css.svg")},{name:require("@/assets/icons/python.png")},{name:require("@/assets/icons/javascript.png")},{name:require("@/assets/icons/java.png")}],
    };
  },
};
</script>
