import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from 'utils/stitches.config'

class AppDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument