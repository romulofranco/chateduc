<template>
  <q-dialog v-model="abreDlgGPT" :maximized="true">
    <DialogGPT :model_dlg_gpt="abreDlgGPT" :question="questionGPT" />
  </q-dialog>
  <q-page padding>
    <div class="full-width">
      <div class="q-pa-md">
        <div class="row">
          <div class="col">
            <p class="text-h5 text-left">Recomendações</p>
          </div>
        </div>
        <q-separator color="primary" class="full-width" />
        <br />

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

                        <q-item-label  caption>
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
                      <q-separator vertical/>
                      <q-item >
                        <q-item-label avatar>
                          <q-avatar size="56px" class="q-mb-sm">
                            <img src="https://uploads.laborx.com/avatars/thumb_resized_100x100_4TtosT2qJm9_JHIoAU59OdZ3RxOFL9ZM.png" />
                          </q-avatar>
                        </q-item-label>
                      </q-item>
                      <q-item-section style="margin-left:-10px; background-color: #f3d38c; border-radius: 10px;padding: 5px 5px 5px 5px">
                        <q-item-label class="text-subtitle1">{{ subarea.question }}</q-item-label>
                      </q-item-section>
                      <q-item-label  >
                        <q-badge inset="4" style="margin-left: 10px; height: 25px;width:35px;font-size:18px" :color="subarea.cor"
                                 class="text-white text-bold" :label="subarea.level_txt" />

                      </q-item-label>
                    </q-item>

                    <q-separator inset />

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

import { defineComponent, ref, onMounted} from "vue";
import { useRouter, useRoute } from "vue-router";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
import VueApexCharts from "vue3-apexcharts";
import DialogGPT from "components/DialogGPT.vue";

export default defineComponent({
  name: "RecomendationPage",
  components: {
    DialogGPT
  },
  setup() {
  },

  data() {
    const route = useRoute();
    const { getCheckinAreas, getById } = useApi();
    const { notifyError, notifySuccess } = useNotify();
    const listAreas = ref([]);
    const checkinItem = ref([]);
    const checkinID = ref(92);
    const abreDlgGPT = ref(false);
    const questionGPT = ref("");

    onMounted(() => {
      console.log("CheckinForm: " + checkinID.value);
      if (checkinID.value) {
        handleListAreas(checkinID.value);
      }
    });

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
        console.log(q);
        abreDlgGPT.value = !abreDlgGPT.value;
        questionGPT.value = q;
      },
      checkinID,
      checkinItem,
      route,
      listAreas,
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

