<template>
  <!--Background image and title-->

  <main class="px-5 sm:px-6 md:mt-16 lg:mt-20 lg:px-14 xl:mt-28">
    <div class="sm:text-center lg:text-center">
      <!--title-->
      <h1
        class="
          text-4xl
          tracking-tight
          font-extrabold
          text-white
          sm:text-5xl
          md:text-6xl
        "
      >
        <span class="block xl:inline">Yandry Villagómez</span>
        <div>
          <span
            class="
              profesion
              block
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-green-400
              to-blue-50
              xl:inline
            "
            >Fullstack</span
          >
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
            >Developer</span
          >
        </div>
      </h1>

      <p
        class="
          mt-5
          text-white text-base
          tracking-tight
          sm:text-center
          lg:text-center
          md:text-2xl
          sm:text-lg
          font-bold
        "
      >
        "Desarrollando paginas y apps fantasticas"
      </p>

      <div class="flex flex-wrap justify-center mx-auto mt-8">
        <div class="w-6/12 sm:w-3/12 px-4">
          <img
            src="../assets/imagenes/portada1.jpeg"
            alt="..."
            class="
              perfil
              shadow
              rounded-full
              max-w-full
              h-auto
              align-middle
              border-none
            "
          />
        </div>
      </div>
      <!--Buttons-->
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
        <div class="rounded-md border-opacity-100">
          <a
            href=""
            class="
              w-full
              flex
              items-center
              justify-center
              px-8
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              md:py-4 md:text-lg md:px-10
            "
          >
          <router-link  to="/porfolio">Proyectos</router-link>
          </a>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <a
            
            class="
              w-full
              flex
              items-center
              justify-center
              px-8
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-indigo-700
              bg-indigo-100
              hover:bg-indigo-200
              md:py-4 md:text-lg md:px-10
            "
          >
          <router-link  to="/contact">Contacto</router-link>
          </a>
        </div>
      </div>
    </div>

      <!--About me-->
      <div class="text-3xl md:text-5xl font-extrabold mx-12">
        <div class="flex flex-row justify-items-center items-center">
          <span
            class="
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-green-400
              to-blue-500
            "
            >Acerca de mi </span
          ><img
            class="mt-2 mx-3 w-8 sm:w-11"
            src="../assets/icons/icons8-metal-music-48.png"
          />
        </div>

        <p
          class="
            about
            text-white text-base
            mt-4
            md:text-xl
            text-justify
            leading-normal
          "
        >
          A muy temprana edad me empezó a llamar la atención programar . A los
          15 años hacía scripts en Windows Xp y desmontaba ordenadores como
          pasatiempo .Así descubrí que me gustaba programar y me especialicé
          como desarrollador de aplicaciones web . Programar para mi es
          divertirme y a la vez poder crear cosas asombrosas.
        </p>
      </div>

      <!--Skills podriamos poner flex-wrap en el div-->
      <div class="flex justify-between  items-center"> 
        <div class="text-3xl md:text-5xl font-extrabold mx-11 mt-3">
          <span
            class="
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-green-400
              to-blue-500
            "
            >Habilidades
          </span>
          <ul class="list-disc list-inside m-12">
            <li class="text-white">Autodidacta</li>
            <li class="text-white">Creativo</li>
            <li class="text-white">Responsable</li>
            <li class="text-white">Productivo</li>
          </ul>
        </div>
        <div class="mx-32">
          <img src="../assets/icons/Creativity(1).gif" alt="" />
        </div>
      </div>
   
      <div class="text-center">
        <span
          class="
            bg-clip-text
            text-transparent
            bg-gradient-to-r
            from-green-400
            to-blue-500
            text-3xl
            md:text-5xl
            font-extrabold
            mx-12
          "
          > Conocimientos
          
        </span>
      </div>
  
    
  </main>
  <card-image/>
  <foot/>
 


 
    
  


</template>

<script>
 
 import CardImage from '@/components/Cardimage.vue'
 import Foot from '@/components/Foot.vue'

 export default{

  name:"home",
  components:{
     CardImage,Foot
  } 

 }

 




</script>

<style scoped>
.profesion {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: 20s;
  animation-direction: normal;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

.perfil:hover {
  /* box-shadow: 0px 0px 15px 15px #7faedf; */
  -webkit-transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}
</style>
