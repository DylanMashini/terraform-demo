<script lang="ts">
  import Logo from "./Logo.svelte";

  let navItems = [
    {
      title: "Home",
      href: "/#",
    },
    {
      title: "Docs",
      href: "/#",
    },
    {
      title: "Pricing",
      href: "/#",
    },
  ];
</script>

<header
  class="h-14 border-b border-gray-200 fixed w-full bg-white"
>
  <div class="px-4 lg:px-6 h-full flex items-center">
    <a class="flex items-center justify-center" href="/#">
      <div class="w-12 h-12 aspect-square">
        <Logo />
      </div>
      <span class="sr-only">Chat Plugin</span></a
    >
    <nav class="ml-auto flex gap-4 sm:gap-6">
      {#each navItems as item}
        <a
          class="text-sm font-medium hover:underline underline-offset-4"
          href={item.href}
        >
          {item.title}
        </a>
      {/each}
    </nav>
  </div>
</header>
