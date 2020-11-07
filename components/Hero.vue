<template>
  <div
    class="py-20 mx-auto w-full px-4 sm:px-6"
    :style="`background: url(${image})`"
  >
    <div class="text-center">
      <h2
        class="my-10 py-5 bg-orange-600 text-3xl tracking-tight leading-10 font-extrabold text-white sm:text-4xl sm:leading-none md:text-5xl"
      >
        {{ heading }}
      </h2>
      <h3
        class="my-10 py-5 bg-orange-600 text-2xl tracking-tight leading-10 font-extrabold text-white sm:text-3xl sm:leading-none md:text-4xl"
      >
        {{ subheading }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped></style>
