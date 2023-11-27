<template>
  <q-layout view="Lhh lpR fff" container class="bg-white text-dark shadow-2 rounded-borders"
            style="max-width: 500px; max-height: 650px;">
    <q-page-container>
      <q-header class="bg-primary" elevated>
        <q-toolbar>
          <q-toolbar-title class="text-h6 text-weight-light">Obtendo sugestões do ChatEduc</q-toolbar-title>
          <q-btn flat v-close-popup round dense icon="close" />
        </q-toolbar>
      </q-header>

      <q-page class="row" style="overflow: hidden">
        <div class="col q-ma-md">
          <div class="column full-height" style="margin-right: -10px">
            <div class="col scroll overflow-auto full-height full-width" ref="chatListDom"
                 style="max-height: 515px; ">
              <div class="col full-width"
                   v-for="item of messageList.filter((v) => v.role !== 'system')" :key="item.content">

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

            </div>
          </div>
        </div>


      </q-page>

      <q-footer class="bg-black text-white" elevated>
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
    </q-page-container>
  </q-layout>

</template>

<script>
import { defineComponent, ref, watch, nextTick, onMounted } from "vue";
import useAuthUser from "src/composables/UserAuthUser";
import useChatGPT from "src/composables/UseChatGPT";
import cryptoJS from "crypto-js";
import { LoremIpsum } from "lorem-ipsum";
import LoadingSnip from "components/LoadingSnip.vue";
import { scroll } from "quasar";

const { getScrollHeight, getScrollTarget, setVerticalScrollPosition } = scroll;

export default defineComponent({
  name: "DialogChatGPT",

  props: ["model_dlg_gpt", "question"],

  components: { LoadingSnip },

  data: function() {
    let apiKey = process.env.CHATGPT_KEY;
    let isConfig = ref(true);
    let isTalking = ref(false);
    let messageContent = ref("");
    const chatListDom = ref(null);
    const decoder = new TextDecoder("utf-8");
    const roleAlias = { user: "Você", assistant: "Educ", system: "System" };
    const { sendMessageChatGPT } = useChatGPT();
    const messageList = ref([]);
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
        // setTimeout(() => setVerticalScrollPosition(getScrollTarget(this.$refs.chatListDom), getScrollHeight(this.$refs.chatListDom), 0), 1800);
        //
        // appendLastMessageContent(content);
      } catch (error) {
        appendLastMessageContent(error);
      } finally {
        isTalking.value = false;
      }
    };

    const appendLastMessageContent = (content) => {
      (messageList.value[messageList.value.length - 1].content += content);
      // scrollToBottom();
    };

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
      setVerticalScrollPosition(getScrollTarget(this.$refs.chatListDom), getScrollHeight(this.$refs.chatListDom), 0);
    };

    watch(messageList.value, () => {
      moveDown();
    });

    const moveDown = async () => {
      await nextTick();
      scrollToBottom();
    };

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

      clearMessageContent();

      if (this.question.length > 0) {
        messageContent.value = this.question;
        setTimeout(() => sendChatMessage(), 500);
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
      abreDlg: this.model_dlg_gpt.value,
      avatarUser: "https://cdn.quasar.dev/img/boy-avatar.png",
      avatarChatGPT: "chatgpt1.png"
    };

  }
});
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

/* width */
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #e77531;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ea8537;
}

</style>
