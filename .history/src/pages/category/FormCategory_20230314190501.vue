<template>
  <q-page padding>
    <q-form class="row text-align-left" @submit.prevent="handlerLogin" ref="myform">
      <div class="q-pa-sm ">
        <p class="col-12 text-h5 text-left">Adicionar categoria</p>
      </div>

      <div class="q-pa-md q-gutter-sm">
        <q-btn label="Salvar" color="primary" class="full-width" rounded type="submit" />
        <q-btn label="Cancelar" color="primary" class="full-width" rounded flat :to="{ name: 'category' }" />
      </div>
    </q-form>
  </q-page>
</template>


