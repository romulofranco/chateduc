<template>
  <q-page class="row no-wrap">

    <div class="col q-ma-md" style="margin-right: 5px">
      <div class="column full-height">
        <q-scroll-area class="col q-pa-sm" :visible="false">
          <div ref="chatListDom" v-for="item of messageList.filter((v) => v.role !== 'system')" :key="item.content">

            <q-chat-message :name="roleAlias[item.role]" class="text-body2"
                            :sent="item.role !== 'user'"
                            :avatar="item.role === 'user' ? avatarUser : avatarChatGPT"
                            :bg-color="item.role === 'user' ? 'orange-5' : 'yellow-13'"
                            :text-color="item.role === 'user' ? 'black' : 'black'">

              <div v-if="item.content">
                {{ item.content.replace(/^\n\n/, "") }}
              </div>
              <LoadingSnip v-else />
            </q-chat-message>
          </div>
        </q-scroll-area>
      </div>
    </div>

    <q-drawer
      side="right"
      v-model="drawerRight"
      overlay
      :width="320"
      :breakpoint="300"
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-amber-1 bordered shadow-1'"
    >
      <q-scroll-area class="fit">
        <q-item-section class="bg-secondary ">
          <br />
          <q-item-label round class="col text-subtitle1 text-bold text-center " style="margin-bottom: 10px">Últimas
            Conversas
          </q-item-label>
          <q-separator color="secondary" class="full-width shadow-1" />
        </q-item-section>
        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section class="text-left justify-left">
              Conversa 1
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-label>
              Conversa 2
            </q-item-label>
          </q-item>

        </q-list>

      </q-scroll-area>
    </q-drawer>

  </q-page>

  <q-footer class="fixed">
    <q-toolbar class="bg-primary text-white row">
      <q-btn round flat icon="menu" class="q-mr-sm" @click="drawerRight = !drawerRight" />
      <q-input
        v-model="messageContent"
        class="col-grow q-mr-sm"
        bg-color="white"
        :placeholder="isTalking ? 'Educ está digitando...' : 'Digite sua mensagem...'"
        :disable="isTalking"
        dense
        outlined
        rounded
        autofocus
        ref="inputFocus"
        @keydown.enter="isTalking || sendOrSave()"
      />
      <q-btn round flat icon="send" type="submit" :disabled="isTalking" @click="sendOrSave()">

      </q-btn>
    </q-toolbar>
  </q-footer>

</template>

<script>
import { ref, watch, nextTick, onMounted } from "vue";
import useAuthUser from "src/composables/UserAuthUser";
import LoadingSnip from "components/LoadingSnip.vue";
import useChatGPT from "src/composables/UseChatGPT";
import cryptoJS from "crypto-js";
import { LoremIpsum } from "lorem-ipsum";

export default {
  name: "ChatPage1",
  components: { LoadingSnip },
  setup() {
    let apiKey = process.env.CHATGPT_KEY;
    let isConfig = ref(true);
    let isTalking = ref(false);
    let messageContent = ref("");
    const chatListDom = ref();
    const decoder = new TextDecoder("utf-8");
    const roleAlias = { user: "Você", assistant: "Educ", system: "System" };
    const { sendMessageChatGPT } = useChatGPT();
    const messageList = ref([
      {
        role: "system",
        content: "ChatGPT，OpenAI"
      },
      {
        role: "assistant",
        content: `Olá, sou um modelo de Inteligência Artificial de linguagem generativa, talvez eu possa te auxiliar, me faça uma pergunta?`
      }
    ]);
    const inputFocus = ref(null);
    const { user } = useAuthUser();


    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 58,
        min: 22
      },
      suffix: "\n",
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });


    const sendChatMessage = async (content = messageContent.value) => {
      try {
        isTalking.value = true;
        messageList.value.push({ role: "user", content });
        clearMessageContent();
        messageList.value.push({ role: "assistant", content: "" });

        const { body, status } = await sendMessageChatGPT(messageList.value, apiKey);
        if (body) {
          const reader = body.getReader();
          await readStream(reader, status);
        }
        // let contentX = lorem.generateSentences(15);
        // setTimeout(() => appendLastMessageContent(contentX + contentX), 1500);
        // setTimeout(() => (isTalking.value = false), 1500);

        //
        // appendLastMessageContent(content);
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
      sendOrSave,
      drawerRight: ref(false),
      inputFocus,
      abreDlg: ref(true),
      avatarUser: "https://cdn.quasar.dev/img/avatar1.jpg",
      avatarChatGPT: "https://uploads.laborx.com/avatars/thumb_resized_100x100_4TtosT2qJm9_JHIoAU59OdZ3RxOFL9ZM.png"
    };

  }
};
</script>
<style scoped>

.infoBlock {

}

.infoBlock:hover {
  background-color: #ecb79f;
  z-index: -100;
}


.chatmsg {
  max-width: 430px;
  width: 90%;
  z-index: 500;
  max-height: 70%;
}

</style>
