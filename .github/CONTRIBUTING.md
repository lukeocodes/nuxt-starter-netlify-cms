# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

## Setup

> Install npm on your system: [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)

### Install dependencies

```sh
git clone https://github.com/lukeocodes/nuxt-starter-netlify-cms
npm install 
```

## Development Environment

To launch Nuxt in development mode with [hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/) on `http://localhost:3000`:

```bash
npm run dev
```

### `netlify dev`

Starts the netlify dev environment, including the Nuxt Development Environment.
For more infor check the [Netlify Dev Docs](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md)

```sh
netlify dev
```

## Available scripts

These are included in your `package.json`.

```json
"scripts": {
  "dev": "nuxt",
  "build": "nuxt build",
  "start": "nuxt start",
  "generate": "nuxt generate"
}
```

You can run different commands depending on the [target](/docs/2.x/features/deployment-targets):

### target: `server` (default value)

- **nuxt dev** - Launch the development server.
- **nuxt build** - Build and optimize your application with webpack for production.
- **nuxt start** - Start the production server (after running `nuxt build`). Use it for Node.js hosting like Heroku, Digital Ocean, etc.

### target: `static`

- **nuxt dev** - Launch the development server.
- **nuxt generate** - Build the application (if needed), generate every route as a HTML file and statically export to `dist/` directory (used for static hosting).
- **nuxt start** - serve the `dist/` directory like your static hosting would do (Netlify, Vercel, Surge, etc), great for testing before deploying.

## Production Deployment

Nuxt.js lets you choose between Server or Static deployments.

### Server Deployment

To deploy a SSR application we use `target: server`, where server is the default value.

```bash
npm run build
```

Nuxt.js will create a `.nuxt` directory with everything inside ready to be deployed on your server hosting.

> We recommend putting `.nuxt` in `.npmignore` or `.gitignore`.

Once your application is built you can use the `start` command to see a production version of your application.

```bash
npm run start
```

### Static Deployment (Pre-rendered)

Nuxt.js gives you the ability to host your web application on any static hosting.

To deploy a static generated site make sure you have `target: static` in your `nuxt.config.js`.(For Nuxt >= 2.13:)

```js{}[nuxt.config.js]
export default {
  target: 'static'
}
```

```bash
npm run generate
```

Nuxt.js will create a `dist/` directory with everything inside ready to be deployed on a static hosting service.

As of Nuxt v2.13 there is a crawler installed that will now crawl your link tags and generate your routes when using the command `nuxt generate` based on those links.

> **Warning:** dynamic routes are ignored by the `generate` command when using Nuxt <= v2.12: [API Configuration generate](/docs/2.x/configuration-glossary/configuration-generate)

> When generating your web application with `nuxt generate`, [the context](/docs/2.x/internals-glossary/context) given to [asyncData](/docs/2.x/features/data-fetching#async-data) and [fetch](/docs/2.x/features/data-fetching#the-fetch-hook) will not have `req` and `res`.

#### **Fail on Error**

To return a non-zero status code when a page error is encountered and let the CI/CD fail the deployment or build, you can use the `--fail-on-error` argument.

```bash
npm run generate --fail-on-error
```

## Pull Requests

We actively welcome your pull requests!

If you need help with Git or our workflow, please ask on [Gitter.im](https://gitter.im/netlify/NetlifyCMS). We want your contributions even if you're just learning Git. Our maintainers are happy to help!

Netlify CMS uses the [Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) + [Feature Branches](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Additionally, PR's should be [rebased](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) on master when opened, and again before merging.

1. Fork the repo.
2. Create a branch from `main`. If you're addressing a specific issue, prefix your branch name with the issue number.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Run `npm run test` and ensure the test suite passes. (Not applicable yet)
5. Use `npm run lint` to format and lint your code.
6. PR's must be rebased before merge (feel free to ask for help).
7. PR should be reviewed by two maintainers prior to merging.

## License

By contributing to the Nuxt - Netlify CMS starter, you agree that your contributions will be licensed under its [MIT license](../LICENSE).
