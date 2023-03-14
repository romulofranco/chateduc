<template>
  <q-page padding>
    <div class="row">
      <q-table title="Categorias" :rows="rows" :columns="columns" row-key="name" class="col-12">

      </q-table>
    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
]

const rows = [
  {
    id: '123',
    name: 'Tenis'
  },
  {
    id: '12',
    name: 'Frozen Yogurt'
  }
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
