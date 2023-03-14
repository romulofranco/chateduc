<template>
  <q-page padding>
    <div class="row">
      <q-table title="Categorias" :rows="rows" :columns="columns" row-key="id" class="col-12">
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-x-xm">
            <q-btn icon="mdi-pencil-outline" dense color="info"></q-btn>
            <q-btn icon="mdi-delete-outline" dense color="negative"></q-btn>
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

import { defineComponent } from 'vue'

export default defineComponent({
  name: "PageCategoryList",

  setup () {
    return {
      columns,
      rows
    }
  }
})
</script>
