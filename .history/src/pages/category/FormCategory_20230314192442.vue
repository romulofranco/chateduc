<template>
  <q-page padding>
    <q-form class="row text-align-left" @submit.prevent="handlerLogin" ref="myform">
      <q-card round flat class="my-card">
        <q-card-section>
          <p class="col-1 text-h5 text-left">Adicionar categoria</p>
          <q-separator color="primary" />
        </q-card-section>

        <q-space />
        <q-card-actions>
          <div class="col-md-2 col-sm-6 col-xs-10 q-gutter-y-md">
            <q-btn label="Salvar" color="primary" outlined type="submit" />
            <q-btn label="Cancelar" color="primary" outlined flat :to="{ name: 'category' }" />
          </div>

        </q-card-actions>

      </q-card>

      <br />


    </q-form>
  </q-page>
</template>


