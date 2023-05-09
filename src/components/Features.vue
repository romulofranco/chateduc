<template>

  <br />
  <div class="row justify-center">
    <q-icon name="stars" size="3em" color="secondary" />
    <q-item-label class="text-h4 text-bold text-weight-light" style="margin-left: 20px"> Funcionalidades da Plataforma
    </q-item-label>
  </div>
  <br />

  <div class="row items-start ">
    <div class="flex-break col-12 col-lg-4 q-pa-sm" :key="index" v-for="(d, index) in data">
      <Feature :data="d" />
    </div>
  </div>

</template>

<script>
import Feature from "../components/Feature";

export default {
  props: {
    data: {
      type: Array
    }
  },
  components: {
    Feature
  }
};
</script>

<style></style>
