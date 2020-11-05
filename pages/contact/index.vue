<template>
  <nuxt-content :document="page" class="prose lg:prose-xl max-w-none" />
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
