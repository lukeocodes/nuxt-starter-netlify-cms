<template>
  <div>
    <Hero />
    <div class="py-12 bg-white">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p
            class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
          >
            Transactions
          </p>
          <h3
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            A better way to send money
          </h3>
          <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div class="mt-10">
          <ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <li v-for="(blurb, i) in page.intro.blurbs" :key="i">
              <div class="flex">
                <div class="flex-shrink-0">
                  <img :src="blurb.image" />
                </div>
                <div class="ml-4">
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    {{ blurb.text }}.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Hero />
    <div class="max-w-screen-xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:flex-col sm:align-center">
        <h1
          class="text-5xl leading-none font-extrabold text-gray-900 sm:text-center"
        >
          Pricing Plans
        </h1>
        <p class="mt-5 text-xl leading-7 text-gray-500 sm:text-center">
          Start building for free, then add a site plan to go live. Account
          plans unlock additional features.
        </p>
      </div>
      <div
        class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3"
      >
        <div
          v-for="(plan, i) in page.pricing.plans"
          :key="i"
          class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
        >
          <div class="p-6">
            <h2 class="text-lg leading-6 font-medium text-gray-900">
              {{ plan.plan }}
            </h2>
            <p class="mt-4 text-sm leading-5 text-gray-500">
              {{ plan.description }}
            </p>
            <p class="mt-8">
              <span class="text-4xl leading-10 font-extrabold text-gray-900"
                >${{ plan.price }}</span
              >
              <span class="text-base leading-6 font-medium text-gray-500"
                >/mo</span
              >
            </p>
            <button
              type="button"
              class="mt-8 w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
            >
              Buy {{ plan.plan }}
            </button>
          </div>
          <div class="pt-6 pb-8 px-6">
            <h3
              class="text-xs leading-4 font-medium text-gray-900 tracking-wide uppercase"
            >
              What's included
            </h3>
            <ul class="mt-6 space-y-4">
              <li
                v-for="(item, j) in plan.items"
                :key="j"
                class="flex space-x-3"
              >
                <span class="text-sm leading-5 text-gray-500">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('products').fetch()

    return {
      page,
    }
  },
}
</script>
