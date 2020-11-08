// For more info, check https://docs.netlify.com/functions/build-with-javascript
module.exports.handler = function (event, context) {
  console.log(event)
  console.log('queryStringParameters', event.queryStringParameters)
  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: 'Hello, World! This is better ' + Math.round(Math.random() * 10),
    }),
  }
}

// Now you are ready to access this API from anywhere in your Nuxt app! For example, in any asyncData or fetch method, insert:
// async asyncData({ $axios }) {
//   const msg = await $axios.$get('/.netlify/functions/hello')
//   return { msg }
// }
// For more info see: https://axios.nuxtjs.org/
