import { resolve } from 'path'
/**
 * @type {import('@nuxt/types').NuxtConfig} config
 */
const config = {
  buildModules: [
    '@nuxt/typescript-build',
    ...(process.env.NODE_ENV === 'development' ? ['@nuxtjs/tailwindcss'] : []),
    '../src/index.ts',
  ],
  sanity: {
    ...(process.env.NODE_ENV === 'development'
      ? { projectId: 'j1o4tmjp' }
      : {}),
    dataset: 'production',
    additionalClients: {
      another: {},
    },
  },
  build: {
    extend (config) {
      config.resolve.alias['@nuxtjs/sanity/sanity-content'] = resolve(
        __dirname,
        '../src/components/sanity-content',
      )
      config.resolve.alias['@nuxtjs/sanity/sanity-image'] = resolve(
        __dirname,
        '../src/components/sanity-image',
      )
      config.resolve.alias['@nuxtjs/sanity'] = resolve(
        __dirname,
        '../src/index.ts',
      )
    },
  },
}

export default config
