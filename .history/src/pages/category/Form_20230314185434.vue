<template>
  <q-page>
    <div class="row">
      <div class="col-12 text-center">
        <p class="text-h6">
          Adicionar categoria
        </p>
      </div>
    </div>
    <q-form class="col-md-7 col-xs-12 col-sm-12" @submit.prevent="">
      <q-input label="Categoria" v-model="form.name"></q-input>
    </q-form>
  </q-page>
</template>
<script>
</script>

