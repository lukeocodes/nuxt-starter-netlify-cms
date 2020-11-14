<template>
  <div
    class="px-8 mx-auto mt-12 prose sm:px-6 md:px-4 lg:px-2 xl:px-0 xl:prose-xl lg:prose-lg md:prose-md"
  >
    <h2>{{ post.title }}</h2>
    <p>{{ post.description }}</p>
    <nuxt-content :document="post" />
    <h3>Tags</h3>
    <ul>
      <li v-for="(tag, index) in post.tags" :key="index">
        <nuxt-link :to="`/tags/${tag}`">
          {{ tag }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params: { slug } }) {
    const post = await $content('blog', slug).fetch()
    return {
      post,
    }
  },
}
</script>
