<template>
  <nav class="">
    <ul class="fixed inset-x-0 top-0 flex p-3">
      <li class="flex-1 mr-2">
        <nuxt-link class="block btn" to="/">Home</nuxt-link>
      </li>
      <li class="flex-1 mr-2">
        <nuxt-link class="block btn" to="/blog">Blog</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped></style>
