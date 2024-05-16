<script lang="ts">
  import {chatHistory, inputType, initalMessage} from "../stores"

  export let open;

  const end = () => {
    $chatHistory = [initalMessage];
    $inputType = "TextInput";
    open = false;
  }

  const continueChat = () => {
    $chatHistory.push({
      contents: "<END>",
      author: "agent",
      updating: false,
      hidden: true,
    })
    $chatHistory.push({
      contents: "SYSTEM: The user indicated they wanted to continue the conversation. Await their next message.",
      author: "user",
      updating: false,
      hidden: true,
    })
    $inputType = "TextInput";
    $chatHistory = $chatHistory;  
  }
</script>

<button
  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border h-10 px-4 py-2 bg-transparent border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-50 w-1/2"
  on:click={end}
>
  End
</button>

<button
  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 bg-white text-gray-900 hover:bg-gray-200 w-1/2"
  on:click={continueChat}
>
  Continue
</button>
