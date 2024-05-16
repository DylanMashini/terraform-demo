<script lang="ts">
  import Avatar from "./components/Avatar.svelte";
  import EndConversation from "./components/EndConversation.svelte";
  import TextInput from "./components/TextInput.svelte";
  import { chatHistory, inputType } from "./stores";
  import { onMount, tick } from "svelte";
  export let open: boolean;
  let message = "";

  let chatElement;

  let observer;

  let userScrolledUp = false;

  let prevScrolledY = 0;

  const onScroll = () => {
    if (
      chatElement.scrollTop ===
      chatElement.scrollHeight - chatElement.offsetHeight
    ) {
      userScrolledUp = false;
      return;
    }
    if (!userScrolledUp) {
      if (prevScrolledY > chatElement.scrollTop) {
        userScrolledUp = true;
      }
    }
    prevScrolledY = chatElement.scrollTop;
  };

  const scrollDown = () => {
    if (!open) return;
    chatElement.scroll({
      top: chatElement.scrollHeight,
      behavior: "smooth",
    });
  };

  $: if (open && !observer) {
    observer = new MutationObserver((_mutations) => {
      if (userScrolledUp) return;
      scrollDown();
    });

    tick().then(() => {
      scrollDown();
      observer.observe(chatElement, {
        childList: true,
        subtree: true,
        attributes: false,
      });
    });
  } else if (!open) {
    observer = undefined;
  }
</script>

{#if open}
  <div class="w-full max-w-md rounded-lg shadow-l bg-white">
    <div class="flex flex-col h-[500px]">
      {#if userScrolledUp}
        <button
          class="bg-opacity-25 bg-black w-4 h-4 rounded-full absolute right-1/2 bottom-14"
          on:click={scrollDown}>Down</button
        >
      {/if}
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
      <div
        class="flex-1 overflow-y-auto p-4 space-y-4 relative"
        bind:this={chatElement}
        on:scroll={onScroll}
      >
        {#each $chatHistory as message}
          {#if message.hidden}
          <!-- Hide Message -->
          {:else if message.author == "agent"}
            <div class="flex items-start gap-3">
              <div class="flex items-start gap-3">
                <Avatar author={message.author} />
                <div class="bg-gray-100 p-3 rounded-lg max-w-[75%] text-sm">
                  {#if message.updating}
                    <div class="flex items-center justify-center gap-1">
                      <div class="typing-dot"></div>
                      <div class="typing-dot"></div>
                      <div class="typing-dot"></div>
                    </div>
                  {:else}
                    <p>{message.contents}</p>
                  {/if}
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
                <Avatar author={message.author} />
              </div>
            </div>
          {/if}
        {/each}
      </div>
      <div class="bg-gray-100 px-4 py-3 rounded-b-lg flex items-center gap-2">
        {#if $inputType == "TextInput"}
          <TextInput bind:message />
        {:else if $inputType == "EndConversationPrompt"}
          <EndConversation bind:open={open} />
        {/if}
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  .typing-dot {
    @apply bg-gray-500 w-2 h-2 rounded-full;
    animation: typing 1.4s infinite;
  }

  .typing-dot:nth-child(1) {
    animation-delay: 0s;
  }

  .typing-dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .typing-dot:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes typing {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }
</style>
