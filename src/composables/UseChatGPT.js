export async function chat(messageList, apiKey) {
  try {
    const result = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        stream: true,
        messages: messageList
      })
    });
    return result;
  } catch (error) {
    throw error;
  }
}
