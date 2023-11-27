<template>
  <div class="q-pa-md">
    <q-chat-scroll-area class="bg-white q-pa-md" style="height: 500px;">
      <q-chat-message
        v-for="(message, index) in messages"
        :key="index"
        :sent="message.from === 'user'"
        :type="message.from === 'user' ? 'sent' : 'received'"
        :text="message.text"
        :avatar="message.from === 'user' ? userAvatar : chatbotAvatar"
      />
      <div class="text-center">
        <q-btn @click="saveConversation" color="primary" label="Salvar conversa" />
      </div>
    </q-chat-scroll-area>

    <q-chat-message v-if="showTyping" sent :type="'sent'" :text="'Digitando...'" :avatar="chatbotAvatar" />

    <q-chat-message v-if="chatbotMessage" sent :type="'received'" :text="chatbotMessage" :avatar="chatbotAvatar" />

    <q-chat-message v-if="chatbotImage" sent :type="'received'" :text="'Imagem gerada com sucesso!'" :avatar="chatbotAvatar" />

    <q-chat-message v-if="error" sent :type="'received'" :text="'Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.'" :avatar="chatbotAvatar" />

    <q-chat-message v-if="!showTyping && !chatbotMessage && !chatbotImage && !error" sent :type="'received'" :text="'Olá! Em que posso ajudá-lo?'" :avatar="chatbotAvatar" />

    <q-chat-message v-if="showWelcomeMessage" sent :type="'received'" :text="welcomeMessage" :avatar="chatbotAvatar" />

    <div class="row justify-center">
      <div class="col-sm-8 col-md-6 col-lg-4">
        <q-input
          outlined
          v-model="userMessage"
          :disable="showTyping"
          @keyup.enter="sendMessage"
          placeholder="Digite aqui sua mensagem"
        >
          <q-icon slot="before" name="message" />
          <q-icon slot="after" name="send" @click="sendMessage" :disable="showTyping" />
        </q-input>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ChatbotGPT",

  setup() {
    const api = "";
    const message = ref("");

    const sendMessage = async () => {
      const res = await api.sendMessage(this.message.text);
      console.log(res.text);
    };

    return {
      sendMessage,
      api,
      message
    };
  }
};
</script>
