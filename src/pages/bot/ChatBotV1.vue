<template>
  <q-page padding>
    <div class="row q-pa-md">
      <div>
        <p class="col-12 text-h5 text-left">Assistente de IA</p>
      </div>
      <q-separator color="primary" class="full-width" />
      <br />

      <div class="flex-1 mx-2 mt-20 mb-2" ref="chatListDom">
        <div
          class="group flex flex-col px-4 py-3 hover:bg-slate-100 rounded-lg"
          v-for="item of messageList.filter((v) => v.role !== 'system')" :key="item.id">

          <q-list>
            <q-item>
              <div class="font-bold">{{ roleAlias[item.role] }}：</div>
              <Copy class="invisible group-hover:visible" :content="item.content" />

              <q-item-label>
                 <pre
                   class="text-sm text-slate-600 whitespace-pre-wrap leading-relaxed"
                   v-if="item.content"
                 >{{ item.content.replace(/^\n\n/, "") }}</pre>
                <LoadingSnip v-else />
              </q-item-label>


            </q-item>
          </q-list>

        </div>
      </div>

      <div class="sticky bottom-0 w-full p-6 pb-8 bg-gray-100">
        <div class="-mt-2 mb-2 text-sm text-gray-500" v-if="isConfig">请输入 API Key：</div>
        <div class="flex">
          <input
            class="input"
            :type="isConfig ? 'password' : 'text'"
            :placeholder="isConfig ? 'sk-xxxxxxxxxx' : 'Por favor, insira'"
            v-model="messageContent"
            @keydown.enter="isTalking || sendOrSave()"
          />
          <button class="btn" :disabled="isTalking" @click="sendOrSave()">
            {{ isConfig ? "Salvar" : "Enviar" }}
          </button>
        </div>
      </div>
    </div>

  </q-page>
</template>
<script>
import { ref, watch, nextTick, onMounted } from "vue";
import useChatGPT from "src/composables/UseChatGPT";
import cryptoJS from "crypto-js";
import LoadingSnip from "components/LoadingSnip.vue";
import Copy from "components/Copy.vue";

export default {
  name: "Chat",
  components: { LoadingSnip, Copy },
  setup() {
    let apiKey = "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";
    let isConfig = ref(true);
    let isTalking = ref(false);
    let messageContent = ref("");
    let index = 3;
    const chatListDom = ref();
    const decoder = new TextDecoder("utf-8");
    const roleAlias = { user: "ME", assistant: "ChatGPT", system: "System" };
    const { sendMessageChatGPT } = useChatGPT();
    const messageList = ref([
      {
        role: "system",
        content: "ChatGPT，OpenAI"
      },
      {
        role: "assistant",
        content: `Olá, sou um modelo de linguagem AI, posso fornecer alguns serviços e informações comuns, como:

        1. Tradução: posso traduzir chinês para inglês, inglês para chinês e outros idiomas, como francês, japonês, espanhol, etc.

        2. Serviços de consultoria: Se você tiver alguma dúvida, como saúde, direito, investimento etc., posso ajudá-lo no que for possível.

        3. Conversa fiada: Se você se sentir sozinho ou entediado, podemos conversar sobre alguns tópicos interessantes para aliviar seu estresse.

        Por favor, diga-me que tipo de ajuda você precisa, e eu lhe darei informações e sugestões correspondentes de acordo com suas necessidades.`
      }
    ]);


    index++;

    const sendChatMessage = async (content = messageContent.value) => {
      try {
        isTalking.value = true;
        if (messageList.value.length === 2) {
          messageList.value.pop();
        }
        messageList.value.push({ role: "user", content });
        clearMessageContent();
        messageList.value.push({ role: "assistant", content: "" });

        // const { body, status } = await sendMessageChatGPT(messageList.value, getAPIKey());
        // if (body) {
        //   const reader = body.getReader();
        //   await readStream(reader, status);
        // }
        appendLastMessageContent("Testes .... askçldj jk çlasdkjf asdlkhja lsdalsçdjka slçdjaçldjaçsl djasçldjasçdj apqwue rpqodnmaop ihqw-e9r ");
      } catch (error) {
        appendLastMessageContent(error);
      } finally {
        isTalking.value = false;
      }
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

    const getSecretKey = () => "romulofranco";

    const saveAPIKey = (apiKey) => {
      if (apiKey.slice(0, 3) !== "sk-" || apiKey.length !== 51) {
        alert("API Key inválido！");
        return false;
      }
      const aesAPIKey = cryptoJS.AES.encrypt(apiKey, getSecretKey()).toString();
      localStorage.setItem("apiKey", aesAPIKey);
      return true;
    };

    const getAPIKey = () => {
      if (apiKey) return apiKey;
      const aesAPIKey = localStorage.getItem("apiKey") ?? "";
      apiKey = cryptoJS.AES.decrypt(aesAPIKey, getSecretKey()).toString(cryptoJS.enc.Utf8);
      return apiKey;
    };

    const switchConfigStatus = () => (isConfig.value = !isConfig.value);

    const clearMessageContent = () => (messageContent.value = "");

    const scrollToBottom = () => {
      if (!chatListDom.value) return;
      scrollTo(0, chatListDom.value.scrollHeight);
    };

    watch(messageList.value, () => {
      // eslint-disable-next-line vue/valid-next-tick
      return nextTick(() => scrollToBottom());
    });

    const clickConfig = () => {
      if (!isConfig.value) {
        messageContent.value = getAPIKey();
      } else {
        clearMessageContent();
      }
      switchConfigStatus();
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

    onMounted(() => {
      if (getAPIKey()) {
        switchConfigStatus();
      }
    });

    return {
      roleAlias,
      isConfig,
      isTalking,
      messageContent,
      chatListDom,
      messageList,
      sendChatMessage,
      clickConfig,
      sendOrSave
    };

  }
};


</script>
<style scoped>
pre {
  font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L",
  Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC",
  "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei",
  "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
}
</style>
