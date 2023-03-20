<template>
  <q-page padding>
    <div class="row">
      <q-table
        title="Prompts"
        :rows="prompts"
        :columns="columnsPrompt"
        row-key="id"
        class="col-12"
        :loading="loading"
      >
        <template v-slot:top>
          <span class="text-h6 text-black"> Prompts para ChatGPT </span>
          <q-space />
          <q-btn
            class="desktop-only"
            label="Adicionar"
            color="primary"
            icon="mdi-plus"
            :to="{ name: 'form-prompt' }"
          />
        </template>
        <template v-slot:body-cell-img_url="props">
          <q-td :props="props">
            <q-avatar>
              <img :src="props.row.img_url" :alt="props.row.name" />
            </q-avatar>
          </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-x-sm">
            <q-btn
              icon="mdi-pencil-outline"
              dense
              color="info"
              size="sm"
              @click="handleEdit(props.row)"
            >
              <q-tooltip> Editar </q-tooltip>
            </q-btn>
            <q-btn
              icon="mdi-delete-outline"
              dense
              color="negative"
              size="sm"
              @click="handleRemove(props.row)"
            >
              <q-tooltip> Deletar </q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>

    <q-page-sticky class="mobile-only" position="bottom-right" :offset="[20, 20]">
      <q-btn fab icon="mdi-plus" color="accent" :to="{ name: 'form-prompt' }" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import useApi from "src/composables/UseApi";
import useNotify from "src/composables/UseNotify";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { columns } from "./table";

export default defineComponent({
  name: "PageCategoryList",

  setup() {
    const table = "prompt";
    const prompts = ref([]);
    const loading = ref(true);
    const router = useRouter();
    const $q = useQuasar();
    const { list, remove } = useApi();
    const { notifyError, notifySuccess } = useNotify();

    const handleList = async () => {
      try {
        loading.value = true;
        prompts.value = await list(table);
        loading.value = false;
      } catch (error) {
        notifyError(error.message);
      }
    };

    const handleEdit = (prompt) => {
      router.push({ name: "form-prompt", params: { id: prompt.id } });
    };

    const handleRemove = async (prompt) => {
      try {
        $q.dialog({
          title: "Excluir Prompt",
          message: `Deseja excluir o Prompt ${prompt.name} ?`,
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          await remove(table, prompt.id);
          notifySuccess("Prompt excluído!");
          handleListCategories();
        });
      } catch (error) {
        notifyError(error.message);
      }
    };

    onMounted(() => {
      handleList();
    });

    return {
      columns,
      prompts,
      loading,
      handleEdit,
      handleRemove,
    };
  },
});
</script>
