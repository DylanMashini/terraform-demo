import { chatHistory } from "./stores";

export default async function generateOnNewMessage() {
  let API_URL = import.meta.env.VITE_API_URL;
  chatHistory.subscribe(async (messages) => {
    if (messages[messages.length - 1].author == "user") {
      chatHistory.update((history) => {
        history.push({
          author: "agent",
          contents: "",
          updating: true,
        });
        return history
      });

      // Get Completion from API
      let res = await (
        await fetch(`${API_URL}/create-chat`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            messages: messages.map((message) => {
              return {
                message: message.contents,
                author: message.author,
              };
            }),
          }),
        })
      ).json();
        chatHistory.update((history) => {
            history[history.length - 1].updating = false;
            history[history.length - 1].contents = res.response;
            return history
        })
    }
  });
}
