<template>
  <q-page padding>

    <q-card class="shadow-2 col-12" flat>
      <q-card-section>
        <p class="col-12 text-h5 text-left">Autoreflexão individual - Detalhes</p>
        <q-separator color="primary" />
      </q-card-section>
    </q-card>
    <q-card class="shadow-1 col-auto">
      <q-card-section>
        <apexchart ref="chartRadar" type="radar" style="min-height:450px;max-height: 450px" :options="chartOptions"
                   :series="series"></apexchart>
      </q-card-section>
      <q-space />
      <q-card-actions align="right">
        <q-btn label="Voltar" color="primary" flat :to="{ name: 'category' }" />
      </q-card-actions>
    </q-card>

    <q-card class="shadow-1 col-6">
      <q-card-section>
        <apexchart ref="chartRadar" type="bar" style="min-height:450px;max-height:450px" :options="chartOptions"
                   :series="series"></apexchart>
      </q-card-section>
      <q-space />
      <q-card-actions align="right">
        <q-btn label="Voltar" color="primary" flat :to="{ name: 'category' }" />
      </q-card-actions>
    </q-card>


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
    const { getRadarChartData } = useApi();
    const { notifyError, notifySuccess } = useNotify();

    const chartRadarData = ref([]);
    const series = chartRadarData;

    const form = ref({
      name: "",
      peso: 1
    });

    const checkinID = computed(() => route.params.id);

    onMounted(() => {
      if (checkinID.value) {
        chartRadarData.value = handleCheckin(checkinID.value);
        // series.value = chartRadarData.value;
      }
    });

    const handleCheckin = async (id) => {
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

    return {
      checkinID,
      chartRadarData,
      handleCheckin,
      series: [],
      chartOptions: {
        title: { text: "Nível de competência por área" },

        markers: {
          size: 4,
          strokeWidth: 2
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
          categories: ["A1 - Iniciante", "A2 - Explorador", "B1 - Integrador", "B2 - Especialista", "C1 - Líder", "C2 - Pioneiro"]
        },
        colors: ["#e56d00", "#00800c", "#3f85c1", "#1da2a3", "#9a56d1", "#d3375a"]

      }
    };
  },
  methods: {}
});

</script>


