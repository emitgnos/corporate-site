import { css } from 'utils/stitches.config'

export const styles = {
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
}
