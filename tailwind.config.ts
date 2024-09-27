import { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function sizePlugin(api) {
      api.matchUtilities(
        { s: (value: string) => ({ width: value, height: value }) },
        { values: api.theme('width') },
      )
    }),
  ],
}

export default config
