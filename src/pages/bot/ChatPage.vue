<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 600px">
      <q-chat-message
        v-for="chat in chats"
        :key="chat.id"
        :name="chat.user"
        :sent="chat.uid === user.uid"
      >

        <div v-if="chat.wait">
          <q-spinner-comment
            color="secondary"
            size="2em"
          />
        </div>
        <div v-else>
          {{ chat.texto }}
        </div>

      </q-chat-message>
    </div>
  </div>

  <q-footer>
    <q-form @submit.prevent="enviarMensaje">
      <q-toolbar class="bg-primary text-white row">
        <q-btn round flat icon="insert_emoticon" class="q-mr-sm" />
        <q-input
          v-model="message"
          class="col-grow q-mr-sm"
          bg-color="white"
          placeholder="Type a message"
          dense
          outlined
          rounded
          autofocus
          ref="inputFocus"

        />
        <q-btn round flat icon="send" type="submit" />
      </q-toolbar>
    </q-form>
  </q-footer>

</template>

<script>
import { ref } from "vue";
import useAuthUser from "src/composables/UserAuthUser";
// import { ChatGPTUnofficialProxyAPI } from "chatgpt";
// import { ChatGPTAPI } from "chatgpt";
// import { BingChat } from "bing-chat";
// import dotenv from 'dotenv-safe';
// dotenv.config()
export default {
  name: "ChatPage",
  setup() {
    const message = ref("");
    const inputFocus = ref(null);
    const { user } = useAuthUser();

    const chats = ref([]);
    const RefChat = ref(null);

    // const api = new BingChat({
    //   cookie: process.env.BING_COOKIE
    // });

    // const api = new ChatGPTUnofficialProxyAPI({
    //   accessToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJhdXRvbWF0aXphY2xvdWRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXItQVRPdHJtY0RzTGVZVkUxWEJ6V1EyWFVkIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMTc2NzAzNjQ5MzMzMTM0ODUxOCIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2ODA2NjAwMTgsImV4cCI6MTY4MTg2OTYxOCwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG1vZGVsLnJlYWQgbW9kZWwucmVxdWVzdCBvcmdhbml6YXRpb24ucmVhZCBvZmZsaW5lX2FjY2VzcyJ9.JRAEIuJOEOr4Y80rOFr5vQdUsEYyjZZHvoVl9wfQFmEuEjmA6QYmyUoJ-45iNnsU9OJVcz9D9MpWB1IoU2hQpBMTrbQfzsRezU4YiJQpAAh1Es85GveAAt5-hZAAZqSp_v47qay2qbWyBc3PqKJgvNYR26KugYkboRloSmXM-hcYCQT5Cm9vfXix6pOK58w36iTSa4ZKxEEKZ_vZyejIbfAZeaWZOVwReKKqxWCizMfosaOURPf6JK6TMkmAh-y3W5w5acsAsQ4lgUzgo6p4A_ZFeyxLeWaVOVnSQXaXoyx5AlXGnpxKAXM4jMSEe9tf81pyxIJaAJvk607qNGfVtw",
    //   apiReverseProxyUrl: "https://api.pawan.krd/backend-api/conversation"
    // });

    // const api = new ChatGPTAPI({
    //   apiKey: "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",
    //   completionParams: {
    //     temperature: 0.5,
    //     top_p: 0.8
    //   }
    // });


    const obtenerData = (idParams) => {
      chats.value = [];
    };


    const enviarMensaje = async (userID) => {
      try {
        const objetoMensaje = {
          user: "me",
          texto: message.value,
          fecha: Math.floor(Date.now() / 1000),
          uid: user.value.uid, //userID
          wait: false
        };
        chats.value.push(objetoMensaje);
        sendMessageChatGPT(message.value);
        message.value = "";
        inputFocus.value.focus();
      } catch (error) {
        console.log(error);
      }
    };

    const sendMessageChatGPT = async (msg) => {
      let x = 1;
      const res = await api.sendMessage(msg, {
        onProgress: (partialResponse) => {
          const objetoMensaje = {
            user: "Edu",
            texto: partialResponse.text,
            fecha: Math.floor(Date.now() / 1000),
            uid: "Edu", //userID
            wait: true
          };
          if (x == 1) {
            chats.value.push(objetoMensaje);
            x++;
          }
        }
      });

      const objetoMensaje = {
        user: "Edu",
        texto: res.text,
        fecha: Math.floor(Date.now() / 1000),
        uid: "Edu", //userID
        wait: false
      };
      chats.value.push(objetoMensaje);

    };

    return {
      enviarMensaje,
      message,
      inputFocus,
      chats,
      RefChat,
      user
    };

  }
};
</script>
