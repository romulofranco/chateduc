<template>
  <body style="overflow: hidden;">
  <q-layout view="lHh Lpr lff" class="shadow-2 rounded-borders">
    <div class="test1" style="background-image: url('teachers8.png'); ">
      <q-header elevated reveal class="bg-transparent">
        <q-toolbar class="bg-secondary">
          <q-avatar>
            <q-icon name="school" size="2.1em" class="text-white  " />
          </q-avatar>
          <q-toolbar-title class="text-white text-h4 text-bold" shrink>
            <span class="text-h4">Chat</span><span class="text-bold">Educ</span>
          </q-toolbar-title>
          <q-space />
          <div>
            <q-btn to="login" icon="login" flat class="text-white align-left" size="20px" />
            <q-btn icon="menu" flat class="text-white align-left" @click="toggleLeftDrawer" size="20px" />

          </div>
        </q-toolbar>
      </q-header>


      <q-drawer
        mini-to-overlay
        behavior="mobile"
        side="right"
        v-model="drawerOpen"
        show-if-above
        elevated
        borderless
        class="shadow-2"
        style="background-image: url('menu.png');"
      >
        <q-scroll-area
          style="
          height: calc(100% - 150px);
          margin-top: 130px;
          border-right: 1px solid #ddd;"
        >
          <q-list padding>
            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
              class="text-white text-weight-light text-h5"
            />
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>


      <Footer class="bg-secondary" />
    </div>
  </q-layout>
  </body>
</template>

<script>
import { defineComponent, ref } from "vue";
import Footer from "../components/Footer";
import EssentialLink from "components/EssentialLink.vue";

const landingPageMenuLinkList = [
  {
    title: "Home",
    caption: "",
    icon: "home",
    routeName: "home"
  },
  {
    title: "Sobre a plataforma",
    caption: "",
    icon: "web_stories",
    routeName: "about"
  },
  {
    title: "Funcionalidades",
    caption: "",
    icon: "apps",
    routeName: "me"
  },
  {
    title: "Contato",
    caption: "",
    icon: "contact_page",
    routeName: "prompt"
  },
  {
    title: "Entrar",
    caption: "",
    icon: "login",
    routeName: "login"
  },
  {
    title: "Registrar",
    caption: "",
    icon: "how_to_reg",
    routeName: "register"
  }

];

export default defineComponent({
  name: "LoginLayout",
  setup() {
    const drawerOpen = ref(false);
    return {
      drawerOpen: drawerOpen,
      essentialLinks: landingPageMenuLinkList,
      toggleLeftDrawer() {
        drawerOpen.value = !drawerOpen.value;
      }
    };
  },

  components: {
    EssentialLink,
    Footer
  }

});
</script>
<style scoped>
.test1 {
  background-size: 95% 110%;
  background-repeat: repeat-x;
  background-attachment: fixed;
  animation: gradient 50s alternate backwards;
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
