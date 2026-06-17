import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { wedding } from './src/data/wedding'

function getSiteUrl() {
  const fromEnv = process.env.VITE_SITE_URL?.replace(/\/$/, '')
  if (fromEnv) return fromEnv

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (production) return `https://${production}`

  const vercel = process.env.VERCEL_URL
  if (vercel) return `https://${vercel}`

  return ''
}

function weddingHtmlMeta() {
  const siteUrl = getSiteUrl()
  const ogImage = siteUrl
    ? `${siteUrl}${wedding.images.og}`
    : wedding.images.og
  const ogUrl = siteUrl || '/'

  return {
    name: 'wedding-html-meta',
    transformIndexHtml(html: string) {
      return html
        .replaceAll('__DOCUMENT_TITLE__', wedding.display.documentTitle)
        .replaceAll('__META_DESCRIPTION__', wedding.display.metaDescription)
        .replaceAll('__OG_TITLE__', wedding.display.ogTitle)
        .replaceAll('__OG_SITE_NAME__', wedding.display.ogSiteName)
        .replaceAll('__OG_IMAGE__', ogImage)
        .replaceAll('__OG_URL__', ogUrl)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), weddingHtmlMeta()],
})
