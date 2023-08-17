<template>
  <q-dialog v-model="abreDlgGPT" :maximized="true">
    <DialogGPT :model_dlg_gpt="abreDlgGPT" :question="questionGPT" />
  </q-dialog>
  <q-page>
    <div class="absolute-full flex flex-center ">
      <Typewriter class="bg-secondary rounded-borders text-weight-light text-h2  text-center justify-center"
                  style="padding-left: 10px;padding-right: 10px; margin-left: 10px;margin-right: 10px;margin-top: 150px;"
                  title=" O que é ser um Professor"
                  :words="adjs" ></Typewriter>
      <br />

    </div>
    <div class="absolute-full flex flex-center " style="margin-top: 260px">
      <q-btn class="bg-primary text-body1 text-white text-weight-medium" @click="toggleAbreDlgGPT('O que é ser um professor ' + adjs[0])">Saiba mais</q-btn>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import Typewriter from "components/Typewriter.vue";
import Section from "components/Section.vue";
import Features from "components/Features.vue";
import Newsletter from "components/Newsletter.vue";
import DialogGPT from "components/DialogGPT.vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    const abreDlgGPT = ref(false);
    const questionGPT = ref("");
    return {
      abreDlgGPT,
      questionGPT,
      toggleAbreDlgGPT(q) {
        console.log("Oi " + abreDlgGPT.value + " Question: " + q);
        abreDlgGPT.value = !abreDlgGPT.value;
        questionGPT.value = q;
      },
      adjs: ["Inovador? ", "Criativo? ", "Líder? ", "Pioneiro? "]
    };
  },
  components: {
    DialogGPT,
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
