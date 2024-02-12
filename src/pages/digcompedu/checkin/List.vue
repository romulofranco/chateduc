<template>
  <q-page padding>
    <div>
      <div class="q-pa-md">
        <div class="row">
          <div class="col">
            <p class="text-h5 text-left">Autoavaliação individual</p>
          </div>
          <div class="col text-right">
            <q-btn
              label="Iniciar"
              class="col-12"
              color="primary"
              icon="mdi-plus"
              :to="{ name: 'digcompedu-checkin' }"
            />
          </div>
        </div>
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
      <q-card flat>
        <q-card-section>
          <q-item-label class="text-h6">Últimas avaliações</q-item-label>
        </q-card-section>
      </q-card>


      <div
        v-for="checkinItem in this.checkinList"
        :key="checkinItem.id"
        class="full-width"
      >

        <Resumo ref="resumoCheckin" :detail="true" :label="checkinItem.dataRealizacao" :checkin_id="checkinItem.id"
                :checkin_item="checkinItem" :key="checkinItem.id" />

      </div>

      <q-page-sticky class="mobile-only" position="bottom-right" :offset="[20, 20]">
        <q-btn fab icon="mdi-plus" color="accent" :to="{ name: 'form-category' }" />
      </q-page-sticky>
    </div>
  </q-page>
</template>

<script>
import Resumo from "src/pages/digcompedu/checkin/Resumo.vue";
import { defineComponent, ref, onMounted } from "vue";
import useApi from "src/composables/UseApi";
import { imgUrl, mainDesc } from "./checkin";
import moment from "moment";
import useNotify from "src/composables/UseNotify";


export default defineComponent({
  name: "PageCheckinList",
  components: {
    Resumo
  },
  data: function() {
    const { listSort } = useApi();
    const checkinList = ref([]);
    const { notifyError, notifySuccess } = useNotify();

    onMounted(() => {
      handleCheckinList();
    });

    const handleCheckinList = async () => {
      try {
        checkinList.value = await listSort("checkin");
        checkinList.value.forEach((check) => {
          check.dataRealizacao = formatDate(check.created_at);
          check.total_pontos = check.grade + "/192";
        });
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
      checkinList,
      abreDlg: ref(false),
      imgUrl,
      mainDesc,
      tab: ref("1")
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

