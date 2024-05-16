<svelte:options
  customElement={{
    tag: "my-component",
    shadow: "open",
  }}
/>

<script lang="ts">
  import "./app.css";
  import SupportIcon from "./SupportButton.svelte";
  import SupportPopup from "./SupportPopup.svelte";
  import { onMount, tick } from "svelte";
  import generateOnNewMessage from "./generate";
  import mountCSS from "./mountCss";

  export let publicKey;

  onMount(async () => {
    mountCSS();
    await tick();
    generateOnNewMessage(publicKey);
  });

  let nextMessage = "";

  let open = false;
</script>

<div class="root">
  <!-- <div class="w-56 h-96 bg-slate-800">
    <div class="fixed right-6 bottom-6 w-12 h-12 bg-blue-200"></div>
    <div class="w-full min-h-20">
      <h1 class="text-white text-2xl w-full text-center">Chat</h1>
      <input bind:value={nextMessage} />
      <button on:click={send}>Send</button>
    </div>
  </div> -->
  <div class="fixed bottom-4 right-4 z-50">
    <SupportIcon on:click={() => (open = !open)} {open} />
    <SupportPopup bind:open />
  </div>
</div>

<style>
  /* Hide root component until tailwind styles are fully loaded */
  .root {
    display: none;
  }
</style>
