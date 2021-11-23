<template>
  <!-- <div class="text-center font-bold text-4xl m-5  ">
    <span
    class="
      profesion
      block
      bg-clip-text
      text-transparent
      bg-gradient-to-r
      from-red-400
      to-blue-500
      xl:inline
    "
    >Proyectos</span>
  </div> -->

  <div class="holder mx-auto w-10/12 grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
   
    <cardproyect/>


  </div>
  

</template>


<script>
 
 import Cardproyect from '@/components/Cardproyect.vue'
 
 export default{

  name:"porfolio",
  components:{
    Cardproyect
  } 

}

 
 
 
 
 </script>


