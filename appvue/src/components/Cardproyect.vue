<template>
<!--Contenedor Card proyect-->

<div class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative "  v-for="item in card " v-bind:key="item.id" id="cardproyect">
    <img class="w-full" :src="item.src" alt="img-proyect" />
    <div class="flex">
        <div class="info-box text-xs flex p-1 font-semibold text-white bg-white-500"  v-for="idiom in item.language " v-bind:key="idiom.id">
            <div class="rounded-full py-3 px-6 mr-1 p-1 px-2 font-bold bg-red-500">{{idiom}}</div>
       
          </div>
    </div>
  
    <div class="desc p-4 text-gray-800">
      <a href="http://www.yandryvillamo.com/" target="_new" class="title font-bold block cursor-pointer hover:underline">{{item.name}}</a>
      <a href="mailto:yandry75@correo.com" target="_new" class="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer">Yandry Villagomez &copy;</a>
      <span class="description text-sm block py-2 border-gray-400 mb-2">{{item.description}}</span>
    </div>
  </div>



</template>

<script>
    export default {
      el: "#cardproyect",
    
      data() {
        return {
           card: [ {name:"Foodie",src:require("@/assets/imgproyects/foodie.png"),description:"Es una aplicacion sobre de comida",language:["Php","Sql","Javascript",]}, ],
           
        
        };
      },
    };
    </script>