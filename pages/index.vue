<template>
  <nuxt-content :document="page" class="prose lg:prose-xl max-w-none" />
</template>

<script>
export default {
  layout: 'index',

  async asyncData({ $content }) {
    const page = await $content('index').fetch()

    return {
      page,
    }
  },
}
</script>
