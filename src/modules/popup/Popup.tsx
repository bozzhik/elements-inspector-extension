import Container from '~/Global/Container'
import { FontDetails } from '~~/popup/FontDetails'

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
      <FontDetails fonts={fontInfo} />
    </Container>
  )
}
