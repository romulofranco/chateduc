<script>
import { CheckOne, CloseOne, Theme } from "@icon-park/vue-next";
import { defineComponent, ref, onMounted } from "vue";

import LoadingSnip from "src/components/LoadingSnip.vue";

export default defineComponent({
  name: "CopyList",

  components: {
    LoadingSnip,
    CheckOne,
    CloseOne,
  },

  setup() {
    const porps = { content: "" };
    let thema = Theme;

    const btnConfig = ({ fill: String, theme: thema } = {
      fill: "#999",
      theme: "outline",
    });
    const btnTips = {
      copy: "copy",
      loading: "",
      success: "sucess",
      error: "error！",
    };
    const btnStatus = ref("copy");

    const copyToClipboard = (content = porps.content) => {
      btnStatus.value = "loading";
      navigator.clipboard
        .writeText(content)
        .then(() => setTimeout(() => (btnStatus.value = "success"), 150))
        .catch(() => (btnStatus.value = "error"))
        .finally(() => setTimeout(() => (btnStatus.value = "copy"), 1500));
    };

    return {
      btnTips,
      btnStatus,
      copyToClipboard,
      btnConfig,
      LoadingSnip,
      CheckOne,
      CloseOne,
      Theme,
    };
  },
});
</script>

<template>
  <div class="flex items-center cursor-pointer" @click="copyToClipboard()">
    <Copy
      v-show="btnStatus === 'copy'"
      :theme="btnConfig.theme"
      :size="btnConfig.size"
      :fill="btnConfig.fill"
    />
    <LoadingSnip
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
