import { defineManifest } from '@crxjs/vite-plugin'
import packageData from '../package.json'

//@ts-ignore
const isDev = process.env.NODE_ENV == 'development'

export default defineManifest({
  name: `${packageData.displayName || packageData.name}${isDev ? ` ➡️ Dev` : ''}`,
  description: packageData.description,
  version: packageData.version,
  manifest_version: 3,
  icons: {
    16: 'icons/icon-16.png',
    32: 'icons/icon-34.png',
    48: 'icons/icon-48.png',
    128: 'icons/icon-128.png',
  },
  action: {
    default_popup: 'src/views/popup.html',
    default_icon: 'icons/icon-48.png',
  },
  background: {
    service_worker: 'src/services/background.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      js: ['src/services/content-script.ts'],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        'icons/icon-16.png',
        'icons/icon-34.png',
        'icons/icon-48.png',
        'icons/icon-128.png',
      ],
      matches: [],
    },
  ],
  permissions: ['storage'],
})
