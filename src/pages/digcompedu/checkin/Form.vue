<template>
  <q-page padding>

    <div class="row full-width">
      <q-card class="full-width" flat>
        <q-card-section>
          <p class="col-12 text-h6 text-left">Detalhes autoreflexão individual </p>
          <q-separator color="primary" />
        </q-card-section>
      </q-card>

      <q-card class="full-width ">
        <q-expansion-item
          expand-separator
          group="accordeon-group-1"
          class="text-bold text-subtitle1 text-weight-medium shadow-2"
          color="teal"
          label="Resumo"
        >

          <template v-slot:header>
            <q-item-section avatar>
              <q-img :src="'levels/' + checkinItem.level_result_img + '.png'" />
            </q-item-section>
            <q-item-section>
              Resumo
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
                </div>
              </div>
            </q-card-section>


          </q-card>


          <q-card flat>
            <q-card-section>
              <p class="text-center text-bold text-subtitle">Notas por área</p>
              <q-separator />
              <q-tabs v-model="tab" swipeable>
                <div v-for="area in seriesBar" :key="area.id">
                  <q-tab :name="area.id" :label="area.name">
                    <div class="q-mt-md text-center text-black">
                      <q-knob
                        v-model="area.data"
                        show-value
                        size="110px"
                        :thickness="0.35"
                        :color="area.cor"
                        :class="'text-' + area.cor1"
                        readonly
                      >
                        <q-badge color="black" class="text-body1" floating>
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

      <q-card class="full-width ">
        <q-expansion-item
          expand-separator
          group="accordeon-group-1"
          class="text-bold text-subtitle1 text-weight-medium shadow-2"
          color="orange"
          label="Nível de competência por área - Radar"
        >
          <q-card-section>
            <apexchart ref="chartRadar" type="radar" :height="550" style="min-height:450px;max-height: 550px"
                       :options="chartOptions"
                       :series="series"></apexchart>
          </q-card-section>
        </q-expansion-item>
      </q-card>
      <q-card class="full-width ">
        <q-expansion-item
          expand-separator
          group="accordeon-group-1"
          class="text-bold text-subtitle1 text-weight-medium shadow-2"
          color="orange"
          label="Nível de competência por área - Barras"
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
                dense
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
                :inner-min="1"
                :inner-max="6"
                :label-value="area.level_txt"
                markers
              >

              </q-slider>


            </q-card-section>
          </div>
        </q-expansion-item>
      </q-card>

    </div>

    <div v-for="area in this.listAreas" :key="area.id" class="full-width">
      <q-card class="full-width">
        <q-expansion-item v-if="area.main_area"
                          expand-separator
                          group="accordeon-group-1"
                          :header-class="area.cor"
                          class="text-bold text-subtitle1 text-weight-medium shadow-2"
                          :color="area.cor"
                          :label="area.name">

          <q-list>
            <div v-for="subarea in this.listAreas" :key="subarea.id">
              <q-card-section flat class="shadow-5"
                              v-if="!subarea.main_area && subarea.id_txt.substring(0,1) == area.id_txt.substring(0,1)">


                <q-item>
                  <q-item-section side top>

                    <q-item-label inset class="text-body1"> {{ ' _ ' + subarea.level_txt + ' _ '}}</q-item-label>
                    <q-item-label caption>
                      <q-img :src="'levels/' + subarea.level_txt + '.png'"
                             style="height:48px; width: 48px;" />
                    </q-item-label>

                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ subarea.name }}</q-item-label>
                    <q-item-label class="text-subtitle1" lines="3">Questão: {{ subarea.question }}</q-item-label>
                    <q-item-label class="text-subtitle2" lines="3">Sua resposta: {{ subarea.answer }}</q-item-label>
                  </q-item-section>


                </q-item>

              </q-card-section>
            </div>
          </q-list>


        </q-expansion-item>
      </q-card>
    </div>


  </q-page>
</template>
<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
import VueApexCharts from "vue3-apexcharts";
import moment from "moment";

const columnsArea = [
  {
    name: "name",
    required: true,
    label: "Área",
    align: "center",
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: "question", align: "left", label: "Question", field: "question" },
  { name: "answer", align: "left", label: "Answer", field: "answer" },
  { name: "level_txt", label: "Nível", field: "level_txt", sortable: true }
];
export default defineComponent({
  name: "PageFormCheckinDetails",
  components: {
    apexchart: VueApexCharts
  },
  setup() {
  },

  data() {
    const router = useRouter();
    const route = useRoute();
    const { getRadarChartData, getBarChartData, getCheckinAreas, getById } = useApi();
    const { notifyError, notifySuccess } = useNotify();

    const series = ref([]);
    const seriesBar = ref([]);
    const listAreas = ref([]);
    const checkinItem = ref([]);

    const checkinID = computed(() => route.params.id);

    onMounted(() => {
      if (checkinID.value) {
        handleCheckinItem(checkinID.value);
        handleRadarChart(checkinID.value);
        handleBarChart(checkinID.value);
        handleListAreas(checkinID.value);
      }
    });

    const handleCheckinItem = async (id) => {
      try {
        let checkinItemData = await getById("checkin", id);
        checkinItemData.dataRealizacao = formatDate(checkinItemData.created_at);
        checkinItemData.total_pontos = checkinItemData.grade + "/192";
        checkinItem.value = checkinItemData;

        return checkinItemData;
      } catch (error) {
        notifyError(error.message);
      }
    };

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
        return seriesBar;
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
      columnsArea,
      checkinID: ref(""),
      route,
      listAreas,
      checkinItem,
      series: [],
      seriesBar: [],
      chartOptions: {
        title: { text: "Nível de competência por área" },
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
      },
      chartOptionsBar: {
        chart: {
          type: "bar",
          height: 450,
          stacked: true,
          stackType: "100%"
        },
        title: { text: "Nível de competência por área" },
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

        stroke: {
          width: 1
        },
        fill: {
          opacity: 0.8
        },
        xaxis: {},
        colors: ["#e56d00", "#00800c", "#3f85c1", "#1da2a3", "#9a56d1", "#d3375a"]

      },
      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 9
        // rowsNumber: xx if getting data from a server
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

.a1 {
  color: #ee8031;
}

.a2 {
  color: #31942e;
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

.bg-level {
  background-color: #bce6e9;
}
</style>

