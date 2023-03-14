<template>
  <q-page padding>
    <q-form class="row text-align-left" @submit.prevent="handlerLogin" ref="myform">
      <q-card class="q-pa-sm shadow-0">
        <q-card-section>
          <p class="col-12 text-h5 text-left">Adicionar categoria</p>
        </q-card-section>

        <q-card-section>
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
            <q-btn align="left" label="Salvar" color="primary" rounded type="submit" />
            <q-btn align="left" label="Cancelar" color="primary" class="full-width" rounded flat
              :to="{ name: 'category' }" />


        </q-card-section>

      </q-card>

      <br />


    </q-form>
  </q-page>
</template>


