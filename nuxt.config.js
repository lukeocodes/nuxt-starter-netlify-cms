import path from 'path'
import postcssImport from 'postcss-import'
import postcssNesting from 'postcss-nesting'
import postcssPresetEnv from 'postcss-preset-env'
import * as SITE_INFO from './assets/content/site/info.json'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'

export default {
  target: 'static',

  env: {
    url:
      process.env.NODE_ENV === 'production'
        ? process.env.URL || 'http://createADotEnvFileAndSetURL'
        : 'http://localhost:3000',
    lang: SITE_INFO.sitelang || 'en-US'
  },

  head: {
    title: SITE_INFO.sitename || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_INFO.sitedescription || process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400&display=swap'
      }
    ] // ? Imports the font 'Karla' and is optimized by the netlify plugin 'Subfont'
  },

  generate: {
    fallback: true,
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f3f5f4' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/tailwind.css', '@/assets/css/main.pcss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxtjs/svg', '@nuxtjs/pwa'],

  modules: ['@nuxtjs/markdownit', 'nuxt-purgecss'],

  markdownit: {
    injected: true
  },

  build: {
    extractCSS: true,
  },














  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false // enables `import { theme } from '~tailwind.config'`
  },
  purgeCSS: {
    mode: 'postcss',
    whitelist: ['dark-mode', 'light-mode', 'btn', 'icon', 'main'],
    whitelistPatterns: [/^article/, /image$/]
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: COLOR_MODE_FALLBACK, // fallback value if not system preference found
    componentName: 'ColorScheme',
    cookie: {
      options: {
        sameSite: 'lax'
      }
    }
  },
  pwa: {
    icon: {
      source: 'static/icon.png',
      filename: 'icon.png'
    },
    manifest: { name: SITE_INFO.sitename || process.env.npm_package_name || '', lang: process.env.lang },
    meta: {
      name: SITE_INFO.sitename || process.env.npm_package_name || '',
      lang: process.env.lang,
      ogHost: process.env.URL,
      ogImage: '/ogp.jpg'
    }
  }
}
