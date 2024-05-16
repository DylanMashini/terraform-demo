import {writable} from "svelte/store"
import type { Writable } from "svelte/store"


export type Message = {
    contents: string;
    author: "user" | "agent"
    updating: boolean;
    hidden?: boolean;
}

export const initalMessage: Message = {
    contents: "Hello, how can I assist you today?",
    author: "agent",
    updating: false,
};

let seedChatHistory: Message[] | null  = JSON.parse(window.localStorage.getItem("ChatPluginMessageHistory") || "null");

if (seedChatHistory === null || seedChatHistory.length === 0) {
    seedChatHistory = [initalMessage];
}

// Incomplete message, unsend previous two
if (seedChatHistory[seedChatHistory.length - 1].updating) {
    seedChatHistory.pop();
    seedChatHistory.pop();
}

export let chatHistory: Writable<Message[]> = writable(seedChatHistory);

chatHistory.subscribe((history) => {
    localStorage.setItem("ChatPluginMessageHistory", JSON.stringify(history));
})


export let inputType: Writable<"TextInput" | "EndConversationPrompt"> = writable("TextInput");