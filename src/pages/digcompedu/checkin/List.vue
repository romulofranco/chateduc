<template>
  <q-page padding>
    <div class="row q-pa-md">
      <div>
        <p class="col-12 text-h5 text-left">Autoreflexão individual</p>
      </div>
      <q-separator color="primary" class="full-width" />
      <br />
      <q-card class="full-width text-center" flat>
        <q-img src="checkin/checkin.png" height="300px" width="400px"> </q-img>
      </q-card>

      <q-separator color="primary" class="full-width" />
      <div>
        <p>{{ this.mainText.description }}</p>
      </div>

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

              <q-space />

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

            <q-card class="justify-items text-left shadow-5">
              <q-item-section class="mobile-only">
                <q-item-label
                  >{{ checkinItem.prof_result }}
                  <q-badge
                    label="Resultado"
                    v-if="checkinItem.prof_result"
                    color="green"
                  />
                </q-item-label>
              </q-item-section>
              <br />

              <q-card-section horizontal>
                <q-item-section class="mobile-only">
                  <q-item-label
                    >{{ checkinItem.prof_expected }}
                    <q-badge
                      v-if="checkinItem.prof_expected"
                      label="Esperado"
                      color="orange"
                    />
                  </q-item-label>
                </q-item-section>
                <br />
                <q-separator />

                <q-card-section>
                  <q-item-label class="text-bold text-subtitle"
                    >Principal característica
                  </q-item-label>

                  <q-item-label class="text-italic" :inset-level="2">
                    {{ checkinItem.main_statement }}</q-item-label
                  >
                  <br />
                  <q-item-label class="text-bold text-subtitle"
                    >Declaração de proficiência</q-item-label
                  >
                  <q-item-label class="text-italic">
                    {{ checkinItem.proficient_statement }}</q-item-label
                  >
                </q-card-section>
              </q-card-section>
            </q-card>

            <br />
          </q-expansion-item>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { checkinList, mainText } from "./checkin";
import moment from "moment";

export default {
  name: "PageCheckinList",

  methods: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY HH:mm");
      }
    },
  },

  setup() {
    console.log(mainText.description);
    return {
      abreDlg: ref(false),
      checkinList,
      mainText,
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
