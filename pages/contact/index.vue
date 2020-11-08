<template>
  <div
    class="px-8 mx-auto mt-12 prose sm:px-6 md:px-4 lg:px-2 xl:px-0 xl:prose-xl lg:prose-lg md:prose-md"
  >
    <h2>Contact</h2>
    <form
      name="contact"
      method="post"
      action="/contact/thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      netlify
    >
      <input type="hidden" name="form-name" value="contact" />
      <input class="hidden" name="bot-field" value="" />
      <label class="label" for="name">Your name</label>
      <div class="control">
        <input
          id="name"
          class="w-full border rounded"
          type="text"
          name="name"
          required
        />
      </div>
      <label class="label" htmlFor="email">Email</label>
      <div class="control">
        <input
          id="email"
          class="w-full border rounded"
          type="email"
          name="email"
          required
        />
      </div>
      <label class="label" htmlFor="message">Message</label>
      <div class="control">
        <textarea
          id="message"
          class="w-full h-32 border rounded resize-none"
          name="message"
          required
        />
      </div>
      <div class="text-right">
        <button class="px-6 py-1 border border-gray-200 rounded" type="reset">
          Cancel
        </button>
        <button class="px-6 py-1 text-white rounded bg-kaldi" type="submit">
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>
