<template>
  <q-page padding>
    <div class="row q-pa-md">
      <div>
        <p class="col-12 text-h5 text-left">Autoreflexão individual</p>
      </div>
      <q-separator color="primary" class="full-width" />
      <br />

      <q-card class="text-center" flat>
        <q-card-section>
          <q-img :src="this.imgUrl" style="max-width: 380px; max-height: 390px" />
        </q-card-section>
        <q-card-section>
          <div class="text-justify">
            <p>
              {{ this.mainDesc }}
            </p>
          </div>
        </q-card-section>
      </q-card>

      <p class="text-bold text-h6">Últimas avaliações</p>
      <q-separator color="primary" class="full-width" />
      <div
        v-for="checkinItem in this.checkinList"
        :key="checkinItem.id"
        class="full-width"
      >
        <q-card class="full-width" flat>
          <q-expansion-item
            expand-separator
            group="accordeon-group-1"
            header-class="bg-checkin"
            icon="mdi-calendar-check"
            class="text-bold text-subtitle1 text-weight-medium shadow-1"
          >
            <template v-slot:header>
              <q-item-section avatar>
                <q-img :src="checkinItem.img_url" />
              </q-item-section>

              <q-item-section>
                {{ formatDate(checkinItem.checkin_date) }}
              </q-item-section>

              <q-item-section class="desktop-only">
                <q-item-label
                  >{{ checkinItem.prof_result }}
                  <q-badge
                    label="Resultado"
                    v-if="checkinItem.prof_result"
                    color="green"
                  />
                </q-item-label>
              </q-item-section>

              <q-item-section class="desktop-only">
                <q-item-label
                  >{{ checkinItem.prof_expected }}
                  <q-badge
                    v-if="checkinItem.prof_expected"
                    label="Esperado"
                    color="orange"
                  />
                </q-item-label>
              </q-item-section>

              <q-item-section side>
                <div class="row items-center">
                  <q-icon name="star" color="red" size="18px" />
                  <q-icon name="star" color="red" size="18px" />
                </div>
              </q-item-section>
            </template>

            <q-card flat>
              <q-card-section>
                <q-card-section>
                  <q-card class="justify-items text-left shadow-5" flat>
                    <q-card-section>
                      <q-card-section>
                        <q-card-section class="mobile-only">
                          <q-item-label
                            >{{ checkinItem.prof_result }}
                            <q-badge
                              label="Resultado"
                              v-if="checkinItem.prof_result"
                              color="green"
                            />
                          </q-item-label>
                        </q-card-section>
                        <q-card-section class="mobile-only">
                          <q-item-label
                            >{{ checkinItem.prof_expected }}
                            <q-badge
                              v-if="checkinItem.prof_expected"
                              label="Esperado"
                              color="orange"
                            />
                          </q-item-label>
                        </q-card-section>
                      </q-card-section>
                    </q-card-section>
                    <q-card-section>
                      <q-card-section>
                        <q-item-label class="text-bold text-subtitle"
                          >Principal característica
                        </q-item-label>

                        <q-item-label class="text-italic" :inset-level="2">
                          {{ checkinItem.main_statement }}</q-item-label
                        >
                      </q-card-section>
                      <q-card-section>
                        <q-item-label class="text-bold text-subtitle"
                          >Declaração de proficiência</q-item-label
                        >
                        <q-item-label class="text-italic">
                          {{ checkinItem.proficient_statement }}</q-item-label
                        >
                      </q-card-section>
                    </q-card-section>
                  </q-card>
                </q-card-section>
                <p class="text-center text-bold text-subtitle">Notas por área</p>
                <q-separator />
                <q-tabs v-model="tab">
                  <div v-for="area in checkinItem.areas" :key="area.id">
                    <q-tab :name="area.id" :label="area.name" :class="'text-' + area.cor">
                      <div class="q-mt-md text-center text-black">
                        <q-knob
                          :step="25"
                          v-model="area.nota"
                          show-value
                          size="110px"
                          :thickness="0.35"
                          :color="area.cor"
                          :track-color="area.subcor"
                          :class="'text-' + area.cor"
                          readonly
                        />
                      </div>
                    </q-tab>
                  </div>
                </q-tabs>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { checkinList, imgUrl, mainDesc } from "./checkin";
import moment from "moment";

export default {
  name: "PageCheckinList",

  data: function () {
    return {};
  },

  methods: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY HH:mm");
      }
    },
  },

  setup() {
    return {
      abreDlg: ref(false),
      checkinList,
      imgUrl,
      mainDesc,
      tab: ref("1"),
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

.bg-checkin {
  background-color: antiquewhite;
}
</style>
