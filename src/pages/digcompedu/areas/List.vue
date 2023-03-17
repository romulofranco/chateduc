<template>
  <q-page padding>
    <div class="row q-pa-md">
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
        </q-expansion-item>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { areasList } from "./areas";

export default defineComponent({
  name: "PageAreaList",

  setup() {
    const table = "category";
    const categories = ref([]);
    const loading = ref(true);
    const router = useRouter();
    const $q = useQuasar();
    const { list, remove } = useApi();
    const { notifyError, notifySuccess } = useNotify();

    const handleListCategories = async () => {
      try {
        loading.value = true;
        categories.value = await list(table);
        loading.value = false;
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleEdit = (category) => {
      router.push({ name: "form-category", params: { id: category.id } });
    };

    const handleRemove = async (category) => {
      try {
        $q.dialog({
          title: "Excluir categoria",
          message: `Deseja excluir a categoria ${category.name} ?`,
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          await remove(table, category.id);
          notifySuccess("Categoria excluída!");
          handleListCategories();
        });
      } catch (error) {
        notifyError(error.message);
      }
    };

    onMounted(() => {
      handleListCategories();
    });

    return {
      areasList,
      categories,
      loading,
      handleEdit,
      handleRemove,
    };
  },
});
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
