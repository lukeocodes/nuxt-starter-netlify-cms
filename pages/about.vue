<template>
  <div class="relative py-16 bg-white overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8">
      <h1
        class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
      >
        {{ page.title }}
      </h1>
      <div class="prose prose-lg text-gray-500 mx-auto">
        <nuxt-content :document="page" class="prose lg:prose-xl max-w-none" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('about').fetch()

    return {
      page,
    }
  },
}
</script>
