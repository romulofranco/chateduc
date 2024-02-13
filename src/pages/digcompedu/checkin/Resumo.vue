<template>
  <div class="full-width">
    <q-card class="full-width " borderless>
      <q-expansion-item
        expand-separator
        group="accordeon-group-1"
        class="text-bold text-subtitle1 text-weight-medium shadow-2"
        label="Resumo"
      >

        <template v-slot:header>
          <q-item-section avatar style="height:40px; width: 40px">
            <q-img :src="'levels/' + checkinItem.level_result_img + '.png'">
              <div class="floating transparent">
                <q-badge filled top color="teal">{{ checkinItem.level_result_img.toUpperCase() }}</q-badge>
              </div>
            </q-img>

          </q-item-section>
          <q-item-section>
            {{ title }}
          </q-item-section>
          <q-item-section side>
            <div class="row items-center">
              <q-icon v-for="n of checkinItem.id_level" :key="n" name="star" color="red" size="18px" n />
            </div>
          </q-item-section>
        </template>
        <q-card flat>

          <q-card-section>
            <div class="q-pa-md">


              <div class="q-gutter-md">
                <q-input
                  filled
                  v-model="checkinItem.dataRealizacao"
                  label="Data da realização"
                  readonly
                />

                <q-input
                  filled
                  class="text-bold"
                  v-model="checkinItem.total_pontos"
                  label="Total de Pontos"
                  readonly
                />

                <q-input
                  filled
                  v-model="checkinItem.prof_result"
                  label="Resultado ao final da avaliação"
                  readonly
                />

                <q-input
                  filled
                  v-model="checkinItem.prof_expected"
                  label="Esperado antes da realização"
                  readonly
                />

                <q-input
                  filled
                  v-model="checkinItem.prof_after"
                  label="Esperado após a realização"
                  readonly
                />
                <div class="col text-right">
                  <q-btn v-if="btnDetail" label="Detalhar" color="primary"
                         @click="handleDetail(checkinItem)" />
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
        <q-card flat>
          <q-card-section>
            <p class="text-center text-bold text-subtitle">Notas por área</p>
            <q-separator />
            <q-tabs  :breakpoint="1"  align="justify" animated   active-color="primary"
                    indicator-color="primary"
                    outside-arrows
                    mobile-arrows>
              <div v-for="area in seriesBar" :key="area.id">
                <q-tab :name="area.id" :label="area.name">
                  <div class="q-mt-md text-center text-black">
                    <q-knob
                      v-model="area.data"
                      show-value
                      size="110px"
                      :thickness="0.35"
                      :color="area.cor"
                      :class="'bg-' + area.cor1"
                      readonly
                    >
                      <q-badge color="black" class="text-body1 text-white" style="color: white;height: 32px;width: 32px"
                               floating>
                        {{ area.level_txt }}
                      </q-badge>
                      {{ area.data + "%" }}
                    </q-knob>
                  </div>
                </q-tab>
              </div>
            </q-tabs>
          </q-card-section>


        </q-card>

      </q-expansion-item>
    </q-card>


  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PageResumoCheckin",
  props: ["label", "checkin_id", "checkin_item", "detail"],

  data: function() {
    const { getBarChartData } = useApi();
    const { notifyError } = useNotify();
    const router = useRouter();

    onMounted(() => {
      if (this.checkin_id) {
        handleBarChart(this.checkin_id);
      }
    });

    const handleDetail = (checkin) => {
      console.log("handleDetail " + checkin.id);
      router.push({ name: "digcompedu-checkin-form", params: { id: checkin.id } });
    };

    const handleBarChart = async (id) => {
      try {
        let chartData = await getBarChartData("checkin_areas", id);

        chartData.forEach((area) => {
          let serie = {
            id: area.id,
            name: area.name,
            cor: area.cor,
            cor1: "bg-" + area.cor,
            level: area.id_level,
            level_txt: area.level_txt,
            img: "levels/" + area.level_txt + ".png",
            grade: area.grade_area,
            data: Math.round(area.grade_area / (area.num_questions * 6) * 100)
          };
          this.seriesBar.push(serie);
        });
        return chartData;
      } catch (error) {
        notifyError(error.message);
      }
    };


    return {
      seriesBar: ref([]),
      checkinItem: this.checkin_item,
      checkinID: this.checkin_id,
      title: this.label,
      handleDetail,
      btnDetail: this.detail
    };
  }
});
</script>


<style>
.bg-header {
  background-color: #f3d38c;
}



.bg-area1 {
  background-color: #f36600;
}

.bg-area2 {
  background-color: #31942e;
}

.bg-area3 {
  background-color: #3f85c1;
}

.bg-area4 {
  background-color: #1da2a3;
}

.bg-area5 {
  background-color: #9a56d1;
}

.bg-area6 {
  background-color: #d3375a;
}


</style>
