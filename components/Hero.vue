<template>
  <div class="flex justify-center h-hero">
    <img :src="image" class="object-cover w-screen" />
    <div class="absolute">
      <div class="flex flex-col justify-center space-y-4 h-hero">
        <h2
          v-if="heading"
          class="px-4 text-2xl font-extrabold text-white bg-kaldi sm:text-3xl md:text-4xl"
        >
          {{ heading }}
        </h2>
        <h3
          v-if="subheading"
          class="px-4 text-lg text-white bg-kaldi sm:text-xl md:text-2xl"
        >
          {{ subheading }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: null,
    },
    subheading: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.h-hero {
  height: 25rem;
}
</style>
