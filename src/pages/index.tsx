import Head from 'next/head'
import { styled } from 'utils/stitches.config'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const Button = styled('button', {
    typography: 'body2',
    backgroundColor: '$primary4',
    borderColor: '$border',
    borderWidth: '1px',
    borderRadius: '9999px',
    color: '$text10',
    cursor: 'pointer',
    padding: '10px 15px',
    '&::after': {
      content: '',
      display: 'inline',
    },
  })
  const HeadLine = styled('h1', {
    typography: 'headline5',
    color: '$text1',
    marginBottom: '24px',
    '> a': {
      color: '$primary4',
    },
  })

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeadLine>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </HeadLine>

        {/* eslint-disable-next-line no-constant-condition */}
        <Button type="button">Button 1</Button>
      </main>
    </div>
  )
}

export default Home
