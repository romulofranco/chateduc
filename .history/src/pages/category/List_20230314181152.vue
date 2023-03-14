<template>
  <q-page padding>
    <div class="row">
      <q-table title="Categorias" :rows="rows" :columns="columns" row-key="id" class="col-12">
        <template v-slot:top>
          <span class="text-h6 text-black">
            Categorias
          </span>
          <q-space />
          <q-btn label="Adicionar" color="primary" />
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
  { name: 'Categoria', align: 'left', label: 'Category', field: 'name', sortable: true },
  { name: 'actions', label: 'Ações', field: 'actions', sortable: true }
]

const rows = [
  { id: '123', name: 'Tenis' },
  { id: '12', name: 'Frozen Yogurt' }
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "PageCategoryList",

  setup () {
    const categories = ref([])

    const handleListCategories = async () => {

    }

    return {
      columns,
      rows,
      categories
    }
  }
})
</script>
