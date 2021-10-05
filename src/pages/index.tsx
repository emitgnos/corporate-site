import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import * as Switch from '@radix-ui/react-switch'
import * as Label from '@radix-ui/react-label'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import Head from 'next/head'
import Icon from 'assets/logo.svg'
import { css } from 'utils/stitches.config'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const styles = {
    button: css({
      typography: 'body2',
      backgroundColor: '$primary4',
      borderColor: '$border',
      borderWidth: '1px',
      borderRadius: '9999px',
      color: '$text10',
      cursor: 'pointer',
      padding: '10px 15px',
      marginBottom: '12px',
      display: 'block',
      '&::after': {
        content: '',
        display: 'inline',
      },
    }),
    headLine: css({
      typography: 'headline5',
      color: '$text1',
      marginBottom: '24px',
    }),
    logo: css({
      width: '285px',
      display: 'flex',
      marginBottom: '32px',
      '> svg': {
        width: '100%',
        height: 'auto',
      },
    }),
    switchRoot: css({
      border: 'none',
      width: 48,
      height: 24,
      backgroundColor: '$background1',
      borderRadius: '24px',
      position: 'relative',
    }),
    switchThumb: css({
      display: 'block',
      width: 22,
      height: 22,
      backgroundColor: '$primary5',
      borderRadius: '24px',
      transition: 'transform 100ms',
      transform: 'translateX(1px)',
      '&[data-state="checked"]': { transform: 'translateX(25px)' },
    }),
  }

  const [isDarkMode, setIsDarkMode] = useState<boolean>()
  const { resolvedTheme, setTheme } = useTheme()
  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === 'dark')
    }
  }, [resolvedTheme])

  return (
    <div>
      <Head>
        <title>Emitgnos Inc.</title>
      </Head>

      <main>
        <div className={styles.logo()}>
          <Icon title="Emitgnos Inc." />
        </div>
        <h1 className={styles.headLine()}>
          Welcome to Emitgnos corporate site.
        </h1>
        <button type="button" className={styles.button()}>
          Button 1
        </button>

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
      </main>
    </div>
  )
}

export default Home
