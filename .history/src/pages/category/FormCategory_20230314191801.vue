<template>
  <q-page padding>
    <q-form class="row text-align-left" @submit.prevent="handlerLogin" ref="myform">
      <q-card class="q-pa-sm shadow-0">
        <q-card-section>
          <p class="text-h5 text-left">Adicionar categoria</p>
          <q-separator color="orange" inset />
        </q-card-section>

        <q-space />
        <q-card-section>
          <div class="col-md-2 col-sm-6 col-xs-10 q-gutter-y-md">
            <q-btn label="Salvar" color="primary" rounded type="submit" />
            <q-btn label="Cancelar" color="primary" rounded flat :to="{ name: 'category' }" />
          </div>

        </q-card-section>

      </q-card>

      <br />


    </q-form>
  </q-page>
</template>


