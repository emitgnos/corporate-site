import Head from 'next/head'
import Icon from 'assets/logo.svg'
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
  const Logo = styled('div', {
    width: '285px',
    display: 'flex',
    marginBottom: '32px',
    '> svg': {
      width: '100%',
      height: 'auto',
    },
  })

  return (
    <div>
      <Head>
        <title>Emitgnos Inc.</title>
      </Head>

      <main>
        <Logo>
          <Icon title="Emitgnos Inc." />
        </Logo>
        <HeadLine>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </HeadLine>
        <Button type="button">Button 1</Button>
      </main>
    </div>
  )
}

export default Home
