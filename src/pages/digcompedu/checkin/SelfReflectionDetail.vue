<template>
  <q-dialog v-model="abreDlgGPT" :maximized="true">
    <DialogGPT :model_dlg_gpt="abreDlgGPT" :question="questionGPT" />
  </q-dialog>
  <q-page padding>
    <div class="full-width">
      <div class="q-pa-md">
        <div class="row">
          <div class="col">
            <p class="text-h5 text-left">Detalhamento</p>
          </div>
          <div class="col text-right">
            <q-btn
              class="col-12"
              color="primary"
              icon="mdi-keyboard-backspace"
              :to="{ name: 'digcompedu-checkin-list' }"
            />
          </div>
        </div>


        <q-separator color="primary" class="full-width" />
        <br />
        <Resumo ref="resumoCheckin" :detail="false" :label="checkinItem.dataRealizacao"
                :checkin_id="route.params.id"
                :checkin_item="checkinItem" :key="checkinItem.id" />

        <q-card class="full-width">
          <q-expansion-item
            expand-separator
            group="accordeon-group-1"
            class="text-bold text-subtitle1 text-weight-medium shadow-2"
            color="orange"
            label="Áreas e Níveis de competência"
          >
            <q-card-section>
              <apexchart ref="chartRadar" type="radar" :height="550" style="min-height:450px;max-height: 550px"
                         :options="chartOptions"
                         :series="series"></apexchart>
            </q-card-section>
          </q-expansion-item>
        </q-card>
        <q-card class="full-width">
          <q-expansion-item expand-separator
                            group="accordeon-group-1"
                            class="text-bold text-subtitle1 text-weight-medium shadow-2"
                            color="teal"
                            label="Nível de competência por área"
          >
            <div v-for="area in this.seriesBar" :key="area.id">
              <q-card-section class="q-pa-sm q-gutter-sm ">
                <q-badge :color="area.cor" class="text-h6" style="height: 40px">
                  {{ area.name }}
                </q-badge>
                <q-badge outline :color="area.cor">
                  <div class="text-h6 text-bold text-white">{{ area.level_txt }}</div>
                  <q-img :src="area.img" style="height:40px; width:40px" />
                </q-badge>

                <q-slider
                  readonly
                  class="q-mt-sm"
                  :color="area.cor"
                  thumb-color="black"
                  inner-track-color="transparent"
                  v-model="area.level"
                  label-always
                  :min="1"
                  :max="6"
                  thumb-size="15px"
                  track-size="30px"
                  step="1"
                  :label-value="area.level_txt"
                  markers
                >

                </q-slider>


              </q-card-section>
            </div>
          </q-expansion-item>
        </q-card>

        <div v-for="area in this.listAreas" :key="area.id" class="full-width">
          <q-card class="full-width">
            <q-expansion-item v-if="area.main_area"
                              expand-separator
                              group="accordeon-group-1"
                              :header-class="area.cor"
                              class="text-bold text-subtitle1 text-weight-medium shadow-2"
                              :color="area.cor"
                              :label="area.name">

              <q-list bordered separator>
                <div v-for="subarea in this.listAreas" :key="subarea.id">
                  <div style="border: 1px" class="shadow-3"
                       v-if="!subarea.main_area && subarea.id_txt.substring(0,1) == area.id_txt.substring(0,1)">

                    <q-item clickable flat v-ripple :class="'bar-' + subarea.cor"
                            @click="toggleAbreDlgGPT(subarea.question)">
                      <q-item-section side top>

                        <q-item-label caption>
                          <q-img :src="'levels/' + subarea.level_txt + '.png'"
                                 style="height:48px; width: 48px;">
                          </q-img>

                        </q-item-label>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>{{ subarea.name }}</q-item-label>
                        <q-item-label class="text-subtitle1">Questão: {{ subarea.question }}</q-item-label>
                        <q-item-label class="text-subtitle2">Sua resposta: {{ subarea.answer }}
                        </q-item-label>
                      </q-item-section>
                      <q-item-label side top>
                        <q-badge inset="4" style="height: 25px;width:35px;font-size:18px" :color="subarea.cor"
                                 class="text-white text-bold" :label="subarea.level_txt" />

                      </q-item-label>
                    </q-item>

                  </div>

                </div>
              </q-list>


            </q-expansion-item>
          </q-card>
        </div>
      </div>
    </div>

  </q-page>
</template>
<script>
import Resumo from "src/pages/digcompedu/checkin/Resumo.vue";
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
import VueApexCharts from "vue3-apexcharts";
import moment from "moment";
import DialogGPT from "components/DialogGPT.vue";

export default defineComponent({
  name: "PageFormCheckinDetails",
  components: {
    DialogGPT,
    Resumo,
    apexchart: VueApexCharts
  },
  setup() {
  },

  data() {
    const route = useRoute();
    const { getRadarChartData, getCheckinAreas, getById } = useApi();
    const { notifyError, notifySuccess } = useNotify();
    const series = ref([]);
    const seriesBar = ref([]);
    const listAreas = ref([]);
    const checkinItem = ref([]);
    const checkinID = computed(() => route.params.id);
    const abreDlgGPT = ref(false);
    const questionGPT = ref("");

    onMounted(() => {
      console.log("CheckinForm: " + checkinID.value);
      if (checkinID.value) {
        handleCheckinItem(checkinID.value);
        handleRadarChart(checkinID.value);
        handleListAreas(checkinID.value);
      }
      this.seriesBar = this.$refs.resumoCheckin.seriesBar;
    });

    const handleRadarChart = async (id) => {
      try {
        let chartData = await getRadarChartData(id);

        chartData.forEach((area) => {
          let serie = {
            name: area.description,
            data: [area.a1, area.a2, area.b1, area.b2, area.c1, area.c2]
          };
          this.series.push(serie);
        });
        return series;
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleCheckinItem = async (id) => {
      try {
        console.log("Oi " + id);
        let checkin = await getById("checkin", id);
        checkin.dataRealizacao = formatDate(checkin.created_at);
        checkin.total_pontos = checkin.grade + "/192";
        this.checkinItem = checkin;
        //console.log(this.checkinItem.value);

        return checkin;
      } catch (error) {
        notifyError(error.message);
      }
    };
    const handleListAreas = async (id) => {
      try {
        listAreas.value = await getCheckinAreas("checkin_areas", id);
        return listAreas;
      } catch (error) {
        notifyError(error.message);
      }
    };

    const formatDate = (value) => {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY HH:mm");
      }
    };
    return {
      abreDlgGPT,
      questionGPT,
      toggleAbreDlgGPT(q) {
        abreDlgGPT.value = !abreDlgGPT.value;
        questionGPT.value = q;
      },
      checkinID,
      checkinItem,
      route,
      listAreas,
      series: [],
      seriesBar,
      chartOptions: {
        labels: ["A1 Iniciante", "A2 Explorador", "B1 Integrador", "B2 Especialista", "C1 Líder", "C2 Pioneiro"],
        markers: {
          size: 4,
          strokeWidth: 2
        },
        plotOptions: {
          bar: {
            barHeight: "100%",
            distributed: false,
            horizontal: true,
            dataLabels: {
              position: "bottom"
            },
            legend: {
              show: false
            }
          }
        },
        legend: {
          position: "bottom",
          floating: true,
          fontSize: "12px"
        },
        stroke: {
          width: 1
        },
        fill: {
          opacity: 0.8
        },
        xaxis: {
          categories: ["A1 Iniciante", "A2 Explorador", "B1 Integrador", "B2 Especialista", "C1 Líder", "C2 Pioneiro"]
        },
        colors: ["#e56d00", "#00800c", "#3f85c1", "#1da2a3", "#9a56d1", "#d3375a"]
      }

    };
  },
  methods: {}
});

</script>
<style>

.text-area1 {
  background: #f36600;
  color: #f36600 !important;
}

.text-area2 {
  background: #31942e;
  color: #31942e !important;
}

.text-area3 {
  background: #3f85c1;
  color: #3f85c1 !important;
}

.text-area4 {
  background: #1da2a3;
  color: #1da2a3 !important;
}

.text-area5 {
  background: #9a56d1;
  color: #9a56d1 !important;
}

.text-area6 {
  background: #d3375a;
  color: #d3375a !important;
}

.area1 {
  background: #f36600;
}

.area2 {
  background: #31942e;
}

.area3 {
  background: #3f85c1;
}

.area4 {
  background: #1da2a3;
}

.area5 {
  background: #9a56d1;
}

.area6 {
  background: #d3375a;
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


.bar-area1 {
  background-color: #efa672;
}

.bar-area2 {
  background-color: #bcecba;
}

.bar-area3 {
  background-color: #a4caee;
}

.bar-area4 {
  background-color: #a9efef;
}

.bar-area5 {
  background-color: #cb9fef;
}

.bar-area6 {
  background-color: #f6a0b1;
}

.bg-level {
  background-color: #bce6e9;
}
</style>

