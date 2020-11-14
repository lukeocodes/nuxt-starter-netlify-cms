<template>
  <div>
    <div
      class="px-8 mx-auto mt-12 prose sm:px-6 md:px-4 lg:px-2 xl:px-0 xl:prose-xl lg:prose-lg md:prose-md"
    >
      <h4>{{ posts.length }} post tagged with "{{ slug }}"</h4>
      <div class="lg:grid lg:grid-cols-1 lg:gap-8">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="px-6 no-underline bg-gray-200 rounded-lg shadow-lg"
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
      <p>
        <nuxt-link to="/tags">Browse all tags</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params: { slug } }) {
    const posts = await $content('blog')
      .where({ tags: { $contains: slug } })
      .fetch()

    return {
      slug,
      posts,
    }
  },
}
</script>
