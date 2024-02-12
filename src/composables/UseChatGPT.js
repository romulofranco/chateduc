export default function useChatGPT() {
  const sendMessageChatGPT = async (messageList, apiKey) => {
    try {
      return await fetch("https://api.openai.com/v1/chat/completions", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4-0125-preview",
          stream: true,
          messages: messageList,

        })
      });
    } catch (error) {
      throw error;
    }
  };

  return {
    sendMessageChatGPT
  };
}
