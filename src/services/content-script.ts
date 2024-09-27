console.info('Content script is running')

import { TFontsData } from '@/lib/types'

const inspectFonts = (): TFontsData => {
  const fontInfo = new Set<string>()
  const elements = document.querySelectorAll<HTMLElement>('*')

  elements.forEach((el) => {
    const computedStyle = window.getComputedStyle(el)
    computedStyle.fontFamily.split(',').forEach((font) => {
      fontInfo.add(font.trim())
    })
  })
  return Array.from(fontInfo)
}

const fonts = inspectFonts()
chrome.storage.sync.set({ fonts })
chrome.runtime.sendMessage({ type: 'FONT_INFO', fonts })
