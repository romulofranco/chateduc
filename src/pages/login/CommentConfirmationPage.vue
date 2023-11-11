<template>
  <q-page padding>
    <p class="text-body1">
      <strong>{{ $route.query.name }}</strong
      >, obrigado pelo seu contato, retornaremos em breve! ❤️
    </p>

    <div class="row">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-btn label="Voltar" color="primary" :to="{ name: 'home' }" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmailConfirmationPage",
});
</script>
