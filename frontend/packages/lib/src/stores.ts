import {writable} from "svelte/store"
import type { Writable } from "svelte/store"


export type Message = {
    contents: string;
    author: "user" | "agent"
    updating: boolean;
}

export let chatHistory: Writable<Message[]> = writable([{
    contents: "Hello, how can I assist you today?",
    author: "agent",
    updating: false,
}]);