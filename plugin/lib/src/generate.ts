import { chatHistory, inputType } from "./stores";
import {get} from "svelte/store"

export default async function generateOnNewMessage(publicKey: string) {
  // @ts-ignore
  let API_URL = import.meta.env.VITE_API_URL;

  chatHistory.subscribe(async (messages) => {
    if (messages[messages.length - 1].author === "user" && get(inputType) === "TextInput") {
      // Get Completion from API
      let promise = fetch(`${API_URL}/create-chat`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          api_key: publicKey,
          messages: messages.map((message) => {
            return {
              message: message.contents,
              author: message.author,
            };
          }),
        }),
      });

      chatHistory.update((history) => {
        history.push({
          author: "agent",
          contents: "",
          updating: true,
        });
        return history;
      });

      let res = await (await promise).json();

      if (res.response.includes("<END>")) {
        inputType.set("EndConversationPrompt");
        chatHistory.update((history) => {
          history.pop();
          history = history;
          console.log(history);
          return history;
        });
        return;
      }

      chatHistory.update((history) => {
        history[history.length - 1].updating = false;
        history[history.length - 1].contents = res.response;
        return history;
      });
    }
  });
}
