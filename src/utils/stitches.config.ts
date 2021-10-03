import { createStitches, globalCss } from '@stitches/react'

export const { styled, css, theme, createTheme, getCssText } = createStitches({
  theme: {
    fonts: {
      system: `Hiragino Sans, Hiragino Kaku Gothic ProN, Helvetica Neue, Arial,
      Roboto, 'Noto Sans JP', Meiryo, sans-serif`,
    },
    fontSizes: {},
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
  },
  media: {
    sm: '(min-width: 600px)',
    md: '(min-width: 960px)',
    lg: '(min-width: 1280px)',
    xl: '(min-width: 1920px)',
  },
})

export const dark = createTheme({
  colors: {
    text1: '#F9FAFA',
    text4: '#818D89',
    text6: '#61756D',
    text10: '#132F24',
    background1: '#FFFFFF',
    background8: 'transparent',
    background9: '#0D1614',
    background10: '#000000',
    primary3: 'transparent',
    primary4: '#09C882',
    primary5: 'transparent',
  },
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '&::before, &::after': {
      boxSizing: 'border-box',
    },
  },
  html: {
    fontFamily: '$system',
    color: '$text1',
  },
  button: {
    cursor: 'pointer',
  },
})
