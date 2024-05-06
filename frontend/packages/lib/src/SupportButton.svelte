<script lang="ts">
  export let open: boolean;
</script>

{#if !open}
    <button
      class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 w-10 rounded-full bg-gray-900 text-gray-50 shadow-lg hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
      type="button"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="radix-:r1h:"
      data-state="closed"
      on:click
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6"
      >
        <path d="M17 6.1H3"></path>
        <path d="M21 12.1H3"></path>
        <path d="M15.1 18H3"></path>
      </svg>
      <span class="sr-only">Open chat</span>
    </button>
{/if}
