import { useMedia } from 'use-media'
import { globalStyles, theme, dark, styled } from 'utils/stitches.config'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles()
  const Wrapper = styled('div', {
    backgroundColor: '$background9',
    color: '$text1',
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    textAlign: 'center',
  })
  const isDarkMode = useMedia('(prefers-color-scheme: dark)')

  return (
    <Wrapper className={isDarkMode ? dark : theme}>
      <Component {...pageProps} />
    </Wrapper>
  )
}
export default App
