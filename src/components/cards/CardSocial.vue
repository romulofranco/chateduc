<template>
  <q-card class="bg-transparent no-shadow no-border" bordered>
    <q-card-section class="q-pa-none">
      <div class="row q-col-gutter-sm ">
        <div v-for="(item, index) in items" :key="index" class="col-md-4 col-sm-12 col-xs-12">
          <q-item :style="`background-color: ${item.color1}`" class="q-pa-none">
            <q-item-section v-if="icon_position === 'left'" side :style="`background-color: ${item.color2}`"
                            class=" q-pa-lg q-mr-none text-white">
              <q-icon :name="item.icon" color="white" size="24px"></q-icon>
            </q-item-section>
            <q-item-section class=" q-pa-md q-ml-none  text-white">
              <q-item-label class="text-white text-h6 text-weight-bolder">{{ item.value }}</q-item-label>
              <q-item-label>{{ item.title }}</q-item-label>
            </q-item-section>
            <q-item-section v-if="icon_position === 'right'" side class="q-mr-md text-white">
              <q-item-label class="text-white text-h6 text-weight-bolder">{{ item.level }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CardSocial",
  props: {
    icon_position: {
      required: false,
      default: "left"
    }
  },
  computed: {
    items: function () {
      return this.icon_position === "left"
        ? [
          {
            title: "My Account",
            icon: "person",
            value: "200",
            color1: "#5064b5",
            color2: "#3e51b5"
          },
          {
            title: "Followers",
            icon: "fab fa-twitter",
            value: "500",
            color1: "#f37169",
            color2: "#f34636"
          },
          {
            title: "Connections",
            icon: "fab fa-google",
            value: "50",
            color1: "#ea6a7f",
            color2: "#ea4b64"
          },
          {
            title: "Website Visits",
            icon: "bar_chart",
            value: "1020",
            color1: "#a270b1",
            color2: "#9f52b1"
          }
        ]
        : [
          {
            title: "Engajamento Profissional",
            icon: "fas fa-dollar-sign",
            value: "52%",
            level: "B1",
            color1: "#e56300",
            color2: "#ee7c3f"
          },
          {
            title: "Recursos Digitais",
            icon: "fas fa-chart-bar",
            value: "50%",
            level: "B1",
            color1: "#1a8a03",
            color2: "#1a8a03"
          },
          {
            title: "Ensino e Aprendizagem",
            icon: "fas fa-chart-line",
            value: "53%",
            level: "B1",
            color1: "#06309b",
            color2: "#06309b"
          },
          {
            title: "Avaliação",
            icon: "person",
            value: "60%",
            level: "C1",
            color1: "#09d8e0",
            color2: "#09d8e0"
          }          ,
          {
            title: "Capacitação dos Alunos",
            icon: "person",
            value: "38%",
            level: "A2",
            color1: "#7706c0",
            color2: "#7706c0"
          },
          {
            title: "Promoção da Competência dos Alunos",
            icon: "person",
            value: "41%",
            level: "A2",
            color1: "#a10512",
            color2: "#a10512"
          }
        ];
    }
  }
})
</script>
