<template>
  <q-page padding>
    <q-dialog v-model="abreDlg" :maximized="true">
      <q-card flat>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h5 text-bold">Níveis de Competências</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-img
            src="areas/digcompedu_level.jpg"
            fit="cover"
            style="height: 100%; width: 100%"
          />
        </q-card-section>
        <q-card-section inset="2">
          <div class="absolute-top text-center">
            <div class="text-body1">Modelo de progressão DigCompEdu</div>
            <div class="text-body1">
              Fonte: Lucas, M., & Moreira, A. (2018). DigCompEdu: quadro europeu de
              competência digital para educadores. Aveiro: UA
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="row q-pa-md">
      <div>
        <p class="col-12 text-h5 text-left">Níveis de Competências do DigCompEdu</p>
      </div>

      <q-separator color="primary" class="full-width" />
      <br />
      <q-card class="full-width" flat>
        <q-card-sectio class="text-body">
          <div>
            <p>
              DigCompEdu distingue seis etapas ou níveis ao longo dos quais a competência
              digital dos educadores normalmente se desenvolve. Para cada fase, é
              fornecido um descritor de função que reflete o foco particular da utilização
              da tecnologia digital típica da fase de competência. Esses descritores de
              papel também se relacionam com os pontos fortes e os papéis relativos de um
              educador dentro de uma comunidade profissional.
            </p>
          </div>
        </q-card-sectio>

        <q-card-section>
          <q-img src="areas/digcompedu_level.jpg" fit="fill" @click="abreDlg = true" />
        </q-card-section>
        <q-card-section>
          <div class="absolute-top text-right">
            <div class="text-subtitle">Modelo de progressão DigCompEdu</div>
            <div class="text-caption">
              Fonte: Lucas, M., & Moreira, A. (2018). DigCompEdu: quadro europeu de
              competência digital para educadores. Aveiro: UA
            </div>
          </div>
        </q-card-section>
      </q-card>

      <div v-for="level in this.levelList" :key="level.id" class="full-width">
        <q-card class="full-width" flat>
          <q-expansion-item
            expand-separator
            group="accordeon-group-1"
            header-class="bg-level"
            class="text-bold text-subtitle1 text-weight-medium shadow-1"
            :label="level.name"
          >
            <q-card class="justify-items text-center shadow-5">
              <q-item>
                <q-item-section avatar>
                  <q-avatar2>
                    <img :src="level.img_url" />
                  </q-avatar2>
                </q-item-section>

                <q-item-section class="text-left">
                  <q-item-label class="text-h6">{{ level.name }}</q-item-label>
                  <q-item-label caption> {{ level.subdesc }} </q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />
              <q-card-section class="text-justify">
                {{ level.description }}
              </q-card-section>
              <br />
              <q-item-section class="text-left">
                <q-item-label class="text-h6"
                  >Domínio de uso, aplicação prática ou conhecimento de tecnologias
                  digitais por cada área</q-item-label
                >
              </q-item-section>
              <q-separator class="bg-level full-width" />

              <br />
              <div
                v-for="area in level.areas"
                :key="area.id"
                class="text-justify no-wrap"
              >
                <q-card>
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar :color="area.cor" class="text-bold" size="32px">
                        <q-item-label>{{ area.id }}</q-item-label>
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label class="text-bold text-h6">{{
                        area.name
                      }}</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-card-section>
                    <q-item-label class="text-bold text-subtitle"
                      >Principal característica
                    </q-item-label>

                    <q-item-label class="text-italic" :inset-level="2">
                      {{ area.main_statement }}</q-item-label
                    >
                    <br />
                    <q-item-label class="text-bold text-subtitle"
                      >Declaração de proficiência</q-item-label
                    >
                    <q-item-label class="text-italic">
                      {{ area.proficient_statement }}</q-item-label
                    >
                  </q-card-section>
                </q-card>
              </div>
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
import { levelList } from "./levels";

export default {
  name: "PageAreaList",

  setup() {
    return {
      abreDlg: ref(false),
      levelList,
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

.bg-level {
  background-color: #bce6e9;
}
</style>
