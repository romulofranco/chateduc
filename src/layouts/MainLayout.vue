<template>
  <q-layout view="lHh Lpr lff" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> ChatEduc </q-toolbar-title>

        <q-btn-dropdown flat color="white" icon="person">
          <q-list>
            <q-item clickable v-close-popup @click="handlerLogout">
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      elevated
      class="bg-white text-black"
    >
      <q-img
        class="absolute-top"
        src="https://as2.ftcdn.net/v2/jpg/03/16/92/61/1000_F_316926143_cVdnI6bJPbhlo1yZVTJk0R0sjBx4vVnO.jpg"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold text-white text-bold text-h6">Rômulo Franco</div>
          <div class="text-white text-bold text-h7">@romulo_franco</div>
        </div>
      </q-img>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item-label header class="text-h6 text-bold"> Menu </q-item-label>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
            class="text-bold"
          />

          <q-expansion-item
            :content-inset-level="0.5"
            icon="perm_identity"
            label="DigCompEdu"
            caption="Áreas e Níveis"
            class="text-bold"
          >
            <DigiCompEduLink
              v-for="link in digiCompEduLinks"
              :key="link.title"
              v-bind="link"
              class="text-bold"
            />
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

import EssentialLink from "components/EssentialLink.vue";
import DigiCompEduLink from "components/DigiCompEduLink.vue";
import userAuthUser from "../composables/UserAuthUser";
import useNotify from "src/composables/UseNotify";
import useDialog from "src/composables/UseDialog";

const mainMenuLinkList = [
  {
    title: "Dashboard",
    caption: "",
    icon: "mdi-home",
    routeName: "me",
  },
  {
    title: "Categorias",
    caption: "",
    icon: "mdi-shape-outline",
    routeName: "category",
  },
  {
    title: "Prompt",
    caption: "",
    icon: "mdi-frequently-asked-questions",
    routeName: "prompt",
  },
];

const digiCompEduLinkList = [
  {
    title: "Introdução",
    caption: "",
    icon: "mdi-information",
    routeName: "digcompedu-intro",
  },
  {
    title: "Áreas",
    caption: "",
    icon: "mdi-home",
    routeName: "area-list",
  },
  {
    title: "Níveis de Competência",
    caption: "",
    icon: "mdi-shape-outline",
    routeName: "level-list",
  },
  {
    title: "Autorreflexão individual",
    caption: "",
    icon: "mdi-frequently-asked-questions",
    routeName: "digcompedu-checkin",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    DigiCompEduLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    const { logout } = userAuthUser();
    const { notifyError, notifySuccess } = useNotify();
    const { dialogShow } = useDialog();

    const handlerLogout = async () => {
      dialogShow({
        tittle: "Sair",
        message: "Deseja realmente sair da aplicação?",
      })
        .onOk(async () => {
          try {
            await logout();
            notifySuccess("Bye bye! 😁");
            router.replace({
              name: "login",
            });
          } catch (error) {
            notifyError(error.message);
          }
          /** o replace elimina o histórico de rotas, diferente
           * do push, que adicionar na pilha de histórico
           */
        })
        .onCancel(async () => {
          notifySuccess("Ops, ia mas voltou! 😁");
        });
    };

    return {
      digiCompEduLinks: digiCompEduLinkList,
      essentialLinks: mainMenuLinkList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      handlerLogout,
    };
  },
});
</script>
