<template>
  <q-page padding>
    <div class="row">
      <q-table title="Categorias" :rows="categories" :columns="columns" row-key="id" class="col-12" :loading="loading">
        <template v-slot:top>
          <span class="text-h6 text-black">
            Categorias
          </span>
          <q-space />
          <q-btn label=" Adicionar " color="primary" icon="mdi-plus" dense size="sm" />
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-x-sm">
            <q-btn icon="mdi-pencil-outline" dense color="info" size="sm">
              <q-tooltip>
                Editar
              </q-tooltip>
            </q-btn>
            <q-btn icon="mdi-delete-outline" dense color="negative" size="sm">
              <q-tooltip>
                Deletar
              </q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
const columns = [
  // { name: 'id', required: true, label: 'ID', align: 'right', field: row => row.name, format: val => `${val}`, sortable: true },
  { name: 'name', align: 'left', label: 'Categoria', field: 'name', sortable: true },
  { name: 'actions', label: 'Ações', field: 'actions', sortable: false }
]


import { defineComponent, ref, onMounted } from 'vue'
import useApi from 'src/composables/UseApi'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  name: "PageCategoryList",

  setup () {
    const categories = ref([])
    const loading = ref(true)
    const { list } = useApi()
    const { notifyError, notifySuccess } = useNotify()

    const handleListCategories = async () => {
      try {
        loading.value = true
        categories.value = await list("category")
        loading.value = false
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
      loading
    }
  }
})
</script>
