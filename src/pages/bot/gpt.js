export default async function chat(messageList, apiKey) {
    try {
        const result = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "post",
            // signal: AbortSignal.timeout(8000),
            // 开启后到达设定时间会中断流式输出
            headers: {
                "Content-Type": "applicatsrc/pages/bot/chat.vueion/json",
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify(
                {model: "gpt-3.5-turbo", stream: true, messages: messageList}
            )
        });
        return result;
    } catch (error) {
        throw error;


    }
}
