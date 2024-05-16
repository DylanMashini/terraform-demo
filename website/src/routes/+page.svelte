<script lang="ts">
  import Hero from "./Hero.svelte";

</script>
<main class="flex-1">
  <Hero />
  <section class="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
    <div class="container px-4 md:px-6">
      <div
        class="flex flex-col items-center justify-center space-y-4 text-center"
      >
        <div class="space-y-2">
          <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
            AI Features
          </div>
          <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
            Harness the Power of AI
          </h2>
          <p
            class="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl"
          >
            Our SaaS platform leverages the latest advancements in artificial
            intelligence to streamline your workflows and unlock new
            possibilities.
          </p>
        </div>
        <div
          class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"
        >
          <img
            src="/placeholder.svg"
            width="550"
            height="310"
            alt="AI Features"
            class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div class="flex flex-col justify-center space-y-4">
            <ul class="grid gap-6">
              <li>
                <div class="grid gap-1">
                  <h3 class="text-xl font-bold">Natural Language Processing</h3>
                  <p class="text-gray-500">
                    Analyze and understand text data with advanced NLP
                    algorithms.
                  </p>
                </div>
              </li>
              <li>
                <div class="grid gap-1">
                  <h3 class="text-xl font-bold">Computer Vision</h3>
                  <p class="text-gray-500">
                    Leverage AI-powered image and video recognition to extract
                    valuable insights.
                  </p>
                </div>
              </li>
              <li>
                <div class="grid gap-1">
                  <h3 class="text-xl font-bold">Predictive Analytics</h3>
                  <p class="text-gray-500">
                    Make data-driven decisions with AI-powered forecasting and
                    trend analysis.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="w-full py-12 md:py-24 lg:py-32 border-t">
    <div class="container grid items-center gap-4 px-4 md:px-6">
      <div class="space-y-3">
        <h2 class="text-3xl font-bold tracking-tighter md:text-4xl">
          Unlock Your AI Potential
        </h2>
        <p
          class="max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl"
        >
          Our SaaS platform provides the tools and insights you need to harness
          the power of AI and drive your business forward.
        </p>
      </div>
      <div class="flex flex-col gap-2 min-[400px]:flex-row">
        <a
          class="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          href="#"
          rel="ugc"
        >
          Get Started
        </a><a
          class="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          href="#"
          rel="ugc"
        >
          Learn More
        </a>
      </div>
    </div>
  </section>
</main>
