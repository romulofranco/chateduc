<template>
  <q-page class="bg-white-1 row justify-center items-center">
    <q-form class="square-card row justify-center" @submit.prevent="handlerLogin" ref="myform">
      <q-card class="q-pa-sm shadow-2">
        <q-card-section>
          <p class="col-12 text-h5 text-left">Adicionar categoria</p>
        </q-card-section>

        <q-card-section>
        </q-card-section>
      </q-card>




      <q-btn label="Salvar" color="primary" class="full-width" rounded type="submit" />
      <q-btn label="Cancelar" color="primary" class="full-width" rounded flat :to="{ name: 'category' }" />
    </q-form>
  </q-page>
</template>


