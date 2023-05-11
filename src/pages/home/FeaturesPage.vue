<template>
  <q-page padding style="padding-top: 65px">
    <Features :data="features" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import Features from "../../components/Features";

export default defineComponent({
  name: "FeaturesPage",
  components: {
    Features
  },

  setup() {
    return {
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
  }
});
</script>
