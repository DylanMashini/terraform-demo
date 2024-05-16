<script lang="ts">
  import {Bot, User} from "lucide-svelte"

  export let author: "user" | "agent";
</script>

<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
  <span
    class="flex h-full w-full items-center justify-center rounded-full bg-muted"
  >
  {#if author == "agent"}
  <Bot />
  {:else}
  <User />
  {/if}
  </span>
</span>
