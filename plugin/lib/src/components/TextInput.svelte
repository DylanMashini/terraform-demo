<script lang="ts">
  import { chatHistory } from "../stores";

  export let message;

  const sendMessage = () => {
    if (message && !$chatHistory[$chatHistory.length - 1].updating) {
      $chatHistory.push({
        author: "user",
        contents: message,
        updating: false,
      });
      $chatHistory = $chatHistory;

      message = "";
    }
  };
</script>

<input
  class="flex-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  placeholder="Type your message..."
  bind:value={message}
  on:keydown={(e) => e.key == "Enter" && sendMessage()}
/>
<button
  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
  on:click={sendMessage}
>
  Send
</button>
