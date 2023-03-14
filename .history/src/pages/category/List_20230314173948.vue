<template>
  <q-page padding>
    <div class="row">
      <q-table title="Categorias" :rows="rows" :columns="columns" row-key="id" class="col-12">

      </q-table>
    </div>
  </q-page>
</template>

<script>
const columns = [
  { name: 'id', required: true, label: 'ID', align: 'right', field: row => row.name, format: val => `${val}`, sortable: true },
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
