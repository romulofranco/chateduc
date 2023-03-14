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
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
  }
]

import { DefineComponent } from 'vue'

export default defineComponent({
  name: "PageCategoryList",

  setup() {
    return {
      columns,
      rows
    }
  }
})
</script>
