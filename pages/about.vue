<template>
  <div class="mx-auto prose lg:prose-xl">
    <h1
      class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
    >
      {{ page.title }}
    </h1>
    <nuxt-content :document="page" class="mx-auto prose lg:prose-xl" />
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
