import * as Switch from '@radix-ui/react-switch'
import * as Label from '@radix-ui/react-label'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import Head from 'next/head'
import { BackdropClock } from 'components/BackdropClock'
import Logo from 'assets/logo.svg'
import IconMusical from 'assets/icons/musical.svg'
import IconMap from 'assets/icons/map.svg'
import IconPen from 'assets/icons/pen.svg'
import IconPaw from 'assets/icons/paw.svg'
import IconPlane from 'assets/icons/plane.svg'
import { styles } from 'styles/top'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>()
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === 'dark')
    }
  }, [resolvedTheme])

  const metaTitle = 'Emitgnos Inc.'
  const siteUrl = 'https://emitgnos.com'

  return (
    <div className={styles.wrapper()}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:image" content={`${siteUrl}/ogimage.png`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={metaTitle} />
        <meta
          property="twitter:image"
          content="https://emitgnos.com/ogimage.png"
        />
      </Head>
      <BackdropClock />
      <main className={styles.main()}>
        <h1 className={styles.logo()}>
          <Logo title="Emitgnos Inc." />
        </h1>
        <em className={styles.catchCopy()}>
          Like allow you to manipulate the flow of time…
        </em>
        <dl className={styles.contents()}>
          <div>
            <dt>
              <IconMusical title="" />
              社名
            </dt>
            <dd>株式会社Emitgnos（エミットグノス）</dd>
          </div>
          <div>
            <dt>
              <IconMap title="" />
              所在地
            </dt>
            <dd>
              <p>〒940-0062</p>
              <p>新潟県長岡市大手通2丁目2番地6</p>
            </dd>
          </div>
          <div>
            <dt>
              <IconPen title="" />
              事業内容
            </dt>
            <dd>Webアプリケーション等のデザインと開発</dd>
          </div>
          <div>
            <dt>
              <IconPaw title="" />
              代表取締役
            </dt>
            <dd>小村 奈央</dd>
          </div>
          <div>
            <dt>
              <IconPlane title="" />
              お問い合わせ
            </dt>
            <dd>contact@emitgnos.com</dd>
          </div>
        </dl>
      </main>

      <footer className={styles.footer()}>
        <VisuallyHidden.Root>
          <Label.Root htmlFor="visual-mode-switch">
            ダークモードに切り替える
          </Label.Root>
        </VisuallyHidden.Root>
        <Switch.Root
          id="visual-mode-switch"
          className={styles.switchRoot()}
          onCheckedChange={(checked) =>
            checked ? setTheme('dark') : setTheme('light')
          }
          checked={isDarkMode}
        >
          <Switch.Thumb className={styles.switchThumb()} />
        </Switch.Root>
        <small className={styles.copyright()}>© 2021– Emitgnos Inc.</small>
      </footer>
    </div>
  )
}

export default Home
