import { css } from 'configs/stitches'

export const styles = {
  wrapper: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '24px',
    '> h1': {
      marginBottom: '24px',
    },
    a: {
      color: '$primary3',
    },
  }),
}
