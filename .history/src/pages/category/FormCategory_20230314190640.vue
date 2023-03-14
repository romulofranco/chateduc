<template>
  <q-page padding>
    <q-form class="row text-align-left" @submit.prevent="handlerLogin" ref="myform">
      <div class="q-pa-sm ">
        <p class="col-12 text-h5 text-left">Adicionar categoria</p>
      </div>

      <br />

      <div class="q-pa-md q-gutter-sm">
        <q-btn align="left" label="Salvar" color="primary" rounded type="submit" />
        <q-btn label="Cancelar" color="primary" class="full-width" rounded flat :to="{ name: 'category' }" />
        <q-btn label="Cancelar" color="primary" class="full-width" rounded flat :to="{ name: 'category' }" />
      </div>
    </q-form>
  </q-page>
</template>


