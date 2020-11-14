<template>
  <div>
    <div
      class="px-8 mx-auto mt-12 prose sm:px-6 md:px-4 lg:px-2 xl:px-0 xl:prose-xl lg:prose-lg md:prose-md"
    >
      <h1>Latest Stories</h1>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="px-6 border rounded-lg shadow"
        >
          <h3>
            <nuxt-link :to="`/blog/${post.slug}`">{{ post.title }}</nuxt-link>
          </h3>
          <p>
            {{ post.description }}
          </p>
          <p>
            <nuxt-link :to="`/blog/${post.slug}`">Read more</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    return {
      posts,
    }
  },
}
</script>
