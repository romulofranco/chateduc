<template>
  <q-page class="q-pa-sm">
    <card-social icon_position="right"/>



    <q-card class="q-mt-sm no-shadow" bordered>
      <q-card-section class="text-h6 q-pb-none">
        <q-item>
          <q-item-section avatar class="">
            <q-icon color="blue" name="fas fa-chart-line" size="44px"/>
          </q-item-section>

          <q-item-section>
            <div class="text-h6">Evolução por área para últimas autoavaliações</div>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-section class="row">
        <div class="col-lg-7 col-sm-12 col-xs-12 col-md-7">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
              <q-item>
                <q-item-section top avatar>
                  <q-avatar color="primary" text-color="white" icon="mdi-professional-hexagon"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-orange text-bold">52</q-item-label>
                  <q-item-label caption>Engajamento Profissional</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
              <q-item>
                <q-item-section top avatar>
                  <q-avatar color="green" text-color="white" icon="mdi-file-cog-outline"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-green text-bold">50</q-item-label>
                  <q-item-label caption>Recursos Digitais</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
              <q-item>
                <q-item-section top avatar>
                  <q-avatar color="blue" text-color="white" icon="mdi-teach"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-blue text-bold">53</q-item-label>
                  <q-item-label caption>Ensino e Aprendizagem</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
              <q-item>
                <q-item-section top avatar>
                  <q-avatar color="cyan" text-color="white" icon="mdi-clipboard-check-multiple-outline"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-cyan text-bold">60</q-item-label>
                  <q-item-label caption>Avaliação</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
              <q-item>
                <q-item-section top avatar>
                  <q-avatar color="purple" text-color="white" icon="mdi-apple-keyboard-caps"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-purple text-bold">38</q-item-label>
                  <q-item-label caption>Capacitação dos alunos</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-lg-3 col-md-3 col-xs-6 col-sm-6">
              <q-item>
                <q-item-section top avatar>
                  <q-avatar color="red-9" text-color="white" icon="mdi-clipboard-account"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-red-9 text-bold">41</q-item-label>
                  <q-item-label caption>Promoção da Competência nos Alunos</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </div>
          <div>
            <ECharts :option="sales_options"
                     class="q-mt-md"
                     :resizable="true"
                     autoresize style="height: 250px;"
            />
          </div>
        </div>
        <div class="col-lg-5 col-sm-12 col-xs-12 col-md-5" style="margin-top: -60px">
          <div class="text-h6">Áreas e Niveis de Competência</div>
              <apexchart ref="chartRadar" type="radar" :height="550" style="min-height:450px;max-height: 550px"
                         :options="chartOptions"
                         :series="series"></apexchart>


        </div>
      </q-card-section>
    </q-card>

    <Resumo ref="resumoCheckin" :detail="false" :label="checkinItem.dataRealizacao"
            :checkin_id="92"
            :checkin_item="checkinItem" :key="checkinItem.id" />

  </q-page>
</template>

<script>
import {defineComponent, defineAsyncComponent, ref,onMounted, computed } from 'vue';
import * as echarts from 'echarts';
import ECharts from "vue-echarts";
import { useRouter, useRoute } from "vue-router";
import useApi from "src/composables/UseApi";
import VueApexCharts from "vue3-apexcharts";
import Resumo from "pages/digcompedu/checkin/Resumo.vue";
import useNotify from "src/composables/UseNotify";
import moment from "moment/moment";

const messages = [
  {
    id: 5,
    name: "Pratik Patel",
    msg: " -- I'll be in your neighborhood doing errands this\n" + "            weekend. Do you want to grab brunch?",
    avatar: "https://avatars2.githubusercontent.com/u/34883558?s=400&v=4",
    time: "10:42 PM"
  },
  {
    id: 6,
    name: "Winfield Stapforth",
    msg: " -- I'll be in your neighborhood doing errands this\n" + "            weekend. Do you want to grab brunch?",
    avatar: "https://cdn.quasar.dev/img/avatar6.jpg",
    time: "11:17 AM"
  },
  {
    id: 1,
    name: "Boy",
    msg: " -- I'll be in your neighborhood doing errands this\n" + "            weekend. Do you want to grab brunch?",
    avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
    time: "5:17 AM"
  },
  {
    id: 2,
    name: "Jeff Galbraith",
    msg: " -- I'll be in your neighborhood doing errands this\n" + "            weekend. Do you want to grab brunch?",
    avatar: "https://cdn.quasar.dev/team/jeff_galbraith.jpg",
    time: "5:17 AM"
  },
  {
    id: 3,
    name: "Razvan Stoenescu",
    msg: " -- I'll be in your neighborhood doing errands this\n" + "            weekend. Do you want to grab brunch?",
    avatar: "https://cdn.quasar.dev/team/razvan_stoenescu.jpeg",
    time: "5:17 AM"
  }
];
const contacts = [
  {
    name: "Pratik Patel",
    position: "Developer",
    avatar: "https://avatars2.githubusercontent.com/u/34883558?s=400&v=4"
  },
  {
    name: "Razvan Stoenescu",
    position: "Developer",
    avatar: "https://cdn.quasar.dev/team/razvan_stoenescu.jpeg"
  },
  {
    name: "Jeff Galbraith",
    position: "Developer",
    avatar: "https://cdn.quasar.dev/team/jeff_galbraith.jpg"
  },
  {
    name: "Brunhilde Panswick",
    position: "Administrator",
    avatar: "https://cdn.quasar.dev/img/avatar2.jpg"
  },
  {
    name: "Winfield Stapforth",
    position: "Administrator",
    avatar: "https://cdn.quasar.dev/img/avatar6.jpg"
  }
];
const sales_data = [
  {
    name: "Pratik Patel",
    Progress: 70,
    status: "Canceled",
    stock: "14 / 30",
    date: "23 Oct 2018",
    avatar: "https://avatars3.githubusercontent.com/u/34883558?s=400&u=09455019882ac53dc69b23df570629fd84d37dd1&v=4",
    product_name: "Woman Bag",
    total: "$300,00",
    code: "QWE123",
    prod_img: new URL("../assets/bag.jpg", import.meta.url).href
  },
  {
    name: "Mayank Patel",
    Progress: 60,
    status: "Sent",
    date: "11 Nov 2018",
    stock: "25 / 70",
    avatar: "https://avatars2.githubusercontent.com/u/27857088?s=400&u=a898efbc753d93cf4c2070a7cf3b05544b50deea&v=4",
    product_name: "Laptop",
    total: "$230,00",
    code: "ABC890",
    prod_img: new URL("../assets/laptop.jpg", import.meta.url).href
  },
  {
    name: "Mayur Patel",
    Progress: 30,
    status: "Pending",
    stock: "35 / 50",
    avatar: "https://avatars0.githubusercontent.com/u/55240045?s=400&u=cf9bffc2bd2d8e42ca6e5abf40ddd6c1a03ce2860&v=4",
    product_name: "Pinapple Jam",
    total: "$34,00",
    date: "19 Sept 2020",
    code: "GHI556",
    prod_img: new URL("../assets/jam.jpg", import.meta.url).href
  },
  {
    name: "Jeff Galbraith",
    Progress: 100,
    status: "Paid",
    stock: "18 / 33",
    avatar: "https://avatars1.githubusercontent.com/u/10262924?s=400&u=9f601b344d597ed76581e3a6a10f3c149cb5f6dc&v=4",
    product_name: "Action Figure",
    total: "$208,00",
    date: "19 Sept 2020",
    code: "JKL345",
    prod_img: new URL("../assets/action.jpg", import.meta.url).href
  }
];
const sales_column = [
  {
    name: "Products",
    label: "Products",
    field: "Products",
    sortable: true,
    align: "left"
  },
  {name: "Name", label: "Buyer", field: "name", sortable: true, align: "left"},
  {
    name: "Total",
    label: "Total",
    field: "total",
    sortable: true,
    align: "right",
    classes: "text-bold"
  },
  {
    name: "Status",
    label: "Status",
    field: "status",
    sortable: true,
    align: "left",
    classes: "text-bold"
  },
  {name: "Stock", label: "Stock", field: "task", sortable: true, align: "left"}
];

export default defineComponent({
  name: "Dashboard",
  components: {
    CardSocial: defineAsyncComponent(() => import("components/cards/CardSocial.vue")),
    ECharts,
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
    const checkinID = computed(() => 92);
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
      },
      slide: ref(1),
      tab: ref("contact"),
      messages,
      contacts,
      sales_data,
      sales_column,
      sales_options:{
        legend: {
          data: ["A1", "A2", "A3", "A4", "A5", "A6"],
          icon: "line"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Coordinate axis indicator, coordinate axis trigger is valid
            type: "shadow" // The default is a straight line, optional:'line' |'shadow'
          }
        },
        grid: {
          left: "2%",
          right: "2%",
          top: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false
            }
          }
        ],

        series: [
          {
            name: "Engajamento Profissional",
            type: "line",
            data: [50, 51, 60, 58, 77, 79, 68, 80, 82, 90, 91, 95],
            color: "#ef6a0a"
          },
          {
            name: "Recursos Digitais",
            type: "line",
            data: [124, 100, 20, 120, 117, 70, 110, 90, 50, 90, 20, 50],
            color: "#04ab08"
          },
          {
            name: "Enisno e Aprendizagem",
            type: "line",
            data: [17, 2, 0, 29, 20, 10, 23, 0, 8, 20, 11, 30],
            color: "#0822c5"
          },
          {
            name: "Avaliação",
            type: "line",
            data: [20, 100, 80, 14, 90, 86, 100, 70, 120, 50, 30, 60],
            color: "#0bd2e3"
          },
          {
            name: "Capacitação dos Alunos",
            type: "line",
            data: [20, 100, 80, 14, 90, 86, 100, 70, 120, 50, 30, 60],
            color: "#7706c0"
          },
          {
            name: "Promoção de Competências",
            type: "line",
            data: [20, 100, 80, 14, 90, 86, 100, 70, 120, 50, 30, 60],
            color: "#e80618"
          }
        ]
      },
      pie_options:{
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          bottom: 10,
          left: "center",
          data: ["Fashions", "Electronics", "Toys", "Vouchers"]
        },
        series: [
          {
            name: "Sales",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 335,
                name: "Fashions",
                itemStyle: {
                  color: "#546bfa"
                }
              },
              {
                value: 310,
                name: "Electronics",
                itemStyle: {
                  color: "#3a9688"
                }
              },
              {
                value: 234,
                name: "Toys",
                itemStyle: {
                  color: "#02a9f4"
                }
              },
              {
                value: 135,
                name: "Vouchers",
                itemStyle: {
                  color: "#f88c2b"
                }
              }
            ]
          }
        ]
      },
      sales_chart:null,
      pie_chart:null,

      getColor(val) {
        if (val > 70 && val <= 100) {
          return "green";
        } else if (val > 50 && val <= 70) {
          return "blue";
        }
        return "red";
      },
      getChipColor(status) {
        if (status == "Canceled") {
          return "negative";
        } else if (status == "Sent") {
          return "positive";
        } else if (status == "Pending") {
          return "warning";
        } else if (status == "Paid") {
          return "info";
        } else {
          return "dark";
        }
      },

    };
  },
  methods: {}

})
</script>

<style scoped></style>
