<template>
  <q-page>

    <div class="absolute-full flex flex-center ">
      <Typewriter class="bg-secondary text-white text-weight-light text-h2  text-center justify-center"
                  title=" O que é ser um Professor"
                  :words="adjs"></Typewriter>
      <br />

    </div>
    <div class="absolute-full flex flex-center " style="margin-top: 120px">
      <q-btn class="bg-primary text-body1 text-white text-weight-medium">Saiba mais</q-btn>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import Typewriter from "components/Typewriter.vue";
import Section from "components/Section.vue";
import Features from "components/Features.vue";
import Newsletter from "components/Newsletter.vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      adjs: ["Inovador? ", "Criativo? ", "Líder? ", "Pioneiro? "],
      features: [
        {
          title: "Promover competências digitais",
          icon: "teachers.jpg",
          text:
            "O DigCompEdu é uma matriz de competências digitais utilizada para mapear áreas e niveis de competências digitais aplicado aos profissionais da Educação."
        },
        {
          title: "Autorreflexão",
          icon: "teachers2.jpg",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate ex earum soluta accusantium id corrupti sit deserunt dolorem ut, eius, numquam illo perferendis, reiciendis tempore quis at libero laudantium?"
        },
        {
          title: "Fast",
          icon: "fas fa-rocket",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate ex earum soluta accusantium id corrupti sit deserunt dolorem ut, eius, numquam illo perferendis, reiciendis tempore quis at libero laudantium?"
        }
      ]
    };
  },
  components: {
    Typewriter

  }
});

</script>
<style scoped>
.center {

  margin: auto;
  width: 60%;
  border: 3px solid #73AD21;
  padding: 10px;
}

</style>
