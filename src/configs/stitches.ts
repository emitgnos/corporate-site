import { createStitches } from '@stitches/react'

const rem = (px: number) => {
  return `${px / 16}rem`
}

const stitches = createStitches({
  theme: {
    fonts: {
      system: `Hiragino Sans, Hiragino Kaku Gothic ProN, Helvetica Neue, Arial,
      Roboto, 'Noto Sans JP', Meiryo, sans-serif`,
    },
    fontSizes: {
      headline5: rem(21),
      headline6: rem(18),
      body2: rem(14),
      caption: rem(12),
    },
    colors: {
      text1: '#132F24',
      text4: '#61756D',
      text6: '#818D89',
      text10: '#F9FAFA',
      background1: '#0D1614',
      background8: '#ECEEED',
      background9: '#F9FAFA',
      background10: '#FFFFFF',
      primary3: '#33614F',
      primary4: '#0B895D',
      primary5: '#09C882',
      border: 'rgba(0,0,0,0.08)',
    },
    transitions: {
      easeInOut: 'cubic-bezier(0.45, 0.1, 0.29, 1)',
    },
  },
  media: {
    sm: '(min-width: 600px)',
    md: '(min-width: 960px)',
    lg: '(min-width: 1280px)',
    xl: '(min-width: 1920px)',
  },
  utils: {
    typography: (variant: 'body2' | 'headline5' | 'caption') => {
      switch (variant) {
        case 'headline5':
          return {
            fontSize: rem(21),
            letterSpacing: '0em',
            lineHeight: '150%',
            fontWeight: 600,
          }
        case 'body2':
          return {
            fontSize: rem(14),
            letterSpacing: '0.068em',
            lineHeight: '132%',
            fontWeight: 300,
          }
        case 'caption':
          return {
            fontSize: rem(12),
            letterSpacing: '0.068em',
            lineHeight: '132%',
            fontWeight: 300,
          }
        default:
          return {}
      }
    },
  },
})

export const dark = stitches.createTheme('dark-theme', {
  colors: {
    text1: '#F9FAFA',
    text4: '#818D89',
    text6: '#61756D',
    text10: '#132F24',
    background1: '#FFFFFF',
    background8: '#25302E',
    background9: '#0D1614',
    background10: '#000000',
    primary3: 'transparent',
    primary4: '#09C882',
    primary5: '#0B895D',
    border: 'rgba(255,255,255,0.11)',
  },
})

export const globalStyles = stitches.globalCss({
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
    lineHeight: '132%',
    fontWeight: 300,
  },
  button: {
    cursor: 'pointer',
  },
})

export const { styled, css, theme, getCssText } = stitches
