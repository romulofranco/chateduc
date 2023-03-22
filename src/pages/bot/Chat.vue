<script>
/* eslint-disable */
import { defineComponent, ref, watch, nextTick, onMounted } from "vue";
import { CheckOne } from "@icon-park/vue-next";
import cryptoJS from "crypto-js";
import LoadingSnip from "src/components/LoadingSnip.vue";
import Copy from "src/components/Copy.vue";

export default defineComponent({
  name: "BotList",

  components: {
    LoadingSnip,
    Copy,
  },

  setup() {
    let apiKey = "";
    let isConfig = ref(true);
    let isTalking = ref(false);
    let messageContent = ref("");
    const chatListDom = ref();
    const decoder = new TextDecoder("utf-8");
    const roleAlias = { user: "ME", assistant: "ChatGPT", system: "System" };
    const messageList = ref([
      { role: "system", content: "" },
      { role: "assistant", content: "" },
    ]);

    onMounted(() => {
      if (getAPIKey()) {
        switchConfigStatus();
      }
    });

    const sendChatMessage = async (content = messageContent.value) => {
      try {
        isTalking.value = true;
        if (messageList.value.length === 2) {
          messageList.value.pop();
        }
        messageList.value.push({ role: "user", content });
        clearMessageContent();
        messageList.value.push({ role: "assistant", content: "" });

        const { body, status } = await chat(messageList.value, getAPIKey());
        if (body) {
          const reader = body.getReader();
          await readStream(reader, status);
        }
      } catch (error) {
        appendLastMessageContent(error);
      } finally {
        isTalking.value = false;
      }
    };

    const readStream = async (reader, status) => {
      const regex = /({.*?]})/g;
      const { done, value } = await reader.read();
      if (done) {
        reader.closed;
        return;
      }
      const decodeText = decoder.decode(value);
      const dataList = status === 200 ? decodeText.match(regex) : [decodeText];
      dataList?.forEach((v) => {
        const json = JSON.parse(v);
        console.log(json);
        const content =
          status === 200 ? json.choices[0].delta.content ?? "" : json.error.message;
        appendLastMessageContent(content);
      });
      await readStream(reader, status);
    };

    const appendLastMessageContent = (content) =>
      (messageList.value[messageList.value.length - 1].content += content);

    const sendOrSave = () => {
      if (!messageContent.value.length) return;
      if (isConfig.value) {
        if (saveAPIKey(messageContent.value.trim())) {
          switchConfigStatus();
        }
        clearMessageContent();
      } else {
        sendChatMessage();
      }
    };

    const clickConfig = () => {
      if (!isConfig.value) {
        messageContent.value = getAPIKey();
      } else {
        clearMessageContent();
      }
      switchConfigStatus();
    };

    const getSecretKey = () => "lianginx";

    const saveAPIKey = (apiKey) => {
      if (apiKey.slice(0, 3) !== "sk-" || apiKey.length !== 51) {
        alert("API Key 错误，请检查后重新输入！");
        return false;
      }
      const aesAPIKey = cryptoJS.AES.encrypt(apiKey, getSecretKey()).toString();
      localStorage.setItem("apiKey", aesAPIKey);
      return true;
    };

    const getAPIKey = () => {
      if (apiKey) return apiKey;
      const aesAPIKey = localStorage.getItem("apiKey") ?? "";
      apiKey = cryptoJS.AES.decrypt(aesAPIKey, getSecretKey()).toString(
        cryptoJS.enc.Utf8
      );
      return apiKey;
    };

    const switchConfigStatus = () => (isConfig.value = !isConfig.value);

    const clearMessageContent = () => (messageContent.value = "");

    const scrollToBottom = () => {
      if (!chatListDom.value) return;
      scrollTo(0, chatListDom.value.scrollHeight);
    };

    watch(messageList.value, () => nextTick(() => scrollToBottom()));

    const chat = async (messageList, apiKey) => {
      try {
        const result = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "post",
          // signal: AbortSignal.timeout(8000),
          // 开启后到达设定时间会中断流式输出
          headers: {
            "Content-Type": "applicatsrc/pages/bot/chat.vueion/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            stream: true,
            messages: messageList,
          }),
        });
        return result;
      } catch (error) {
        throw error;
      }
    };

    return {
      roleAlias,
      isConfig,
      isTalking,
      messageContent,
      chatListDom,
      messageList,
      sendChatMessage,
      scrollToBottom,
      clearMessageContent,
      switchConfigStatus,
      saveAPIKey,
      sendOrSave,
      clickConfig,
      chat,
      Copy,
      LoadingSnip,
      CheckOne,
    };
  },
});
</script>

<template>
  <q-page padding>
    <div class="row">
      <div class="">
        <div class="w-full items-baseline top-0 px-6 py-4 bg-gray-100">
          <div class="text-2xl font-bold">ChatGPT</div>
          <div>基于 OpenAI 的 ChatGPT 自然语言模型人工智能对话</div>
          <div @click="clickConfig()">设置</div>
        </div>

        <div class="flex-1 mx-2 mt-20 mb-2" ref="chatListDom">
          <div
            class="group flex flex-col px-4 py-3 hover:bg-slate-100 rounded-lg"
            v-for="item of messageList.filter((v) => v.role !== 'system')"
          >
            <div class="flex justify-between items-center mb-2">
              <div class="font-bold">{{ roleAlias[item.role] }}：</div>
              <Copy class="invisible group-hover:visible" :content="item.content" />
            </div>
            <div>
              <pre
                class="text-sm text-slate-600 whitespace-pre-wrap leading-relaxed"
                v-if="item.content"
                >{{ item.content.replace(/^\n\n/, "") }}</pre
              >
              <LoadingSnip v-else />
            </div>
          </div>
        </div>

        <div class="sticky bottom-0 w-full p-6 pb-8 bg-gray-100">
          <div class="-mt-2 mb-2 text-sm text-gray-500" v-if="isConfig">
            请输入 API Key：
          </div>
          <div class="flex">
            <input
              class="input"
              :type="this.isConfig ? 'password' : 'text'"
              :placeholder="isConfig ? 'sk-xxxxxxxxxx' : '请输入'"
              v-model="messageContent"
              @keydown.enter="isTalking || sendOrSave()"
            />
            <button class="btn" :disabled="isTalking" @click="sendOrSave()">
              {{ isConfig ? "保存" : "发送" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
pre {
  font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L",
    Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC",
    "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei",
    "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
}
</style>
