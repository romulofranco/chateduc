<template>
  <q-page padding>
    <q-form class="row text-align-left" @submit.prevent="handlerLogin" ref="myform">
      <q-card class="q-pa-sm shadow-0">
        <q-card-section>
          <p class="col-12 text-h5 text-left">Adicionar categoria</p>
        </q-card-section>

      </q-card>

      <br />

      <div class="q-pa-md q-gutter-sm row">
        <q-btn align="left" label="Salvar" color="primary" rounded type="submit" />
        <q-btn align="left" label="Cancelar" color="primary" class="full-width" rounded flat :to="{ name: 'category' }" />
      </div>
    </q-form>
  </q-page>
</template>


