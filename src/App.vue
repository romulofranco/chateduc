<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import "./css/tailwind.css";

export default defineComponent({
  name: "App",
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
