<template>
  <q-page class="flex flex-center">
    <Resumo ref="resumoCheckin" :detail="false" :label="checkinItem.dataRealizacao"
            :checkin_id="84"
            :checkin_item="checkinItem" :key="checkinItem.id" />

  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import userAuthUser from "../composables/UserAuthUser";
import Resumo from "pages/digcompedu/checkin/Resumo.vue";
export default defineComponent({
  name: "IndexPage",
  components: {Resumo},
  setup() {
    const { user } = userAuthUser();
    return {
      stars: ref(4),
      user,
    };
  },
});
</script>
