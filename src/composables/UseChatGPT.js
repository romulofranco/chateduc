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
          model: "gpt-3.5-turbo-0613",
          stream: true,
          messages: messageList,
          temperature: 0.2,
          max_tokens: 1000,
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
