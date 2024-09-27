console.log('Background is running')

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'FONT_INFO' && request.fonts) {
    console.log('[background] Fonts:', request.fonts)
  }
})
