<template>
  <q-page padding>
    <div class="row ">
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
            <div v-for="area in this.seriesBar" :key="area.id" class="full-width">
              <q-card-section>
                <div class="q-pa-sm q-gutter-sm">
                  <q-badge :color="area.cor" class="text-h6" style="height: 40px">
                    {{ area.name }}
                  </q-badge>
                  <q-badge outline :color="area.cor" class="text-h6 text-bold text-white">
                    {{ area.level_txt }}
                    <q-img :src="area.img" style="height:40px; width:40px" />
                  </q-badge>
                </div>
                <q-slider
                  :color="area.cor"
                  thumb-color="black"
                  inner-track-color="transparent"
                  v-model="area.level"
                  label-always
                  :min="1"
                  :max="6"
                  track-size="50px"
                  :inner-min="1"
                  :inner-max="6"
                  :label-value="area.level_txt"
                  markers
                  snap
                >

                </q-slider>


              </q-card-section>
            </div>
          </q-expansion-item>
        </q-card>

      </div>

      <div v-for="area in this.seriesBar" :key="area.id" class="full-width">
        <q-card>
          <q-expansion-item
            expand-separator
            group="accordeon-group-1"
            :header-class="area.cor"
            class="text-bold text-subtitle1 text-weight-medium shadow-2"
            :color="area.cor"
            :label="area.name"
          >
            <q-card class="justify-items text-center shadow-5">
              <q-img
                :src="area.img_url"
                height="280px"
                fit="scale-down"
                class="full-width shadow-1"
              />
              <q-card-section class="text-justify">
                {{ area.description }}
              </q-card-section>

              <q-separator />
            </q-card>
          </q-expansion-item>
        </q-card>
      </div>
    </div>

  </q-page>
</template>
<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
import VueApexCharts from "vue3-apexcharts";

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
    const { getRadarChartData, getBarChartData } = useApi();
    const { notifyError, notifySuccess } = useNotify();

    const series = ref([]);
    const seriesBar = ref([]);

    const checkinID = computed(() => route.params.id);

    onMounted(() => {
      if (checkinID.value) {
        handleRadarChart(checkinID.value);
        handleBarChart(checkinID.value);
      }
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
            data: Math.round(area.grade_area / (area.num_questions * 6) * 100)
          };
          this.seriesBar.push(serie);
        });
        return seriesBar;
      } catch (error) {
        notifyError(error.message);
      }
    };

    return {
      checkinID: ref(""),
      route,
      handleRadarChart,
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

      }

    };
  },
  methods: {
    updateChart() {
      let checkId = computed(() => this.route.params.id);
      console.log(checkId.value);
      this.handleRadarChart(checkId.value);
    }

  }
});

</script>
<style>

.text-area1 {
  background: #f36600;
}

.text-area2 {
  background: #31942e;
}

.text-area3 {
  background: #3f85c1;
}

.text-area4 {
  background: #1da2a3;
}

.text-area5 {
  background: #9a56d1;
}

.text-area6 {
  background: #d3375a;
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

