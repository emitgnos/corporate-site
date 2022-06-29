import Link from 'next/link'
import Head from 'next/head'
import { styles } from 'styles/fs'
import type { NextPage } from 'next'

const FS: NextPage = () => {
  const metaTitle = 'Emitgnos Inc.'
  const siteUrl = 'https://emitgnos.com'

  return (
    <main className={styles.wrapper()}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="robots" content="noindex" />
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

      <h1>Financial Statement</h1>
      <Link href="/financial-statement/FS-202204.pdf">2022.04</Link>
    </main>
  )
}

export default FS
