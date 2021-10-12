import { IdProvider } from '@radix-ui/react-id'
import { ThemeProvider } from 'next-themes'
import { appWithTranslation } from 'next-i18next'
import { dark, globalStyles } from 'configs/stitches'
import type { AppProps } from 'next/app'

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
export default appWithTranslation(App)
