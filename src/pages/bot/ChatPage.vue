<template>
  <!--  <div ref="RefChat" v-if="message !== ''" class="q-mt-xl">-->
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 600px">
      <q-chat-message
        v-for="chat in chats"
        :key="chat.id"
        :name="chat.user"
        :text="[chat.texto]"
        :sent="chat.uid === user.uid"
      />
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
  <!--  </div>-->
  <!--  <div v-else class="flex flex-center q-mt-xl q-pt-xl">-->
  <!--    <h6>Selecciona un usuario para el chat</h6>-->
  <!--  </div>-->
</template>

<script>
import { ref, inject } from "vue";
import useAuthUser from "src/composables/UserAuthUser";

export default {
  name: "ChatPage",
  setup() {
    const message = ref("");
    const inputFocus = ref(null);
    const { user } = useAuthUser();

    const chats = ref([]);
    const RefChat = ref(null);


    const obtenerData = (idParams) => {
      chats.value = [];
    };


    const enviarMensaje = async (userID) => {
      try {
        const objetoMensaje = {
          user: 'me',
          texto: message.value,
          fecha: Math.floor(Date.now() / 1000),
          uid: user.value.uid //userID
        };
        chats.value.push(objetoMensaje);
        message.value = "";
        inputFocus.value.focus();
      } catch (error) {
        console.log(error);
      }
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
