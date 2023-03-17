<template>
  <q-page padding>
    <q-dialog v-model="abreDlg" :maximized="true" @click="abreDlg = false">
      <q-card flat>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">DigCompEdu - Áreas</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-img src="areas/digcompedu2.jpg"> </q-img>
        <q-card-section>
          <div class="absolute-bottom text-right">
            <div class="text-overline">
              Fonte: Lucas, M., & Moreira, A. (2018). DigCompEdu: quadro europeu de
              competência digital para educadores. Aveiro: UA
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="row q-pa-md">
      <div>
        <p class="col-12 text-h5 text-left">Áreas do DigCompEdu</p>
      </div>
      <q-separator color="primary" class="full-width" />
      <br />
      <q-card class="full-width" flat>
        <q-img src="areas/digcompedu2.jpg" fit="contain" @click="abreDlg = true">
          <div class="absolute-bottom text-right" style="height: 50px">
            <div class="text-overline">
              Fonte: Lucas, M., & Moreira, A. (2018). DigCompEdu: quadro europeu de
              competência digital para educadores. Aveiro: UA
            </div>
          </div>
        </q-img>
      </q-card>

      <div v-for="area in this.areasList" :key="area.id" class="full-width">
        <q-expansion-item
          expand-separator
          group="accordeon-group-1"
          :header-class="area.cor"
          class="text-bold text-subtitle1 text-weight-medium shadow-1"
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
            <div
              v-for="subarea in area.subareas"
              :key="subarea.id"
              class="text-justify no-wrap"
            >
              <q-card>
                <q-item>
                  <q-item-section avatar>
                    <q-avatar :color="area.cor" class="text-bold" size="32px">
                      <q-item-label>{{ subarea.id }}</q-item-label>
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label class="text-bold text-h6">{{
                      subarea.name
                    }}</q-item-label>
                  </q-item-section>
                </q-item>

                <q-card-section>
                  <q-item-label>{{ subarea.description }}</q-item-label>
                </q-card-section>
              </q-card>
            </div>
          </q-card>
          <br />
        </q-expansion-item>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { areasList } from "./areas";

export default {
  name: "PageAreaList",

  setup() {
    return {
      abreDlg: ref(false),
      areasList,
    };
  },
};
</script>

<style>
.area1 {
  background-color: #ee8031;
}

.area2 {
  background-color: #31942e;
}

.area3 {
  background-color: #3f85c1;
}

.area4 {
  background-color: #1da2a3;
}

.area5 {
  background-color: #9a56d1;
}
.area6 {
  background-color: #d3375a;
}

.bg-area1 {
  background-color: rgb(233, 164, 114);
}

.bg-area2 {
  background-color: green;
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
