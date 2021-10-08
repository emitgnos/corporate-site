import classnames from 'classnames'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { css } from 'utils/stitches.config'
import { dayjs } from 'utils/dayjs'

export const BackdropClock: React.VFC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>()
  const [nowMinutesOfSecond, setNowMinutesOfSecond] = useState<number>()
  const { resolvedTheme } = useTheme()
  const now = dayjs()

  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === 'dark')
    }
  }, [resolvedTheme])

  const sleep = async (): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, 1000))
  }

  useEffect(() => {
    sleep().then(() => {
      setNowMinutesOfSecond(now.minute() * 60 + now.second())
    })
  }, [setNowMinutesOfSecond, now])

  const calcMinuteDeg = (nowMinute: number) => nowMinute * (365 / 3600) + 365

  const backdropStyles = css({
    position: 'absolute',
    zIndex: -1,
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%) rotate(${
      nowMinutesOfSecond ? calcMinuteDeg(nowMinutesOfSecond) : 0
    }deg)`,
    width: '820px',
    height: '820px',
    overflow: 'hidden',
    borderRadius: '820px',
    transition: '1s ease',
    background: isDarkMode
      ? `conic-gradient(from 0deg at 50% 50%, rgb(14, 18, 14) 0deg, rgb(32, 28, 15) 180deg, rgb(12, 59, 55) 360deg)`
      : `conic-gradient(from 0deg at 50% 50%, rgb(251, 251, 249) 0deg, rgb(255, 249, 241) 50deg, rgb(221, 230, 222) 360deg)`,
    opacity: 0,
    '&.-is-visible': {
      opacity: 1,
    },
  })

  return (
    <div
      className={classnames(
        backdropStyles(),
        nowMinutesOfSecond && '-is-visible'
      )}
    />
  )
}
