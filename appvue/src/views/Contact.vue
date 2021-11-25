<template>
  <div class="container mx-auto mt-12">
    <h1 class="text-white text-4xl text-center font-extrabold font-sans mt-12">
      Te gustaría ponerte en contacto conmigo?
    </h1>
    <div class="grid grid-cols-2 gap-4 mx-2">
      <div class="py-12">
        <img
          class="w-full md:w-8/12"
          src="@/assets/imagenes/phone.png"
          alt="img-proyect"
        />
      </div>

      <div class="flex flex-col justify-center">
        <div
          class="
            flex flex-col
            lg:flex-row
            md:flex-row
            items-center
            justify
            mt-4
          "
        >
          <img
            class="w-2/12"
            src="https://img.icons8.com/color/144/000000/whatsapp--v4.png"
            alt="img-proyect"
          />
          <a
            href="tel:+34618152241"
            class="
              text-base
              md:text-3xl
              text-white
              tracking-wide
              font-extrabold
            "
            >+34 618152241</a
          >
        </div>
        <div class="flex flex-col lg:flex-row md:flex-row items-center mt-4">
          <img
            class="w-2/12"
            src="https://img.icons8.com/color/144/000000/gmail--v2.png"
            alt="img-proyect"
          />
          <a
            href="mailto:yandry75@correo.com"
            class="
              text-base
              md:text-3xl
              text-white
              tracking-wide
              font-extrabold
            "
            >yandry75@gmail.com</a
          >
        </div>
        <div class="flex flex-col lg:flex-row md:flex-row items-center mt-4">
          <img
            class="w-2/12"
            src="https://img.icons8.com/color/240/000000/linkedin.png"
          />
          <a
            class="
              text-base
              md:text-3xl
              text-white
              tracking-wide
              font-extrabold
            "
            href="https://www.linkedin.com/in/rafaelvillagomez/"
            >rafael villagomez</a
          >
        </div>
        <div class="flex flex-col lg:flex-row md:flex-row items-center mt-4">
          <img
            class="w-2/12"
            src="https://img.icons8.com/color/144/000000/instagram-new--v2.png"
          />
          <a
            class="
              text-base
              md:text-3xl
              text-white
              tracking-wide
              font-extrabold
            "
            href="https://www.instagram.com/yandry_villamo/?hl=es"
            >yandry_villamo</a
          >
        </div>
      </div>
    </div>
  </div>
  <foot2 />
</template>

<script>
import Foot2 from "@/components/Foot2.vue";

export default {
  name: "home",
  components: {
    Foot2,
  },
};
</script>
