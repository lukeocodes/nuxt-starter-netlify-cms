<template>
  <div>
    <Hero
      :heading="page.heading"
      :subheading="page.subheading"
      :image="page.image"
    />
    <div
      class="px-8 mx-auto mt-12 prose sm:px-6 md:px-4 lg:px-2 xl:px-0 xl:prose-2xl lg:prose-xl md:prose-lg"
    >
      <h2>
        {{ page.title }}
      </h2>
      <p>
        {{ page.description }}
      </p>
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
