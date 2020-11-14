<template>
  <div
    class="px-8 mx-auto mt-12 prose sm:px-6 md:px-4 lg:px-2 xl:px-0 xl:prose-xl lg:prose-lg md:prose-md"
  >
    <h1>Tags</h1>
    <ul>
      <li v-for="(slugs, index) in tags" :key="index">
        <nuxt-link :to="`/tags/${index}`">
          {{ index }} ({{ slugs.length }})
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()

    const tags = {}

    posts.forEach(({ slug, tags: postTags }) => {
      postTags.forEach((tag) => {
        if (typeof tags[tag] === 'undefined') tags[tag] = []
        tags[tag].push(slug)
      })
    })

    return {
      tags,
      posts,
    }
  },
}
</script>
