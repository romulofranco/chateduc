<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="school" size="1.2em" @click="
            this.$router.push({
              name: 'login',
            })
          " class="cursor-pointer" />
          ChatEduc
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginLayout",

  components: {},

  setup () {
    return {};
  },
});
</script>
