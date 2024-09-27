import { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      mono: ['JetBrains Mono', ...fontFamily.mono],
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [
    plugin(function sizePlugin(api) {
      api.matchUtilities({ s: (value: string) => ({ width: value, height: value }) }, { values: api.theme('width') })
    }),
  ],
}

export default config
