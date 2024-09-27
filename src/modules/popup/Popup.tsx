import Container from '~/Global/Container'

import { TFontsData } from '@/lib/types'
import { useState, useEffect } from 'react'

export const Popup = () => {
  const [fontInfo, setFontInfo] = useState<TFontsData>([])

  useEffect(() => {
    chrome.storage.sync.get(['fonts'], (result) => {
      if (result.fonts) {
        setFontInfo(result.fonts)
      } else {
        console.warn('No font information found in storage.')
      }
    })
  }, [])

  return (
    <Container>
      <div className="space-y-2">
        <h4 className="text-2xl">Fonts Used on the Page:</h4>
        <div>{fontInfo.join(', ')}</div>
      </div>
    </Container>
  )
}
