<template>
  <div class="justify-center items-center col-lg-12 ">
    <q-item-label class="text-h5 text-bold text-weight-light text-white">
      <q-icon name="apps" color="white" size="1.2em"></q-icon>
      Funcionalidades da Plataforma
      <q-separator class="bg-primary shadow-4" style="height:2px;max-width: 400px;margin-top: 5px" />
    </q-item-label>
  </div>
  <div class="row " style="margin-top: 15px">
    <div class="col-12 col-lg-4" :key="index" v-for="(d, index) in data">
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
