import { css } from 'configs/stitches'

export const styles = {
  wrapper: css({
    width: '100%',
    height: '100vh',
    margin: '0 auto',
    display: 'grid',
    placeItems: 'center',
  }),
  main: css({
    maxWidth: '560px',
    padding: '24px 24px 120px 24px',
    position: 'relative',
    zIndex: 1,
    '@md': {
      padding: '24px',
    },
  }),
  logo: css({
    width: '238px',
    display: 'flex',
    marginBottom: '20px',
    '> svg': {
      width: '100%',
      height: 'auto',
    },
    '@sm': {
      width: '285px',
      marginBottom: '24px',
    },
  }),
  catchCopy: css({
    typography: 'caption',
    fontStyle: 'normal',
    color: '$text4',
    display: 'block',
    marginBottom: '56px',
    '@sm': {
      marginBottom: '80px',
    },
  }),
  contents: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    '> div': {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      gap: '12px',
      '> dt': {
        display: 'flex',
        alignItems: 'center',
        '> svg': {
          marginRight: '12px',
          color: '$primary4',
        },
      },
    },
    '@sm': {
      gap: '40px',
      '> div': {
        flexDirection: 'row',
        gap: 0,
        '> dt': {
          width: '148px',
          '> svg': {
            marginRight: '16px',
          },
        },
      },
    },
  }),
  footer: css({
    position: 'fixed',
    zIndex: 2,
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
    marginBottom: '12px',
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
  translate: css({
    color: '$primary4',
    background: '$background8',
    textDecoration: 'none',
    padding: '8px 16px',
    marginBottom: '12px',
    borderRadius: '24px',
    display: 'flex',
  }),
  legal: css({
    typography: 'caption',
    color: '$text4',
    '> a': {
      marginRight: '12px',
      color: '$primary4',
    },
  }),
}
