import * as Switch from '@radix-ui/react-switch'
import * as Label from '@radix-ui/react-label'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import Head from 'next/head'
import Logo from 'assets/logo.svg'
import IconMusical from 'assets/icons/musical.svg'
import IconMap from 'assets/icons/map.svg'
import IconPen from 'assets/icons/pen.svg'
import IconPaw from 'assets/icons/paw.svg'
import IconPlane from 'assets/icons/plane.svg'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { css } from 'utils/stitches.config'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>()
  const { resolvedTheme, setTheme } = useTheme()
  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === 'dark')
    }
  }, [resolvedTheme])

  const styles = {
    mainWrapper: css({
      maxWidth: '560px',
      height: '100vh',
      margin: '40px auto',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    }),
    logo: css({
      width: '285px',
      display: 'flex',
      marginTop: '200px',
      marginBottom: '24px',
      '> svg': {
        width: '100%',
        height: 'auto',
      },
    }),
    catchCopy: css({
      typography: 'caption',
      fontStyle: 'normal',
      color: '$text4',
      display: 'block',
      marginBottom: '80px',
    }),
    contents: css({
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      '> div': {
        display: 'flex',
        alignItems: 'flex-start',
        '> dt': {
          display: 'flex',
          alignItems: 'center',
          width: '148px',
          '> svg': {
            marginRight: '16px',
            color: '$primary4',
          },
        },
      },
    }),
    footer: css({
      position: 'fixed',
      bottom: '16px',
      right: '32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    }),
    switchRoot: css({
      border: 'none',
      width: '48px',
      height: '24px',
      marginBottom: '16px',
      backgroundColor: '$background1',
      borderRadius: '24px',
      position: 'relative',
    }),
    switchThumb: css({
      display: 'block',
      width: '22px',
      height: '22px',
      backgroundColor: '#09C882',
      borderRadius: '24px',
      transition: 'transform 0.17s ease',
      transform: 'translateX(1px)',
      '&[data-state="checked"]': { transform: 'translateX(25px)' },
    }),
    copyright: css({
      typography: 'caption',
      color: '$text4',
    }),
    backdrop: css({
      position: 'absolute',
      zIndex: -1,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '820px',
      height: '820px',
      overflow: 'hidden',
      borderRadius: '820px',
      background: isDarkMode
        ? 'conic-gradient(from 235deg at 50% 50%, rgb(14, 18, 14) 0deg, rgb(32, 28, 15) 180deg, rgb(12, 59, 55) 360deg)'
        : 'conic-gradient(from 235deg at 50% 50%, rgb(253, 253, 251) 0deg, rgb(255, 249, 241) 50deg, rgb(222, 228, 223) 360deg)',
    }),
  }

  return (
    <div>
      <Head>
        <title>Emitgnos Inc.</title>
      </Head>

      <main className={styles.mainWrapper()}>
        <h1 className={styles.logo()}>
          <Logo title="Emitgnos Inc." />
        </h1>
        <em className={styles.catchCopy()}>
          だれかの時間を増やすような / Like adding to someone&apos;s time
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
              <p>新潟県長岡市大手通2丁目2番地6 ながおか市民センターB1F</p>
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
        <div className={styles.backdrop()} />
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
