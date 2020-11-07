<template>
  <div>
    <Hero
      :heading="page.heading"
      :subheading="page.subheading"
      :image="require(`~/static/img/home-jumbotron.jpg`)"
    />
    <div class="relative py-16 bg-white overflow-hidden px-2 sm:px-8 lg:px-32">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h3
            class="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10"
          >
            {{ page.mainpitch.title }}
          </h3>
          <p class="mt-4 text-lg leading-7 text-gray-500">
            {{ page.mainpitch.description }}
          </p>
          <h3
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            {{ page.title }}
          </h3>
          <p class="mt-4 text-lg leading-7 text-gray-500">
            {{ page.description }}
          </p>
        </div>

        <div class="py-12 bg-white">
          <div class="max-w-xl mx-auto lg:max-w-screen-xl">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div v-for="(blurb, index) in page.intro.blurbs" :key="index">
                <div class="flex items-center justify-center">
                  <img class="h-32" :src="blurb.image" />
                </div>
                <div class="mt-5">
                  <p class="mt-2 text-base leading-6">{{ blurb.text }}.</p>
                </div>
              </div>
            </div>
            <div class="text-center mt-16">
              <span class="inline-flex rounded-md shadow-sm">
                <nuxt-link
                  to="/products"
                  class="inline-flex items-center px-6 py-3 border border-gray-300 text-base leading-6 font-medium rounded-md text-orange-600 bg-white hover:text-orange-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                >
                  See all products
                </nuxt-link>
              </span>
            </div>
          </div>
        </div>

        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <h2
            class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            Latest stories
          </h2>
          <div
            class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none"
          >
            <nuxt-link
              v-for="(post, index) in posts"
              :key="index"
              :to="`/blog/${post.slug}`"
              class="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  :src="post.featuredimage"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <h3
                    class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                  >
                    {{ post.title }}
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    {{ post.description }}
                  </p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="text-center mt-16">
            <span class="inline-flex rounded-md shadow-sm">
              <nuxt-link
                to="/blog"
                class="inline-flex items-center px-6 py-3 border border-gray-300 text-base leading-6 font-medium rounded-md text-orange-600 bg-white hover:text-orange-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
              >
                Read more
              </nuxt-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('index').fetch()
    const posts = await $content('blog').fetch()

    return {
      page,
      posts,
    }
  },
}
</script>
