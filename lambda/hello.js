// For more info, check https://docs.netlify.com/functions/build-with-javascript
module.exports.handler = async function(event, context) {
  console.log("queryStringParameters", event.queryStringParameters)
  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: "Hello, World! This is better " + Math.round(Math.random() * 10)
    })
  }
}

// Now you are ready to access this API from anywhere in your Nuxt app! For example, in any asyncData or fetch method, insert:
// this.$http.$get('/.netlify/functions/hello')
//    .then(response => response.json())
//    .then(console.log)
// For more info see: https://http.nuxtjs.org/
