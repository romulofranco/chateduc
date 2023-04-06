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
import { ChatGPTUnofficialProxyAPI } from "chatgpt";
import { ref } from "vue";

export default {
  name: "ChatbotGPT",

  setup() {
    const api = new ChatGPTUnofficialProxyAPI({
      accessToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJhdXRvbWF0aXphY2xvdWRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXItQVRPdHJtY0RzTGVZVkUxWEJ6V1EyWFVkIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMTc2NzAzNjQ5MzMzMTM0ODUxOCIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2ODA2NjAwMTgsImV4cCI6MTY4MTg2OTYxOCwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG1vZGVsLnJlYWQgbW9kZWwucmVxdWVzdCBvcmdhbml6YXRpb24ucmVhZCBvZmZsaW5lX2FjY2VzcyJ9.JRAEIuJOEOr4Y80rOFr5vQdUsEYyjZZHvoVl9wfQFmEuEjmA6QYmyUoJ-45iNnsU9OJVcz9D9MpWB1IoU2hQpBMTrbQfzsRezU4YiJQpAAh1Es85GveAAt5-hZAAZqSp_v47qay2qbWyBc3PqKJgvNYR26KugYkboRloSmXM-hcYCQT5Cm9vfXix6pOK58w36iTSa4ZKxEEKZ_vZyejIbfAZeaWZOVwReKKqxWCizMfosaOURPf6JK6TMkmAh-y3W5w5acsAsQ4lgUzgo6p4A_ZFeyxLeWaVOVnSQXaXoyx5AlXGnpxKAXM4jMSEe9tf81pyxIJaAJvk607qNGfVtw",
      apiReverseProxyUrl: "https://api.pawan.krd/backend-api/conversation"
    });
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
