<template>
  <q-page class="flex flex-center">
    <div v-if="user">

    </div>

    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>

  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import userAuthUser from "../composables/UserAuthUser";
export default defineComponent({
  name: "AboutPage",
  setup() {
    const { user } = userAuthUser();
    return {
      stars: ref(4),
      user,
    };
  },
});
</script>
