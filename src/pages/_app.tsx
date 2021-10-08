import { globalCss } from '@stitches/react'
import { IdProvider } from '@radix-ui/react-id'
import { ThemeProvider } from 'next-themes'
import { dark } from 'utils/stitches.config'
import type { AppProps } from 'next/app'

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '&::before, &::after': {
      boxSizing: 'border-box',
    },
  },
  html: {
    overflowX: 'hidden',
  },
  body: {
    fontFamily: '$system',
    color: '$text1',
    background: '$background9',
    fontSize: `${14 / 16}rem`,
    letterSpacing: '0.068em',
    lineHeight: '136%',
    fontWeight: 300,
  },
  button: {
    cursor: 'pointer',
  },
})

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  globalStyles()

  return (
    <IdProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{ light: 'light-theme', dark: dark.className }}
        disableTransitionOnChange={true}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </IdProvider>
  )
}
export default App
