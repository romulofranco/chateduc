<script>
import { Copy, Loading, CheckOne, CloseOne } from "@icon-park/vue-next";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CopyComponent",
  props: ["content"],

  components: {
    Copy,
    Loading,
    CheckOne,
    CloseOne
  },

  data: function() {
    const btnConfig = ref({
      size: 14,
      fill: "#999",
      theme: "outline"
    });
    const btnTips = {
      copy: "",
      loading: "",
      success: "Copiado！",
      error: "Copia falhou！"
    };
    const btnStatus = ref("copy");

    const copyToClipboard = (content = this.content) => {
      btnStatus.value = "loading";
      navigator.clipboard
        .writeText(content)
        .then(() => setTimeout(() => (btnStatus.value = "success"), 150))
        .catch(() => (btnStatus.value = "error"))
        .finally(() => setTimeout(() => (btnStatus.value = "copy"), 1500));
    };

    return {
      copyToClipboard,
      btnTips,
      btnConfig,
      btnStatus
    };
  }
});
</script>

<template>
  <div class="flex items-center cursor-pointer" @click="copyToClipboard()">
    <copy
      v-show="btnStatus === 'copy'"
      :theme="btnConfig.theme"
      :size="btnConfig.size"
      :fill="btnConfig.fill"
    />
    <loading
      class="rotate"
      v-show="btnStatus === 'loading'"
      :theme="btnConfig.theme"
      :size="btnConfig.size"
      :fill="btnConfig.fill"
    />
    <check-one
      v-show="btnStatus === 'success'"
      :theme="btnConfig.theme"
      :size="btnConfig.size"
      :fill="btnConfig.fill"
    />
    <close-one
      v-show="btnStatus === 'error'"
      :theme="btnConfig.theme"
      :size="btnConfig.size"
      :fill="btnConfig.fill"
    />
    <span class="text-xs ml-0.5 text-gray-500 leading-none">{{
        btnTips[btnStatus]
      }}</span>
  </div>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: spin 2s linear infinite;
}
</style>
