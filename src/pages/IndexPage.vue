<template>
  <q-page>
    <a id="home"></a>
    <div class="row ">
      <q-parallax src="teachers8.png" :height="1100" class="justify-xs-around">
        <Typewriter class="bg-secondary text-white text-h4 text-center justify-center" title=" O que é ser um Professor"
                    :words="adjs"></Typewriter>
        <q-btn href="#func" class=" q-mt-md text-h6" color="primary">Saiba mais</q-btn>
      </q-parallax>
    </div>

    <a id="func"></a>
    <br />
    <br />
    <Features :data="features" />
    <br />
    <br />
    <Section ref="aboutX" img="sobre.jpg" />

    <br />
    <Section ref="contato" img="sobre.jpg" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import Typewriter from "../components/Typewriter";
import Section from "../components/Section";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";

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
    Typewriter,
    Section,
    Features
  }
});

</script>
