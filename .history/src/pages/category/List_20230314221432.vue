<template>
  <q-page padding>
    <div class="row">
      <q-table title="Categorias" :rows="categories" :columns="columns" row-key="id" class="col-12" :loading="loading">
        <template v-slot:top>
          <span class="text-h6 text-black">
            Categorias
          </span>
          <q-space />
          <q-btn v-if="$q.platform.is.desktop" label="Adicionar" color="primary" icon="mdi-plus"
            :to="{ name: 'form-category' }" />
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-x-sm">
            <q-btn icon="mdi-pencil-outline" dense color="info" size="sm" @click="handleEdit(props.row)">
              <q-tooltip>
                Editar
              </q-tooltip>
            </q-btn>
            <q-btn icon="mdi-delete-outline" dense color="negative" size="sm" @click="handleRemove(props.row)">
              <q-tooltip>
                Deletar
              </q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>

    <q-page-sticky v-if="$q.platform.is.mobile" position="bottom-right" :offset="[20, 20]">
      <q-btn fab icon="mdi-plus" color="accent" :to="{ name: 'form-category' }" />
    </q-page-sticky>
  </q-page>
</template>

<script>
const columns = [
  // { name: 'id', required: true, label: 'ID', align: 'right', field: row => row.name, format: val => `${val}`, sortable: true },
  { name: 'name', align: 'left', label: 'Categoria', field: 'name', sortable: true },
  { name: 'actions', label: '', field: 'actions', sortable: false }
]

import { defineComponent, ref, onMounted } from 'vue'
import useApi from 'src/composables/UseApi'
import useNotify from 'src/composables/UseNotify'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: "PageCategoryList",

  setup () {
    const table = 'category'
    const categories = ref([])
    const loading = ref(true)
    const router = useRouter()
    const $q = useQuasar()
    const { list, remove } = useApi()
    const { notifyError, notifySuccess } = useNotify()

    const handleListCategories = async () => {
      try {
        loading.value = true
        categories.value = await list(table)
        loading.value = false
      } catch (error) {
        notifyError(error.message)
      }
    }

    const handleEdit = (category) => {
      router.push({ name: 'form-category', params: { id: category.id } })
    }

    const handleRemove = async (category) => {
      try {
        $q.dialog({
          title: 'Excluir categoria',
          message: `Deseja excluir a categoria ${category.name} ?`,
          cancel: true,
          persistent: true
        }).onOk(async () => {
          await remove(table, category.id)
          notifySuccess("Categoria excluída!")
          handleListCategories()
        })
      } catch (error) {
        notifyError(error.message)
      }
    }

    onMounted(() => {
      handleListCategories()
    })

    return {
      columns,
      categories,
      loading,
      handleEdit,
      handleRemove
    }
  }
})
</script>
