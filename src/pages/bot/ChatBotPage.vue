<template>
  <div>
    <div v-for="message in messages" :key="message.id">
      {{ message.text }}
    </div>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="newMessage" />
      <button type="submit">Send</button>
    </form>
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
