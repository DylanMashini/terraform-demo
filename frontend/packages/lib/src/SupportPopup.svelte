<script lang="ts">
  import Avatar from "./Avatar.svelte";
  import { chatHistory } from "./stores";
  export let open: boolean;
  let message = "";
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

{#if open}
  <div class="w-full max-w-md rounded-lg shadow-l">
    <div class="flex flex-col h-[500px]">
      <div
        class="bg-gray-900 text-gray-50 px-4 py-3 rounded-t-lg flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <div class="text-sm font-medium">Support Agent</div>
        </div>
        <button on:click={() => (open = !open)}>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>

          <span class="sr-only">Close chat</span>
        </button>
      </div>
      <div class="flex-1 overflow-y-auto p-4 space-y-4">
        {#each $chatHistory as message}
          {#if message.author == "agent"}
            <div class="flex items-start gap-3">
              <div class="flex items-start gap-3">
                <Avatar />
                <div class="bg-gray-100 p-3 rounded-lg max-w-[75%] text-sm">
                  <p>{message.contents}</p>
                </div>
              </div>
            </div>
          {:else}
            <div class="flex items-start justify-end gap-3">
              <div class="flex items-start gap-3 justify-end">
                <div
                  class="bg-gray-900 text-gray-50 p-3 rounded-lg max-w-[75%] text-sm"
                >
                  <p>
                    {message.contents}
                  </p>
                </div>
                <Avatar />
              </div>
            </div>
          {/if}
        {/each}
      </div>
      <div class="bg-gray-100 px-4 py-3 rounded-b-lg flex items-center gap-2">
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
      </div>
    </div>
  </div>
{/if}
