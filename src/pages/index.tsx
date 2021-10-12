import * as Switch from '@radix-ui/react-switch'
import * as Label from '@radix-ui/react-label'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
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
import type { GetStaticProps, NextPage } from 'next'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale)
    return {
      notFound: true,
    }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const Home: NextPage = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>()
  const { resolvedTheme, setTheme } = useTheme()
  const { t } = useTranslation('common')

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
        <em className={styles.catchCopy()} translate="no">
          {t('catchCopy')}
        </em>
        <dl className={styles.contents()}>
          <div>
            <dt>
              <IconMusical title="" />
              {t('companyName.label')}
            </dt>
            <dd>{t('companyName.value')}</dd>
          </div>
          <div>
            <dt>
              <IconMap title="" />
              {t('address.label')}
            </dt>
            <dd>
              <p>{t('postalCode.value')}</p>
              <p>{t('address.value')}</p>
            </dd>
          </div>
          <div>
            <dt>
              <IconPen title="" />
              {t('business.label')}
            </dt>
            <dd>{t('business.value')}</dd>
          </div>
          <div>
            <dt>
              <IconPaw title="" />
              {t('president.label')}
            </dt>
            <dd>{t('president.value')}</dd>
          </div>
          <div>
            <dt>
              <IconPlane title="" />
              {t('contact.label')}
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
        <small className={styles.copyright()} translate="no">
          © 2021– Emitgnos Inc.
        </small>
      </footer>
    </div>
  )
}

export default Home
