<h1>Nuxt Content + Netlify CMS Starter Blog</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)

**Note:** This starter uses [Nuxt 2.14](https://nuxtjs.org/blog/nuxt-static-improvements/) and [@nuxt/content v1.1.0](https://content.nuxtjs.org/).

This repo contains an example business website that is built with [Nuxt.js](https://nuxtjs.org/), [@nuxt/content](https://content.nuxtjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://nuxt-starter-netlify-cms.netlify.app/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Features

- A simple landing page with blog functionality built with Netlify CMS and [@nuxt/content](https://content.nuxtjs.org/)
- Editable Pages: Landing, About, Product, Blog-Collection and Contact page with Netlify Form support
- Create Blog posts from Netlify CMS
- Tags: Separate page for posts under each tag
- Basic directory organization
- Uses TailwindCSS for styling from the [`@nuxtjs/tailwindcss`](https://github.com/nuxt-community/tailwindcss-module) module, with PurgeCSS included for minimal CSS.
- Blazing fast loading times thanks to server-side rendering in [full static mode](https://nuxtjs.org/blog/going-full-static/).
- Separate components for everything
- Netlify deploy configuration
- Netlify function support, see `lambda` folder
- ..and more

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Nuxt](https://nuxtjs.org/docs/2.x/get-started/installation)
- [Netlify CLI](https://github.com/netlify/cli)

## Getting Started (Recommended)

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/lukeocodes/nuxt-starter-netlify-cms&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

### Access Locally

Pulldown a local copy of the Github repository Netlify created for you, with the name you specified in the previous step
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ npm install
$ netlify dev # or ntl dev
```

This uses the new [Netlify Dev](https://www.netlify.com/products/dev/?utm_source=blog&utm_medium=netlifycms&utm_campaign=devex) CLI feature to serve any functions you have in the `lambda` folder.

To test the CMS locally, you'll need to run a production build of the site:

```
$ netlify dev # or ntl dev
```

## Getting Started (Without Netlify)

```
$ git clone https://github.com/lukeocodes/gatsby-starter-netlify-cms/ [SITE_DIRECTORY_NAME]
$ cd [SITE_DIRECTORY_NAME]
$ npm install

# dev start
$ npm run dev

# prod build and start
$ npm run generate
$ npm run start
```

### Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Debugging

Windows users might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

MacOS users might also encounter some errors, for more info check [node-gyp](https://github.com/nodejs/node-gyp). We recommend using the latest stable node version.

# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).
