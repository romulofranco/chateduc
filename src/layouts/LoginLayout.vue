<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="bg-transparent">
      <q-toolbar class="row bg-secondary">
        <q-avatar>
          <q-icon name="school" size="2.1em" class="text-white  " />
        </q-avatar>
        <q-toolbar-title class="text-white text-h4 text-bold" shrink>
          <span class="text-h4">Chat</span><span class="text-bold">Educ</span>
        </q-toolbar-title>
        <q-space />
        <div>
          <q-btn href="#home" flat class="text-white q-mr-sm">
            Home
          </q-btn>

          <q-btn href="#about" flat class="text-white q-mr-sm">
            Sobre
          </q-btn>

          <q-btn href="#contato" flat class="text-white q-mr-sm">
            Contato
          </q-btn>
          <q-btn class="text-white q-mr-sm" flat @click="
            this.$router.push({
              name: 'login',
            })">
            Entrar
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />

      <!-- place QPageScroller at end of page -->
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import Footer from "../components/Footer";

export default defineComponent({
  name: "LoginLayout",
  setup() {
    return {};
  },
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  },
  components: {
    Footer
  }

});
</script>
<style scoped>
.test1 {
  background: linear-gradient(-45deg, #ee7752, #e7a83c, #441d64, #a4c6ee);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.q-page-container {
  padding-top: 0 !important;
}

.scroll {
  overflow: hidden;
}
</style>
