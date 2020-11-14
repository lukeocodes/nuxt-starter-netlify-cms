<template>
  <div>
    <Hero :heading="page.title" :image="page.image" />
    <div
      class="px-8 mx-auto mt-12 prose sm:px-6 md:px-4 lg:px-2 xl:px-0 xl:prose-xl lg:prose-lg md:prose-md"
    >
      <h2>
        {{ page.heading }}
      </h2>
      <p>
        {{ page.description }}
      </p>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div
          v-for="(blurb, index) in page.intro.blurbs"
          :key="index"
          class="flex flex-col items-center justify-top"
        >
          <img class="h-32" :src="blurb.image" />
          <p class="mt-2 text-justify">{{ blurb.text }}.</p>
        </div>
      </div>
      <h3>
        {{ page.main.heading }}
      </h3>
      <p>
        {{ page.main.description }}
      </p>
      <div class="lg:grid lg:grid-cols-2 lg:gap-4">
        <img
          class="rounded-lg"
          :src="page.main.image1.image"
          :alt="page.main.image1.alt"
        />
        <img
          class="rounded-lg"
          :src="page.main.image2.image"
          :alt="page.main.image2.alt"
        />
      </div>
      <div class="lg:grid lg:grid-cols-1 lg:gap-4">
        <img
          class="rounded-lg"
          :src="page.main.image3.image"
          :alt="page.main.image3.alt"
        />
      </div>
      <div>
        <p
          v-for="(testimonial, index) in page.testimonials"
          :key="index"
          class="inline-block w-full p-6 text-base bg-gray-100 border-l-4 border-gray-300 rounded-lg"
        >
          {{ testimonial.quote }}<br />
          –{{ testimonial.author }}
        </p>
      </div>
    </div>
    <Hero :image="page.full_image" />
    <div
      class="px-8 mx-auto mt-12 prose sm:px-6 md:px-4 lg:px-2 xl:px-0 xl:prose-2xl lg:prose-xl md:prose-lg"
    >
      <h3>
        {{ page.pricing.heading }}
      </h3>
      <p>
        {{ page.pricing.description }}
      </p>
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div v-for="(plan, i) in page.pricing.plans" :key="i">
          <h4 class="text-center">
            {{ plan.plan }}
          </h4>
          <p class="text-4xl font-bold text-center text-kaldi">
            ${{ plan.price }}
          </p>
          <p class="text-base">{{ plan.description }}</p>
          <ul class="text-base">
            <li v-for="(item, j) in plan.items" :key="j">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
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
