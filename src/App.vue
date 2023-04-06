<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";


export default defineComponent({
  name: "App",
  setuo() {
    const app = createApp(App);
    app.use(VueApexCharts);
    return { app };
  }
});
</script>

<style lang="scss">
.q-card {
  margin: 0.2rem !important;
  min-width: 420px;
}

@media (max-width: 600px) {
  .q-card {
    margin: 0.2rem !important;
    min-width: 300px;
  }
}

* {
  transition: all 0.3s ease-in-out;
  scroll-behavior: smooth;
}
</style>
